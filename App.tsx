import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';

const App = () => {
const [name, setName] = useState('Hesse')
const [session, setSession]= useState({number: 6, title: 'state' })
const [current, setCurrent]= useState(true)
const [clicks, setClicks] = useState(0)
const [Items, setItems] = useState([
{key: 1, item: 'Item 1'},
{key: 2, item: 'Item 2'},
{key: 3, item: 'Item 3'},
{key: 4, item: 'Item 4'},
{key: 5, item: 'Item 5'},
{key: 6, item: 'Item 6'},
{key: 7, item: 'Item 7'},
{key: 8, item: 'Item 8'},
{key: 0, item: 'Item 9'},

])

const onClickHandler = () => {
  setName('Avem un nou text modificat dinamic')
  setSession({number:7, title: 'Style'})
  setCurrent(false)
  setClicks(clicks + 1)
 // Alert.alert('Button for count')
}

  return (
    
   <View style={styles.body}>
       <ScrollView>{
        Items.map = (object) => {
          return(
            <View style={styles.item} key={object.key}>
             <Text style={styles.item}>{object.item}</Text>
            </View>
          )
        }
       <View style={styles.view1}>
          <Text style={styles.text}>first view by Hesse</Text>
       </View>
       <View style={styles.view2}>
          <Text style={styles.text}>Second4 view by Hesse </Text>
       </View>
      
       <Text style={styles.text}>{name}</Text>
       <Text style={styles.text}>This is session number {session.number} and title  {session.title}</Text>
       <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
       <Button title='First Button with link' onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UCAv9XxyGRILl8jklbGDXCkg/featured')}}></Button>
       <Button title='HookState Button' onPress={onClickHandler} color='#66ff33'></Button>
       <Text style={styles.text}>You clicked the button {clicks} times and your bank acount has {clicks * 5} $</Text>
         }
       </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
     flex: 1,
     flexDirection: 'column',
     //width: '100%',
     //height: '100%',
     backgroundColor: '#ff9999',
     alignItems: 'center',
     justifyContent: 'center',
     borderStyle : 'solid',
     borderWidth: 10,
  },
  text: {
    color: '#000000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10, 
    textTransform: 'uppercase',
    
  },
  view1: {
    flex: 1,
   //witdth: 100,
   //height: 100,
   backgroundColor: '#ffff00',
   alignItems: 'center',
   justifyContent: 'center',
  },
  view2: {
  // witdth: 100,
   //height: 100,
   flex: 1,
   backgroundColor: '#ff1111',
   alignItems: 'center',
   justifyContent: 'center',
  },
  item :{
    margin: 10,
    backgroundColor:'#cc00ff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
