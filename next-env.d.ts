/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.scss';
type Post = {
  id: string,
  title: string,
  date: string
}
type Req = {
  code: number,
  msg: string
}