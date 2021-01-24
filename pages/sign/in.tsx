import {GetServerSideProps, NextPage} from "next";
import {useCallback, useState} from "react";
import axios from "axios";
import {User} from "../../src/entity/User";
import {withSessions} from "../../lib/withSissions";

const Sigin: NextPage<{user:User}> = (props) => {
  console.log(props.user)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const onSubmit = useCallback((e) => {
    e.preventDefault()
    if (formData.username.length<3 || (!/[a-zA-Z0-9]/.test(formData.username))) return alert('用户名不符合规范')
    if (formData.password.length<6) return alert('密码太短了')
    
    axios.post(`/api/v1/sessions`, formData)
      .then(
        (res)=>{
          alert(res.data.msg)
        },
        (error)=>{
          console.log(error)
        }
      )
  }, [formData])
  return<div>
    <h2>登录</h2>
    <p>当前登录人为：{JSON.stringify(props.user)}</p>
    {JSON.stringify(formData)}
    <form  onSubmit={onSubmit}>
      <div>
        <label>用户名</label>
        <input type="text" value={formData.username} onChange={e => setFormData({...formData ,username: e.target.value})} />
      </div>
      <div>
        <label>密码</label>
        <input type="password" value={formData.password}  onChange={e => setFormData({...formData ,password: e.target.value})} />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
}
export  default  Sigin
// @ts-ignore

export const getServerSideProps: GetServerSideProps = withSessions(async (context) => {
  // @ts-ignore
  const { req } = context
  console.log('req', req.session.get('current'));
  console.log('---------------------')
  const user = await req.session.get('current')
  console.log('user:',user)
  return {
    props: {
      user: JSON.parse(JSON.stringify(user || new User()))
    }
  };
});