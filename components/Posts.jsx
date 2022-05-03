import React from 'react'
import Post from './Post'

const posts = [
    {
        id: 124,
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is DOPE!'
    },
    {
        id: 124,
        username: 'ssssangha',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is DOPE!'
    },
]

function Posts() {
    return (
        <div>
            {posts.map(post=>{
                return <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
            })}
        </div>
    )
}

export default Posts