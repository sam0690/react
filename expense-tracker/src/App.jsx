import React, { useState, useEffect } from 'react';

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  // Calculate totals
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const balance = income - expenses;

  // Add new transaction
  const addTransaction = () => {
    if (!description.trim() || !amount || parseFloat(amount) <= 0) {
      alert('Please enter valid description and amount');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      type: type,
      date: new Date().toLocaleDateString()
    };

    setTransactions([newTransaction, ...transactions]);
    setDescription('');
    setAmount('');
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTransaction();
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">💰 Expense Tracker</h1>
          <p className="text-gray-600">Track your income and expenses easily</p>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Current Balance</h2>
            <div className={`text-3xl font-bold ${
              balance >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatCurrency(balance)}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">📈</div>
              <div className="text-sm text-gray-600">Income</div>
              <div className="text-xl font-semibold text-green-600">
                {formatCurrency(income)}
              </div>
            </div>
            <div className="bg-red-50 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">📉</div>
              <div className="text-sm text-gray-600">Expenses</div>
              <div className="text-xl font-semibold text-red-600">
                {formatCurrency(expenses)}
              </div>
            </div>
          </div>
        </div>

        {/* Add Transaction Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Transaction</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter description..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="0.00"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setType('income')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    type === 'income'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-green-300'
                  }`}
                >
                  📈 Income
                </button>
                <button
                  onClick={() => setType('expense')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    type === 'expense'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-red-300'
                  }`}
                >
                  📉 Expense
                </button>
              </div>
            </div>

            <button
              onClick={addTransaction}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Add Transaction
            </button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Recent Transactions</h3>
            <span className="text-sm text-gray-500">
              {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
            </span>
          </div>

          {transactions.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-500 text-lg">No transactions yet</p>
              <p className="text-gray-400 text-sm">Add your first transaction above</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className={`p-4 rounded-xl border-l-4 bg-gray-50 hover:bg-gray-100 transition-colors ${
                    transaction.type === 'income' ? 'border-green-500' : 'border-red-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">
                          {transaction.type === 'income' ? '📈' : '📉'}
                        </span>
                        <h4 className="font-semibold text-gray-800">
                          {transaction.description}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-semibold ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : '-'}
                        {formatCurrency(transaction.amount)}
                      </span>
                      
                      <button
                        onClick={() => deleteTransaction(transaction.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete transaction"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>💡 Data is stored temporarily in memory</p>
        </div>
      </div>
    </div>
  );
}