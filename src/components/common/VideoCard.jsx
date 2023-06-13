import React from 'react';

const VideoCard = () => {
  return (
    <div className='w-[250px] h-[220px] bg-transparent'>
        <div className='w-[250px] h-[154px] rounded-[10px] bg-[#3a3a3a]'></div>
        <div className='w-10 h-10 rounded-[100px] float-right bg-[#3a3a3a] translate-x-0 translate-y-[10px]'></div>
        <div className='w-[180px] h-[15px] rounded-[2px] float-right bg-[#3a3a3a] translate-x-[-15px] translate-y-[10px]'></div>
        <div className='w-[100px] h-[15px] rounded-[2px] float-right bg-[#3a3a3a] translate-x-[-15px] translate-y-[20px]'></div>
    </div>
  )
}

export default VideoCard;