import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Weather = () => {

    const [current, setCurrent] = useState([])

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=charlotte,north carolina&appid=b8c9d4a9c8777417e7ed2767ad7f931d&units=imperial')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCurrent(data.results)
            })

    }, [])


    return (
        <>


            <View>
                <Text>{current.weather.main}</Text>

            </View>


        </>
    )

}

export default Weather;