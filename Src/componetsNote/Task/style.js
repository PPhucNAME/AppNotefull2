import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    item:{
        width:"100%",
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderRadius:10,
        paddingHorizontal:12,
        paddingVertical:12,
        marginBottom:12,
        borderWidth:2,
        borderColor:'#CCCCFF',
    },
    content: {
        flex:8,
        marginRight:12,
    },
    contentEvent: {
        backgroundColor: '#33CCFF',
        fontSize:16,
        fontWeight:'600',
        paddingHorizontal:12,
        paddingVertical:4,
        borderEndWidth: 2,
        borderRadius: 10,
        marginBottom: 4,
        color: '#363636'
        
    },
    contentTimer: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#33CCFF',
        paddingHorizontal:12,
        paddingVertical:4,
        borderRadius: 10,
    },
    remove: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor:'red',
        paddingHorizontal:14,
        paddingVertical:12,
        borderRadius: 8,
    },
    removeText:{
        color:'#fff',
        fontSize:12
    }
});
export default styles;