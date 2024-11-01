import React from 'react'

const Video = ({info}) => {
  console.log("video info",info);

  if(info===undefined) return;

const {snippet,statistics}=info;
const {channelTitle,title,thumbnails
  }=snippet;
console.log("chtitle",channelTitle);
console.log("title",title);
console.log("thitle",thumbnails);
  return (
    <div className='w-96 m-3 h-'>
 <div className='flex flex-col w-full md:w-auto border border-white space-x-4 '>
      <div>
        <img className='p-2' src={thumbnails.high.url}></img>
      </div>
      <div className='flex flex-col  w-fit md:w[460]'>
        <span className='text-white '>{title}</span>
        <span className='text-white text-gray-600'>{channelTitle}</span>
      </div>
      <div>
        <span className='text-gray-400'>
          {statistics.viewCount} 
          <span className='p-2'>views </span>
        </span>
      </div>
    </div>
    </div>
   
  )
}

export default Video