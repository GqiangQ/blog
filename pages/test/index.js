import Link from 'next/link'
import Head from 'next/head'
import {createConnection} from "typeorm";

export default async () =>{
  const connect  = await createConnection()
  cosole.log(connect)
return (
  <div>
    test
    <Link href='/'>
    回单首页
    </Link>
  </div>
)
}