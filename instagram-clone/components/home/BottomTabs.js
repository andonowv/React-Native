import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomTabs = () => {
  return (
    <View style={{height:60, color:'white', flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity>
       <Image style={{width:45, height:45, marginTop:5}} source={require('../../assets/home.png')}/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={style.icon} source={require('../../assets/search.png')}/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={style.icon} source={require('../../assets/play.png')}/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={style.icon} source={require('../../assets/shop.png')}/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={{width:50, height:50, borderRadius:25}}  source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/36869679_2010823932281459_1680163387692023808_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cY1_uQhKLgEAX_2O3wd&_nc_ht=scontent-ams2-1.xx&oh=00_AT8JKt1bWcSexQK201hlFJrKO4y7Odzu2c_MfwYTnNHrNA&oe=637D9038'}}/>
       </TouchableOpacity>
    </View> 
  )
}

const style = StyleSheet.create({
    icon:{
        backgroundColor:'white',
        width:50,
        height:50,
    }
})

export default BottomTabs