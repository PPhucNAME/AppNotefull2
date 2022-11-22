import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    // class toàn cục
    My_Font:{
        fontSize:30,
        fontWeight:'500',
    }, 

    font_red:{
        color:'#ff3101',
    },

    font_white:{
        color:'#fff',
    },

    backdground__white:{
        backgroundColor:'#fff',
    },

    // dùng để thêm vào button khi page đang chọn
    button_pressing:{
        flex:1,
        backgroundColor:'#778899 !important',// màu xám 
    },

    // hết class toàn cục

    //Giao diện chung
    
    body:{
        flex:12,
    },

    body__content:{
        flex:6,
        backgroundColor:'#f1fd7a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    body__content__Clock:{
        width:250,
        height:250,
        borderRadius:200,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'white',
    },

    footer__button_op:{
        flex:1,
    },

    footer__button:{
        flex:1,
        marginHorizontal:2,
        marginVertical:4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ff3101',
        borderRadius:10,
    },
    // hết giao diện chung

    // Đồng Hồ
    container_clock: {
        flex:1,
    },
    // Hết đông hồ

    // Báo thức
    container_alarm: {
        flex:1,
    },

    body__content_Alarm:{
        width:'100%',
        flex:1,
    },

    body__content__Alarm__add: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        backgroundColor:'#f1fd7a',
    },

    text__add__timer:{
        fontSize:30,
        color:'#f1fd7a',
        backgroundColor:'#00FFFF',
        paddingHorizontal:15,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:100,
    },
    // Hết báo thức
});
export default styles;