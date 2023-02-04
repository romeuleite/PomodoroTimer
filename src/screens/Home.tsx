import { Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

import Logo from '../assets/tomato.svg';

import Timer from './timer';


export function Home() {
    const [minute, setMinute] = useState(1500);

    return (
        <View style={{backgroundColor: '#EE7055'}} className='flex-1 px-8 pt-16'>
            <View className='w-full flex-col items-center justify-between pt-32'>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { setMinute(777)}}>
                    <Logo />
                </TouchableOpacity>
                <Timer time={minute}/>
            </View>

        </View>
    )
}