import { View, Text, Button, Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from '../../TodolistStyle';
const TaskTimePicker = (props) => {
    const [datePicker, setDatePicker] = useState('Nhấn để chọn thời gian...')
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
    }
    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    }

    const handleDatePicker = (datetime) => {
        const currentTime = Date.now();
        let tempDate = datetime;
        if (currentTime > datetime.getTime()) {
            Alert.alert('Vui lòng nhập lai');
            hideDateTimePicker();
            return;
        }
        var noticeTime = ((datetime.getTime() - currentTime)/1000);
        var tgMonth = tempDate.getMonth() + 1;
        let tgMonth1 = tgMonth;
        let fTime = tempDate.getHours()  + ' giờ ' + ' : ' + tempDate.getMinutes() + ' phút ' ;
        let fDate = tempDate.getDate() + '/' + tgMonth1 + '/' + tempDate.getFullYear();
        setDatePicker(fDate + '\n' + fTime);
        props.sendDate(fDate,fTime,noticeTime);
        hideDateTimePicker();
    }
    return (
    <View>
        <TouchableOpacity
            onPress={() => {
                showDateTimePicker();
            }}
        >
            <View 
                style={{
                    height:50,
                    justifyContent:'center',
                    alignItems: 'center',
                    backgroundColor:'#33CCFF',
                    borderRadius:10,
                }}
            >
                <Text style={{fontSize:16, color:'#fff', fontWeight:'600'}}>
                    {datePicker}
                </Text>
            </View>
        </TouchableOpacity>
        <DateTimePicker
            mode="datetime"
            isVisible={isDateTimePickerVisible}
            onConfirm={handleDatePicker}
            onCancel={hideDateTimePicker}
        />
    </View>
    )
}

export default TaskTimePicker; 