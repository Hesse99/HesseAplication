import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';

const App = () => {
const [name, setName] = useState('Hesse')
const [session, setSession]= useState({number: 6, title: 'state' })
const [current, setCurrent]= useState(true)
const [clicks, setClicks] = useState(0)

const onClickHandler = () => {
  setName('Avem un nou text modificat dinamic')
  setSession({number:7, title: 'Style'})
  setCurrent(false)
  setClicks(clicks + 1, session.number + 5)
}

  return (
    <View style={styles.body}>
       <Text style={styles.text}>{name}</Text>
       <Text style={styles.text}>This is session number {session.number} and title  {session.title}</Text>
       <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
       <Button title='First Button with link' onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UCAv9XxyGRILl8jklbGDXCkg/featured')}}></Button>
       <Button title='HookState Button' onPress={onClickHandler}></Button>
       <Text style={styles.text}>You clicked the button {clicks} times.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
     flex: 1,
     backgroundColor: '#ff0000',
     alignItems: 'center',
     justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10, 
  },
  button: {
    margin: 10
  },
});

export default App;
