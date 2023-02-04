import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';

import Logo from '../assets/tomato.svg';

interface State {
    time: number;
    seconds: number;
    minutes: number;
}

interface Props {
    time: number
}

const Timer: React.FC<Props> = ({ time }) => {
    const [state, setState] = useState({
        time,
        seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
        minutes: Math.floor((time - 1) / 60),
    })

    useEffect(() => {
        setTimeout(() => {
            if (state.time === 0) {
                return;
            }

            setState({
                time: state.time - 1,
                minutes: Math.floor((state.time - 1) / 60),
                seconds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1
            });
        }, 1000);
    }, [state.time]);


    return (
        <Text style={{
            color: '#FFFFFF',
            fontSize: 32,
            fontWeight: 'bold',
            marginTop: 48
        }}>{`${state.minutes}: ${state.seconds <= 10 ? `0${state.seconds}` : state.seconds
            }`}</Text>
    )
}

export default Timer