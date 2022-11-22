import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './NoteStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNote from './componetsNote/MainNote/index'
import DetailsMainNote from './componetsNote/DetailMainNote/index'
const Stack = createNativeStackNavigator();
const Note = () => {
  const [deleteNoticeNote, setDeleteNoticeNote] = useState([]);
  const [deleteNoticeNotes, setDeleteNoticeNotes] = useState([]);

  const [timeNote, setTimeNote] = useState([]);
  const [timeNotes, setTimeNotes] = useState([]);

  const [dateNote, setDateNote] = useState([]);
  const [dateNotes, setDateNotes] = useState([]);

  const [note, setNote] = useState([]);
  const [notes, setNotes] = useState([]);
  function handleNote() {
    let newDeleteNotice = deleteNoticeNote;
    let newDeleteNotices = [newDeleteNotice,...deleteNoticeNotes];
    let newTime = timeNote;
    let newTimes = [newTime,...timeNotes];
    let newDate = dateNote;
    let newDates = [newDate,...dateNotes];
    let newNote = note;
    let newNotes = [newNote,...notes];
    setDeleteNoticeNotes(newDeleteNotices);
    setDeleteNoticeNote('');
    setTimeNotes(newTimes);
    setTimeNote('');
    setDateNotes(newDates);
    setDateNote('');
    setNotes(newNotes)
    setNote('');
  }
  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="MainNote">
          {props => <MainNote 
            {...props} 
            notes={notes} 
            setNotes={setNotes} 
            note={note} 
            setNote={setNote} 
            dateNotes={dateNotes} 
            setDateNotes={setDateNotes} 
            dateNote={dateNote} 
            setDateNote={setDateNote}
            timeNotes={timeNotes}
            setTimeNotes={setTimeNotes}
            timeNote={timeNote}
            setTimeNote={setTimeNote}
            deleteNoticeNotes={deleteNoticeNotes}
            setDeleteNoticeNotes={setDeleteNoticeNotes}
            deleteNoticeNote={deleteNoticeNote}
            setDeleteNoticeNote={setDeleteNoticeNote}/>}
        </Stack.Screen>

        <Stack.Screen name="DetailsMainNote">
        {props => <DetailsMainNote 
          {...props} 
          note={note} 
          setNote={setNote} 
          handleNote={handleNote} 
          dateNote={dateNote} 
          setDateNote={setDateNote}
          timeNote={timeNote}
          setTimeNote={setTimeNote}
          deleteNoticeNote={deleteNoticeNote}
          setDeleteNoticeNote={setDeleteNoticeNote}/>}
        </Stack.Screen>
      </Stack.Navigator>
  )
}

export default Note