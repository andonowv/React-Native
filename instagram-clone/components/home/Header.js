import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style = {style.container}>
      <TouchableOpacity>
      <Image style={style.logo} source = {require('../../assets/logo.png')} />
      </TouchableOpacity>

      <View style = {style.iconContainer}>
        <TouchableOpacity>
          <Image style={style.icon} source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}} />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Image style={style.icon} source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}} />
        </TouchableOpacity> 
        <TouchableOpacity>
          <View style = {style.unreadBadge}>
            <Text style={style.unreadBadgeText}>2</Text>
          </View>
          <Image style={style.icon} source={{uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}} />
        </TouchableOpacity> 
      </View>

      </View>
  )
}

const style = StyleSheet.create({
  container :{
      justifyContent:'space-between',
      alignItems: 'center',
      flexDirection:'row',
      marginHorizontal: 20,
      marginTop:30,
  },
  logo:{
    width:100,
    height:50,
    resizeMode:'contain',
    
  },
  iconContainer:{
    flexDirection:'row',
  
  },
  icon:{
      width:30,
      height:30,
      marginLeft:10,
      resizeMode:'contain',
  },
  unreadBadgeText:{
      color:'white',
      justifyContent:'center',
      fontWeight: '500',
      fontSize:12,
  },
  unreadBadge:{
    backgroundColor:'#FF3250',
    position:'absolute',
    left: 22,
    bottom:20,
    width:20,
    height:14,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    zIndex:100,
  }
})

export default Header