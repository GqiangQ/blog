import React, { useEffect, useState } from 'react'
// import Edit from 'components/edit'

import dynamic from 'next/dynamic'

const EditWithNoSSR = dynamic(import('components/edit'), {
  ssr: false
})
const PostsIndex= () => {
  return<div>
    <EditWithNoSSR></EditWithNoSSR>
  </div>
}
export default PostsIndex
