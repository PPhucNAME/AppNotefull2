import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const index = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.content}>
            <Text style={styles.contentEvent}>{props.contentNote}</Text>
            <View style={styles.contentTimer}>
              <Text>Ngày: {props.contentDate}</Text>
              <Text>Lúc: {props.contentTime}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={props.onDeleteTask}>
          <View style={styles.remove}>
            <Text style={styles.removeText}>Xóa</Text>
          </View> 
        </TouchableOpacity>
        
    </View>
  )
}

export default index