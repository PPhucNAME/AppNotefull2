import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    bodyNote:{
        flex:12,
        backgroundColor:'#ecf5f5',
    },
    dateNote: {
        height:50,
    },
    dateNoteContent: {
        height:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        elevation: 5,
    },
    footerNote: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    agreeNote: {
        backgroundColor:'red',
        width: 100,
        paddingHorizontal:16,
        paddingVertical:12,
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
    },
    agreeNoteText: {
        color:'#fff',
        fontSize:14
    },
    textInput:{
        flex:1,
        padding: 20,
        paddingTop: 20,
        elevation: 5,
        width: '100%',
        fontSize: 19,
        height: 300,
        fontWeight: '600',
        shadowOpacity:0.4,
        shadowOffset: {width:0, height:4},
        borderColor: '#ecf5f5',
        borderWidth:2,
        backgroundColor:'#fff',
        marginBottom:12,
        marginTop:12
    },
});
export default styles;