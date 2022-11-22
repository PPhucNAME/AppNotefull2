import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ecf5f5'
    },
    items: {
        flex:12,
        marginTop:6,
        paddingHorizontal: 18,
    },
    AddNote:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AddNoteText:{
        color: 'white',
        backgroundColor:'red',
        paddingHorizontal:26,
        paddingVertical:12,
        borderRadius:10,
    },
});
export default styles;