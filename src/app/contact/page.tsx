import { MDXRemote } from 'next-mdx-remote/rsc'

const getData = async () => {
    const data = `# Hello World
    ## How are you guys doing ?
    list : 
    - test
    - test 2
    - test 3
    This is from Server Components!
    `

    return data
}

export default async function Page() {

    const data = await getData()


    return (
        <>
            {/* <About links={links} stats={stats}/> */}
            <div className="prose prose-slate">
            <MDXRemote source={data} />
            </div>

        </>
    );
}
