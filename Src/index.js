import React from 'react'
import Clock from './Note';
import Stopwatch from './Stopwatch';
import Todolist from './Todolist';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Alarm from './Alarm';
import Note from './Note'
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor:'#dbd9d9',
          tabBarInactiveBackgroundColor:'#ff3101',
          tabBarActiveTintColor:'#ff3101',
          tabBarInactiveTintColor:'#fff',
          tabBarItemStyle:{
            marginHorizontal:2,
            borderRadius:10,
          },
         
          tabBarIconStyle:{
            display:'none'
          },
          tabBarLabelStyle:{
            flex:1,
            width:94,
            fontSize:14,
            paddingTop:14,
            borderRadius:10,
          }
        }}
      >
        <Tab.Screen name="Công việc" component={Todolist}/>
        <Tab.Screen name="Ghi chú" component={Note}/>
        <Tab.Screen name="Bấm giờ" component={Stopwatch}/>
        <Tab.Screen name="Báo thức" component={Alarm}/>
      </Tab.Navigator>
    );
  }

export default MyTabs