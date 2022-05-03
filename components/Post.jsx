import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlinePaperAirplane, HiOutlineEmojiHappy } from 'react-icons/hi'
import { BsChatDots, BsBookmark } from 'react-icons/bs'


function Post({ id, username, userImg, img, caption }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>

      {/* Header */}
      <div className='flex items-center p-5'>
        <img className='rounded-full h-12 w-12 object-contain border p-1 mr-3' src={userImg} alt="" />
        <p className='flex-1 font-bold'>{username}</p>
        <BiDotsHorizontalRounded className='h-5' />
      </div>

      {/* img */}
      <img className='object-cover w-full' src={img} alt="" />


      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <AiOutlineHeart className='btn' />
          <BsChatDots className='btn' />
          <HiOutlinePaperAirplane className='btn' />
        </div>
        <BsBookmark className='btn' />
      </div>

      {/* caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>

      {/* comments */}


      {/* input box */}
      <form className='flex items-center p-4'>
      <HiOutlineEmojiHappy className='h-7 ' />
      <input className='border-none flex-1 focus:ring-0 outline-none'
       placeholder='Add a comment...' type="text" />
      <button className='font-semibold text-blue-400'>Post</button>
      </form>


    </div>
  )
}

export default Post