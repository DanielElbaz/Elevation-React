
function Exercise2() {

    const getClassName = (temperature) => {

        return <div id="weather-box" className={getTemp(temperature)}></div>

    }


    return (
        <div className="ex-space">
            <h4 className='ex-title'>Exercise 2</h4>
            <div className="exercise" id="ex-2">
                {getClassName(5)}
            </div>
        </div>
    )

    function getTemp(temperature) {
        return temperature < 15 ? 'cold' : (temperature > 15 && temperature < 30) ? 'fair' : 'hot';
    }
}

export default Exercise2;