import { StatusBar } from 'expo-status-bar';
import * as Notifications from "expo-notifications";
import React, { useState } from "react";
import { StyleSheet,  TouchableOpacity, Tpext, View, Switch, ScrollView } from 'react-native';
import MyTabs from './Src/index';
import { NavigationContainer } from '@react-navigation/native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

