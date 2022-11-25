import { View,Image, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { POSTS } from '../../data/posts'

const Post = ({post}) => {
return (
    <View style={style.container}>
    <PostHeader post={post}/>
    <PostImage post={post}/>
    <View>
    <PostFooter/>
    <Likes post={post}/>
    <Caption post={post}/>
    <CommentSection post={post}/>
    <Comments post={post} />
    </View>
    </View>
)
}

const PostHeader = ({post}) => (
    <View style={{margin:5,flexDirection:'row', alignItems:'center', justifyContent:'space-between', fontWeight:'700'}}>
        <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>
            <Image style = {{height:40,width:40, borderRadius:20,}} source={{uri: post.profile_picture}}/>
            <Text style={{color:'white', marginLeft:5, fontWeight:'700' }}>{post.user}</Text>
        </View>
        
            <Text style={{color:'white'}}>...</Text>
        
    </View>
)

const PostImage = ({post}) => {
    return(
        <View style={{width:'100%', height:450}}>
            <Image style={{height:'100%', resizeMode:'cover'}} source={{uri: post.imageUrl}} />
        </View>
    )
}


const PostFooter = () =>{
return (
    <View style={style.iconContainer}>
        <View style={style.iconContainer} >
       <TouchableOpacity>
        <Image style={style.footerIcon} source={require('../../assets/Like.png')}/>
       </TouchableOpacity>
       <TouchableOpacity>
        <Image style={style.footerIcon} source={require('../../assets/comment.png')}/>
       </TouchableOpacity>
       <TouchableOpacity>
        <Image style={style.footerIcon} source={require('../../assets/share.png')}/>
       </TouchableOpacity>
       </View>
       <TouchableOpacity style={{marginTop:7}}>
        <Image style={style.footerIcon} source={require('../../assets/Save.png')}/>
       </TouchableOpacity>
       
    </View>
)} 

const Likes = ({post}) => {
    return(
        <View style={{marginTop:4, flexDirection:'row', }}>
    <Text style={{color:'white', fontSize:13, fontWeight:'600', marginLeft:5,}}>
        {post.likes} Likes     
    </Text>
    </View>
)}

const Caption = ({post}) =>{
    return(
        <View style={{marginTop:1, marginLeft:5}}>
        <Text style={{color:'white'}}>
        <Text style={{fontWeight:'600'}}>{post.user} </Text>
        <Text>{post.caption}</Text>
        </Text>
        </View>
    )
}

const CommentSection =({post})=>{
    return(
        
        <View style={{marginTop:5}}>
            {!!post.comments.length && (
        <Text style={{color:'grey', marginLeft:5}}>
        View {post.comments.length > 1 ? 'all ' : ''}{post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
        )}
        </View>
    )
}

const Comments = ({post}) =>{
    return(
        <View>
        {post.comments.map((comment, index) => (
            <View key={index}>
                <Text style={{color:'white', marginLeft:5, marginTop:5}}>
                <Text style={{fontWeight:'600'}} >{comment.user} </Text>
                {comment.comment}
                </Text>
            </View>
        ))}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        color:'black',
        marginBottom:25,
        
    },
    postImage:{
        height:400,
        width:'100%',
        alignSelf:'center',
        
    },
    postPart:{
        backgroundColor:'black',
        height:'100%',
        width:'100%',
        alignSelf:'center',
        
    },
    avatar:{
        height:50,
        width:50,
        borderRadius:25,
        marginLeft:5,
        marginTop:5,
        marginBottom: 5,
    },
    username:{
        paddingLeft:10,
        fontSize:16,
        fontWeight:'600',
        color:'white',
    },
    postHeader:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:5,
        marginBottom: 5,
    },
    post:{
        paddingBottom:25,
    },
    postFooter:{
        color:'white',
    },iconContainer:{
        flexDirection:'row',
    
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        marginTop:5,
        resizeMode:'contain',
    },
    iconContainer:{
        display:'flex',
        flexDirection:'row',
        marginTop:5,
        justifyContent: 'space-between'
    },
    footerIcon:{
        width:33,
        height:33,
    }
})
export default Post