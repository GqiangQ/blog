import Head from 'next/head'
// import 'antd/dist/antd.css'
import 'antd/dist/antd.css';
import 'styles/global.scss'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

export default function App({ Component, pageProps }) {
  return <>
    <Head>
    <meta name="viewport"  content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <title>我的博客 - Frank</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
    </Head>
    <ConfigProvider locale={zhCN}>
      <Component  {...pageProps} />
    </ConfigProvider>
  </>
}
