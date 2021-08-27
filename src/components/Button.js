import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const ButtonChild=({onPress2})=>{

    return <TouchableOpacity onPress={()=>{
        onPress2();
    }}>
        <Text>Child</Text>
    </TouchableOpacity>
}

export const Button = ({txt})=>{

  const [count,setCount] = React.useState(0);
  const [count2,setCount2] = React.useState(0);

  const _onpress = ()=>{
    setCount(c=>c+1);
  }

  console.log('update')

  React.useEffect(()=>{
    console.log("dit mount")
    return ()=>{
      console.log("dit destroy")
    }
  },[])

  React.useEffect(()=>{
    console.log('count changed')
  },[count2])

  const _childPress=()=>{
    setCount(c=>c+1);
  }

  return <TouchableOpacity onPress={_onpress} >
    <Text>{txt} {count}</Text>
    <View>
        <ButtonChild onPress={_childPress}/>
    </View>
  </TouchableOpacity>
}

export const Button2 = ({txt})=>{
    return <TouchableOpacity>
      <Text>{txt}</Text>
    </TouchableOpacity>
}

export default ({txt})=>{
    return <TouchableOpacity>
      <Text>{txt}</Text>
    </TouchableOpacity>
}
