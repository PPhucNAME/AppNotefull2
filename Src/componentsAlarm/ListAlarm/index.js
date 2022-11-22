import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const ListAlarm = (props) => {
  return (
    // <View style={styles.item}>
    //     <View style={styles.content}>
    //         <Text style={styles.contentTime}>{props.title1}</Text>
    //         <Text style={styles.contentDay}>{props.title}</Text>
    //     </View>
    //     <TouchableOpacity
    //       onPress={props.onDeleteTask}
    //     >
    //       <View style={styles.IntDelete}>
    //         <Text style={styles.IntDeleteText}>Xóa</Text>
    //       </View>
    //     </TouchableOpacity>
    // </View>
    <View style={styles.item}>
        <View style={styles.content}>
            <Text style={styles.contentEvent}>{props.title1}</Text>
            <Text style={styles.contentTimer}>{props.title} {props.contentDate}</Text>
        </View>
        <TouchableOpacity onPress={props.onDeleteTask}>
          <View style={styles.remove}>
            <Text style={styles.removeText}>Xóa</Text>
          </View> 
        </TouchableOpacity>
        
    </View>
  )
}

export default ListAlarm