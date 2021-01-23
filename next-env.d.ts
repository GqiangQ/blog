/// <reference types="next" />
/// <reference types="next/types/global" />
import {Session} from "next-iron-session";

declare module '*.scss';
import * as next from 'next'
import * as axios from "axios";

type Post = {
  id: string,
  title: string,
  date: string
}
type resolve = {
  code: number,
  msg: string,
  data: any
}
declare module 'next' {
  interface NextApiRequest {
    session: Session
  }
}
// declare module 'axios' {
//   interface AxiosResponse {
//     code: number,
//     data: any,
//     msg: string
//   }
// }