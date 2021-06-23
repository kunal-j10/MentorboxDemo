import React from "react"
import { Text,View } from "react-native"

const Display=({Title,value})=>{
    return(
        
            <View style={{flexDirection:'row',marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>{Title} :  </Text>
                <Text style={{fontSize:16}}>{value}</Text>
            </View>
        
    )
}

const output =({navigation})=>{
    return(
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <Display Title="Age" value={navigation.getParam('age')}/>
        <Display Title="School" value={navigation.getParam('school')}/>
        <Display Title="College" value={navigation.getParam('college')}/>
        </View>
    )
}
export default output;