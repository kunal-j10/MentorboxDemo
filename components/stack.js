import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"
import input from './input'
import onboarding from './onboarding'
import output from './output'

const screens={
    onboarding:{screen:onboarding,
        navigationOptions:{
            header:null
        }},
    input:{screen:input,
        navigationOptions:{
            header:null
        }},
    output:{screen:output,
        navigationOptions:{
            header:null
        }}
}

const stack= createStackNavigator(screens);
export default createAppContainer(stack);