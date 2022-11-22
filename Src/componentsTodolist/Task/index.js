import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const Task = (props) => {
    const {number} = props;
    const itembg   = number % 2 === 0 ? styles.even : styles.odd;
    return (
        <TouchableOpacity 
            onPress={props.onDeletaTask}
        >
            <View style={styles.item}>
                <View style={[styles.square,itembg]}>
                    <Text style={styles.number}>{props.number}</Text>
                </View>
                <Text style={styles.content}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task