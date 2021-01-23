import {NextPage} from "next";
import {useCallback, useState} from "react";
import axios from "axios";

const Sigin: NextPage = () => {
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