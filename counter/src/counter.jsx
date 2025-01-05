function Counterss() {

    let counter = 0

    const increasevalue  = () => {
        counter++
        console.log(counter)
    }
    const decreasevalue = () => {
        --counter
        console.log(counter)
    }

    return (
        <>
            <p>
                Default value : {counter}
            </p>
        </>
        

    )
}