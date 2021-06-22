import React from "react"
import { Text,View,Image,useWindowDimensions,StyleSheet } from "react-native"


const onboardingItem=({item})=>{
    const {width}=useWindowDimensions();
  return(
    <View style={[styles.container,{width}]}>
      <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>

      <View style={{flex:0.3}}>
          <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}
export default onboardingItem;

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        flex:0.7,
        justifyContent:'center'
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#493d8a',
        textAlign:'center'
    },
    description:{
        fontWeight:"300",
        color:'black',
        textAlign:'center',
        fontSize:17,
        paddingHorizontal:64
    }
})