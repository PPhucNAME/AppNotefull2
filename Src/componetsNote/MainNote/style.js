import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    items: {
        flex:12,
        marginHorizontal:16,
        marginTop:12,
    },
    footer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    addNote:{
        backgroundColor:'red',
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addNoteText:{
        color:'white',
        fontSize:14
    }
});
export default styles;