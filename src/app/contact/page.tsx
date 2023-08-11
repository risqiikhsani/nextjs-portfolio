// import { MDXRemote } from 'next-mdx-remote/rsc'

import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Image from "next/image";
import Email from "./_page/email";
// const getData = async () => {
//     const data = `# Hello World
//     ## How are you guys doing ?
//     list : 
//     - test
//     - test 2
//     - test 3
//     This is from Server Components!
//     `

//     return data
// }

const Page = async() => {

    // const data = await getData()


    return (
        <>
            {/* <About links={links} stats={stats}/> */}
            {/* <div className="prose prose-slate">
            <MDXRemote source={data} />
            </div> */}
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >

            
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
                Sorry ,...  as this site is still being developed. <br />
                For now , I can only provide you my email :
            </Typography>

            <Email/>

            
                <Image
                    src="/sorry-page.png"
                    width={500}
                    height={500}
                    alt="sorry"
                    priority={true}
                />
            </Stack>



        </>
    );
}

export default Page