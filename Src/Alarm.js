import { View, Text, Button, Alert, Platform } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import styles from './AlarmStyle'
import ListAlarm from './componentsAlarm/ListAlarm'
import TaskTimePicker from './componentsAlarm/TaskTimePicker'
import { Audio } from 'expo-av'
var taskTime1List=[];
const Alarm = () => {
  const [sound, setSound] = React.useState();
  const [isClockAlarm, setIsClockAlarm] = useState(true);
  const delay = (time) => {
    var i;
    for(i=0; i<time; i++) {

    }
  }
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./componentsAlarm/AudioAlarm/assets/KK1.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  const playAlarm = () => {
      setIsClockAlarm(true);
  }
  const pauseAlarm = () => {
      setIsClockAlarm(false);
  }
  var myInterval = setInterval(kiemtra,50000);
   function kiemtra () {
      var i = 0;
      let ring = 'null';
      let hours = new Date().getHours();
      let minutes = new Date().getMinutes();
      let fTime = hours  + ' giờ ' + ' : ' + minutes + ' phút ' ;
      for (i=0 ; i<=taskTime1List.length ; i++) {
        if(fTime === taskTime1List[i]) {
          myStop();
          ring = setInterval(()=>{
            playSound();
          },10000)
          Alert.alert(
            "Thông Báo",
            "Bạn có chắc chắn muốn tắt báo thức ?",
            [
              {
                text:"Có",
                onPress: () => {
                  setTimeout(()=>{
                    clearInterval(ring);
                    myInterval = setInterval(kiemtra,50000);
                  },10000);
              
                }
              },
            ]
          );
        }
      }
    }
    const myStop = () => {
      clearInterval(myInterval)
    }
    const [taskTimeList, settaskTimeList] = useState([])
    const [taskTime1List, settaskTime1List] = useState([])
    const handleAddTask = (fDate, fTime) => {
      settaskTimeList([...taskTimeList,fDate]);
      settaskTime1List([...taskTime1List,fTime]);
    }
    const handleDeleteTask = (index) => {
      Alert.alert(
        "Thông Báo",
        "Bạn có chắc chắn muốn xóa ?",
        [
          {
            text:"Có",
            onPress: () => {
              let taskListTmp = [...taskTimeList];
              taskListTmp.splice(index,1);
              settaskTimeList(taskListTmp);
              let taskList1Tmp = [...taskTime1List];
              taskList1Tmp.splice(index,1);
              settaskTime1List(taskList1Tmp);
            }
          },
          {text:"Không"},
        ]
      );
  
    }
    return (
      <View style={styles.container}>
          <View style = {styles.items}>
              {
                taskTimeList.map((item, index) => { 
                    return <ListAlarm 
                                key={index} 
                                title={taskTimeList[index]} 
                                title1={taskTime1List[index]}
                                onDeleteTask={()=>{handleDeleteTask(index)}}
                            />
                })
              }
          </View>
          <View style={styles.timePicker}>
              <TaskTimePicker onAddTask={handleAddTask}/>
          </View>
      </View>
     
    )
  
}
export default Alarm
