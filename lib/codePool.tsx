import dayjs from 'dayjs'
import nodemailer from 'nodemailer'
import { useState } from 'react'

type CODELIST = {
  email:string,
  code:string,
  id: string
}
const globalAny:any = global;
globalAny.codeList = globalAny.codeList || new Map()
const codeList = globalAny.codeList
export default {
  // 查看code
  find(key:string){
    return codeList.get(key) || false
  },
  seed(email:string){
    let status = true
    // 连接邮箱的config
    const transporter  = nodemailer.createTransport({
      service: 'qq',
      auth: {
        user: '740407980@qq.com',
        pass: 'tpukirstaukwbbef' //授权码,通过QQ获取
      }
    });
    // 六位验证码
    const code = Math.random().toString().slice(-6)
    // 发送的模板
    let mailOpt= {
      from: '<740407980@qq.com>',  // 你到qq邮箱地址
      to: email, // 接受人,可以群发填写多个逗号分隔
      subject: 'BLOG博客', // 主题名(邮件名)
      // 可以发送text或者html格式,2选1
      // text: 'Hello world?', // 纯文本
      html: `<b>【BLOG极简博客】  您的验证码是: <span style="color:#1890ff;font-size:20px;">${code}</span>,该验证码5分钟内有效，请勿泄露于他人。</b>` // html
    };
    // 执行发送
    transporter.sendMail(mailOpt, (error, info) => {
      if (error) {
        status = false
      } else {
        codeList.set(email+code,{
          id: info.messageId,
          email,
          code
        })
        const itemId = setTimeout(()=>{
          codeList.delete(email+code)
          clearTimeout(itemId)
        },1000*60*3)
        return true
      }
    });
    return status
  }
}