import React from "react"
import { Text,View } from "react-native"
import Onboarding from "./components/onboarding"

const App=()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Onboarding/>
    </View>
  )
}
export default App;