import { StatusBar } from 'expo-status-bar';
import react, { useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity , View, Dimensions } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import second from './contains/color'
const screen = Dimensions.get('window');
/*theo ông code thì mỗi cái thiệt bị sẽ to nhỏ nên sử dụng cái 
dimensions này để làm gì đó 
*/
const formatNumber = number => `0${number}`.slice(-2)
const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins: formatNumber(mins), secs: formatNumber(secs)};
}
export default function App() {
  const [remainingSecs, setRemainingSecs] = useState(0);//cái này là để dùng State
  const [isActive, setIsActive] = useState(false);
  const {mins, secs } = getRemaining(remainingSecs);

  toggle = () => {//toggle là dùng để thực hiện luân phiên việc ẩn và hiện một phần tử 
    setIsActive(!isActive);
  }

  const reset = () =>{
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if(isActive) {
      interval = setInterval(() => { 
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000)
    } else if(!isActive && remainingSecs !== 0 ){
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, remainingSecs] )

  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />
      <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
      <TouchableOpacity onPress={this.toggle} styles={styles.button}>
        <Text style={styles.buttonText}>{isActive ? 'Tạm dừng' : 'Bắt đầu'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} styles={[styles.button, styles.buttonReset]}>
        <Text style={[styles.buttonText, styles.buttonReset]}>Đặt lại</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 10,
    borderColor:'#B9AAFF',
    width: screen.width / 2,// phần này
    height: screen.width / 2,//là chỉnh 
    borderRadius: screen.width / 2,//thêm 
    alignItems: ' center',//cái 
    justifyContent: ' center'//vòng
  },
  buttonText: {
    fontSize: 45,
    color: '#B9AAFF'
  },
  timerText: {
    color: '#ff3101',
    fontSize: 90,
    marginBottom: 20
  },
  buttonReset: {
    marginTop: 20,
    borderColor: '#FF851B'
  },
  buttonTextReset: {
    color: '#FF851B '
  }
});
