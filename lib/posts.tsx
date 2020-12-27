import fs, { promises as fsPromise} from 'fs'
import path from "path"
import matter from 'gray-matter'

export const getPosts = async () => {
  const mackdownDir = path.join(process.cwd(),'mackdown') // current working dir 
  const fileNames = await fsPromise.readdir(mackdownDir)
  const posts = fileNames.map( fileName => {
    const fullpath = path.join(mackdownDir,fileName)
    const id = fileName.replace(/\.md$/g, '')
    const text = fs.readFileSync(fullpath,'utf-8')
    const { data: {title, date}, content } = matter(text)
    return {
      id, title, date, content
    }
  })
  return posts
}