import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import { StyleSheet } from 'react-native'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs from '../components/home/BottomTabs'


const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header/>
      <Stories/>
      <ScrollView>
      {POSTS.map((post, index) => (
        <Post post={post} key = {index}/>
      ))}
      </ScrollView>
      <BottomTabs/>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container :{
        backgroundColor:'black',
        flex: 1,
    }
})

export default HomeScreen