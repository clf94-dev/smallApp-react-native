import React , {useState }from 'react'
import { View, Text, Button } from 'react-native';


export default function ButtonsDemo ({navigation}) {
    const [randomColor, setColor] = useState('#ffffff');
const generateRandom = () =>{
var red = Math.round(Math.random() * 256).toString(16);
var blue = Math.round(Math.random() * 256).toString(16);
var green = Math.round(Math.random() * 256).toString(16);

var color= '#'+ red + green+blue;
return (setColor(color));

}

    return (
      <View>
        <Button title='Random Colour' onPress={()=> generateRandom()} />
        <View style={{height: 100, width: 200, backgroundColor:`${randomColor}`}}> 
       <Text style={{color: 'white'}} > {randomColor}</Text></View>
      </View>
    );
}

