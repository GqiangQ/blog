import {NextApiHandler} from "next";
import { withIronSession } from "next-iron-session"

export  function  withSessions (hander: NextApiHandler) {
  return withIronSession( hander, {
    password: `${new Date().getTime()}j${new Date().getTime()}${new Date().getTime()}`,
    cookieName: 'blog',
    cookieOptions: {
      secure: false
    }
  })
}