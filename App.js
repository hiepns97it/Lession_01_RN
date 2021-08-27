import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Button3,{Button,Button2} from './src/components/Button'

function App() {

  const getData=()=>{
    setTimeout(()=>{
      setData([1,1,2,,2,2,2])
    },1000)
    fetch('').then(c=>{
      setData([])
    }).catch(()=>{
      setData(null)
    })
  }

  React.useEffect(()=>{
    getData();
  },[])

  const [data,setData] = React.useState(null); 


  return (
    <ScrollView>
      <TouchableOpacity onPress={()=>{
        setData([1,1,2,2,2,2]);
      }}>
        <Text>Change</Text>
      </TouchableOpacity>
      {
        !data?<Text>Deo co du lieu</Text>
        :
        <View>
          <Text>{data.length}</Text>
        </View>
      }
    </ScrollView>
  );
} 

const styles = StyleSheet.create({
});

export default App;
