import { NextApiRequest, NextApiResponse } from "next";
import path from 'path'
import { getPosts } from './../../../lib/posts'


const Posts = async(req:NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  const fileNames = await getPosts()
  console.log(fileNames)
  res.setHeader('Ccontent-Type','application/json')
  res.write(JSON.stringify(fileNames))
  res.end()
};


export default Posts