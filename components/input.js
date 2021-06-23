import React,{useState} from "react"
import { Text,View,TextInput,Button} from "react-native"
const input =({navigation})=>{
    const [age,setAge]=useState(null);
    const [school,setSchool]=useState(null);
    const [college,setCollege]=useState(null);
    const pressHandler=()=>{
        navigation.navigate('output',{age,school,college})
    }
    return(
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <TextInput placeholder="Enter your Age"
                       onChangeText={(text)=>{setAge(text)}}
                       keyboardType="numeric"
                       style={{borderWidth:0.5,width:'70%',borderRadius:10,textAlign:'center',marginBottom:20}}/>
            <TextInput placeholder="Enter your school"
                       onChangeText={(text)=>{setSchool(text)}}
                       style={{borderWidth:0.5,width:'70%',borderRadius:10,textAlign:'center',marginBottom:20}}/>
            <TextInput placeholder="Enter your College"
                       onChangeText={(text)=>{setCollege(text)}}
                       style={{borderWidth:0.5,width:'70%',borderRadius:10,textAlign:'center',marginBottom:20}}/>
            <View style={{marginTop:20,width:'50%'}}>
                <Button title="Submit"
                        onPress={()=>pressHandler()}/>
            </View>
        </View>
    )
}
export default input;