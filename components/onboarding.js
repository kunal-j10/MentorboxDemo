import React,{useState,useRef} from 'react'
import { View,Text,Image,FlatList,TouchableOpacity,Animated,Button} from 'react-native'
import slides from '../slides'
import OnboardingItem from './onboardingItem'
import Pagination from './Pagination'
const onboarding=({navigation})=>{
    const [currentIndex,setCurrentIndex]=useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged= useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current;
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <View style={{flex:0.7}}>
            <FlatList
            data={slides}
            renderItem={({item})=><OnboardingItem item={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item)=>item.id}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                useNativeDriver:false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />
            </View>

            <Pagination data={slides} scrollX={scrollX}/>
            
            <View style={{flex:0.3,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('input')}}>
            <View style={{borderWidth:1.5,borderColor:'gray',paddingHorizontal:60,paddingVertical:5,borderRadius:5,flexDirection:'row',marginTop:'10%',justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assests/logo.jpg')} style={{marginRight:15,justifyContent:'center',resizeMode:'center',width:30,height:30}}/>
            <Text style={{color:'gray',fontWeight:'900'}}>Sign in with Google</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default onboarding;
