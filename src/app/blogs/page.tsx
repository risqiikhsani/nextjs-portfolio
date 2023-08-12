import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx/mdx'
import CardBase from '@/components/cards/card'
import { Typography } from '@mui/material'
import { Suspense } from 'react'
import { textColorBackground } from '@/styles/Styles'

const Page = async () => {
  const posts = await getAllPostsMeta()

  return (
    <>
    
    <Typography variant="h3" sx={{ textAlign: 'center', ...textColorBackground }}>
    These are the blogs that I find it interesting !
                </Typography>

    {posts?.map((post,index) => (
            <>
            {/* <Link
              href={`blogs/${post.slug}`}
              key={post?.title}
              className='p-8 rounded-md shadow-md'
            >
              <h3 className='text-xl font-semibold'>{post.title}</h3>
              <p className='mt-4 text-sm'>{post.author}</p>
              <time className='text-[12px] text-gray-400'>
                {post.publishDate}
              </time>
            </Link> */}
            
            <CardBase key={index} imageUrl={post?.imageUrl} url={`blogs/${post.slug}`} name={post?.title} text={post.publishDate} />
            
            
            </>
          ))}
    </>
  )
}

export default Page











// import { Metadata } from 'next'
// import path from 'path';
// import fs from 'fs'

// export const metadata: Metadata = {
//     title: 'Blogs',
//     description: 'Blogs about anything',
//   }
  
// const getAllBlogs = async() => {
//     const blogsDirectory = path.join(process.cwd(), 'contents/mdx/blogs');
//     const files = fs.readdirSync(blogsDirectory)
    
//     const fls = await Promise.all(files.map(async filename => {
//         const filePath = path.join(blogsDirectory,filename)
//         const content = 
//     }))

//     return null
// }

//   export default function Page(){
//     return(
//         <>
        
//             Page
//         </>
//     )
// }