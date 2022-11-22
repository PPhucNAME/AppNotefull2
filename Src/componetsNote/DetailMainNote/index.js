import { View, TextInput, Text, Button, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React ,{useState, useEffect, useRef} from 'react'
import styles from './style'
import TaskDatePicker from '../TaskDatePicker'
import * as Notifications from "expo-notifications";
import {schedulePushNotification, registerForPushNotificationsAsync, cancelNotification} from '../Notification'
import { addNotificationResponseReceivedListener } from 'expo-notifications'
import DateTimePicker from 'react-native-modal-datetime-picker';
import TaskTimePicker from '../TaskDatePicker'
import Alarm from '../../Alarm';
var count = 1 ;
const DetailsMainNote = ({ navigation, ...props }) => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
// Thông báo 


  const changeDate = (fDate, fTime, noticeTime)=>{
    props.setDateNote(fDate);
    props.setTimeNote(fTime);
    console.log(noticeTime);
    count = noticeTime;
   
  }
  const checkNull = () =>{
    if (props.note.length === 0) {
      alert('Vui lòng nhập ghi chú....')
      return false
    }
    if (props.dateNote.length === 0) {
      alert('Vui lòng chọn thời gian....')
      return false
    }
    props.handleNote()
    props.setDeleteNoticeNote(schedulePushNotification(count,props.note));
    var checkNullAlert = count;
    navigation.navigate('MainNote')
  }
  return (
    <View style={{ flex: 1}}>
        <View style={styles.bodyNote}>
            <ScrollView>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                      <View style={{padding:20, flex:1}}>
                          <View style={styles.dateNote}>
                            <TaskDatePicker sendDate={changeDate}/>
                          </View>
                          <TextInput
                            placeholder='Nhập ghi chú của bạn....' 
                            style={styles.textInput} 
                            multiline={true}
                            value = {props.note}
                            onChangeText = {(text)=>props.setNote(text)}
                          />
                          <View style={styles.footerNote}>
                            <TouchableOpacity 
                              onPress={() => {
                                checkNull()
                              }}
                            >
                              <View style={styles.agreeNote}>
                                  <Text style={styles.agreeNoteText}>Thêm vào</Text>
                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate('MainNote')
                              }}
                            >
                            <View style={styles.agreeNote}>
                                  <Text style={styles.agreeNoteText}>Thoát</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </KeyboardAvoidingView>
            </ScrollView>
        </View>
    </View>
  )
}

export default DetailsMainNote