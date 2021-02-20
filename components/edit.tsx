import React, { useEffect, useState } from 'react'
import BraftEditor from 'braft-editor'
import { Button, Input, message } from 'antd'
import Router from 'next/router'
import Axios from 'axios';
const { TextArea } = Input;

const PostsIndex= () => {
  const [form,setForm] = useState({
    title:'',
    content:BraftEditor.createEditorState('<p></p>')
  })
  const handleChange = (content:any) => {
    setForm({...form,content})
  }
  const titleChange = (e:any) => {
    let title = e.target.value
    title = title.replace(/[\r\n]/g,"")
    setForm({...form,title})
  }
  // 提交
  const submit = () => {
    if (!form.title) return
    if(!localStorage.getItem('token')) return message.info('oooo! 您未登录,怎么办？？？请在一个新页面登录后在回来提交把！！！')
    Axios.post('/api/v1/posts/add',{
        token:localStorage.getItem('token'),
        title:form.title,
        content: form.content.toHTML()
    })
    .then(({status,data,statusText,...a}) => {
      if(status !== 200) return message.error(statusText)
      if(data.code) {
        message.success(data.msg)
      } else {
        message.error(data.msg)
      }
    })
  }
  // 
  const [view, setView] = useState({
    status:false,
    _html:''
  })
  const showView = () =>{
    setView({
      status:!view.status,
      _html:form.content.toHTML()
    })
  }
  return<>
  <div style={{width:'960px',background:'#fff',margin:'auto',padding:'1em'}}>
    <div style={{display:'flex',justifyContent:'flex-end'}}>
      <Button style={{marginRight:'1em'}} type='primary' ghost onClick={showView}>{view.status?'编写':'预览'}</Button>
      <Button type={(form.title)?'primary':'dashed'} onClick={submit}>发表</Button>
    </div>
    {
      view.status
      ?
      <>
      <h2 style={{textAlign:'center'}}>{form.title}</h2>
      <div className="markdown-body markdown-here-wrapper" dangerouslySetInnerHTML={{__html:view._html}}/>
      </>
      :
      <>
        <TextArea value={form.title} onChange={titleChange} maxLength={50} style={{fontSize:'1.8em',resize:'none', padding:'.6em .5em' }} bordered={false}  placeholder="输入标题（最多50个字）"/>
        <BraftEditor   value={form.content} onChange={handleChange} />
      </>
    }
  </div>
  </>
}
export default PostsIndex
