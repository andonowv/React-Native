import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'



const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {USERS.map((story, index) => (
        <View key={index}>
        <Image source={{uri: story.image}}
        style={style.story} />
        <Text style={style.users}>{story.user.length > 8 ? story.user.slice(0, 6) + '...' :
        story.user}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  story:{
    width:70,
    height:70,
    borderRadius:50,
    marginLeft:6,
    borderWidth:3,
    borderColor:'#ff8501',
  },
  users:{
    color:'white',
    alignSelf:"center",
    fontSize:13,
    fontWeight:'400',
    maxWidth:50,
  }
})

export default Stories