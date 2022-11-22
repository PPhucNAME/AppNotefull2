import {StyleSheet} from 'react-native';
import second from './../../contains/color'
const styles = StyleSheet.create({
    addTask:{
        bottom: 16,
        width:'100%',
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    input:{
        height:44,
        width:'80%',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#21a3d0',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    iconwrapper:{
        width: 44,
        height: 44,
        backgroundColor:'#21a3d0',
        borderRadius: 44, 
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor: '#ecf5f5'
    },
    icon:{
        fontSize:24,
        color:'#fff',
    },
});
export default styles