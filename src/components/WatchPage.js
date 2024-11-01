import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { menuClose } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const [seachParams]=useSearchParams()
  const dispatch=useDispatch();
  useEffect(()=>{

    dispatch(menuClose())
  },[])

  return (
    <div className='text-white'>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+seachParams.get("v")+"?si=hGC9dfzfYyfrn5MF"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage