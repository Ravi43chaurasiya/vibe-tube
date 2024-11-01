import React, { useEffect, useState } from 'react'
import { youtube_video_URL } from '../utils/apiConstant'
import Video from './Video';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videosInfo,setVideosInfo]=useState([])

  useEffect(()=>{
    getVideos();

  },[])
  const getVideos=async()=>{
    const data=await fetch(youtube_video_URL);
    const jason =await data.json();
    const videosInfo=jason.items;
    setVideosInfo(videosInfo)
    console.log(videosInfo);
  }

 

  return (
    <div className='flex flex-wrap'>
      {
        videosInfo.map((video,i)=><Link to={"watchPage?v="+video.id}  key={video.id}><Video info={video}></Video></Link>)
      }
      
      
    </div>
  )
}

export default VideoContainer