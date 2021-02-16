import React, { useEffect, useState } from 'react'
// import Edit from 'components/edit'

import dynamic from 'next/dynamic'
import { message } from 'antd'

const EditWithNoSSR = dynamic(import('components/edit'), {
  ssr: false
})
const PostsIndex= () => {
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      message.info('请先登录！')
      window.location.href = '/sign/in'
    } 
  })
  return<div>
    <EditWithNoSSR></EditWithNoSSR>
  </div>
}
export default PostsIndex
