import { View, Text, Button, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Task from '../Task'
import {cancelNotification} from '../Notification'
const MainNote = ({ navigation, ...props }) => {
    const handleDeleteTask = (index) => {
        Alert.alert(
          "Thông Báo",
          "Bạn có chắc chắn muốn xóa ?",
          [
            {
              text:"Có",
              onPress: () => {
                let taskListTmp = [...props.notes];
                taskListTmp.splice(index,1);
                props.setNotes(taskListTmp);
                cancelNotification(props.deleteNoticeNotes[index]._z);
                console.log('deleted notice')
              }
            },
            {text:"Không"},
          ]
        );
      }
    return (
    <View style={{ flex: 1, backgroundColor:'#ecf5f5'}}>
        <View style={styles.items}>
           <ScrollView>
           {
            props.notes.map((item,index) =>{
                return <Task key={index} contentNote={item} onDeleteTask={()=>handleDeleteTask(index)} contentDate={props.dateNotes[index]} contentTime={props.timeNotes[index]}></Task>
            })
           }
           </ScrollView>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsMainNote')}>
                <View style={styles.addNote}>
                    <Text style={styles.addNoteText}>Thêm mới</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default MainNote