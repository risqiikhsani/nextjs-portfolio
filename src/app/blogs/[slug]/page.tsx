
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx/mdx"
import { notFound } from 'next/navigation'

// In the app directory, getStaticPaths is replaced with generateStaticParams
export async function generateStaticParams() {
    // get all slugs
    const blogs = getAllPostsMeta()

    const extractSlugs = (blogs: any[]) => {
        return blogs.map((blog) => ({ slug: blog.slug }));
      };
      
    const slugsArray = extractSlugs(await blogs);


    return slugsArray
  }

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { meta } = await getPageContent(params.slug) as any
  return { title: meta.title }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug)



  return (
      
    <article className="prose prose-slate max-w-none">{content}</article>
    
  )
}

export default Page


























// import { Metadata, ResolvingMetadata } from 'next'
 
// type Props = {
//   params: { slug: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// // export async function generateMetadata( { params, searchParams }: Props,parent: ResolvingMetadata): Promise<Metadata> {
// //   // read route params
// //   const slug = params.slug
 
// //   // fetch data
// // //   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
 
// //   return {
// //     title: product.title,
// //   }
// // }

// // In the app directory, getStaticPaths is replaced with generateStaticParams
// export async function generateStaticParams() {
//     // get all slugs
//     return [{ slug: '1' }, { slug: '2' }]
//   }


// const getBlog = async(slug: string) => {
//     return null
// }

// export default function Page({ params }: { params: { slug: string } }){

//     const content = 

//     return(
//         <>
//             page
//         </>
//     )
// }