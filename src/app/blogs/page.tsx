import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx/mdx'

const Page = async () => {
  const posts = await getAllPostsMeta()

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>All Posts</h1>
        <div className='flex gap-6 mt-6'>
          {posts?.map(post => (
            <Link
              href={`blogs/${post.slug}`}
              key={post?.title}
              className='p-8 rounded-md shadow-md'
            >
              <h3 className='text-xl font-semibold'>{post.title}</h3>
              <p className='mt-4 text-sm'>{post.author}</p>
              <time className='text-[12px] text-gray-400'>
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
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