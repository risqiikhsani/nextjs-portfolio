import BorderedPaper from "@/components/cards/bordered-paper";
import ChipBase from "@/components/chip/chip-base";
import { dataScience, database, gamedev, lang, machineLearning, others, webdev } from "@/constants/about";
import { textColorBackground } from "@/styles/Styles";
import { Divider, Typography } from "@mui/material";
import CarouselPictures from "./_page/carousel-pictures";
import AboutContent from "@/contents/mdx/about/AboutContent.mdx";
import Prose from "@/components/mdx/Prose";


const Page = async () => {
  return (
    <>
      {/* <About links={links} stats={stats}/> */}
      {/* <div className="prose prose-slate">
        <AboutContent />
      </div> */}

      <BorderedPaper >
        <Typography variant="h4" sx={{ textAlign: 'center', ...textColorBackground }}>
          Hello , I have 5 years experience in writting codes.
          Here's the technologies I've been using with:
        </Typography>

        <Divider sx={{ my: '10px' }} />

        <Typography variant="h6" sx={{ ...textColorBackground }}>
          Languages
        </Typography>

        {lang.map((i) => (
          <ChipBase name={i.name} />
        ))}

        <Typography variant="h6" sx={{ ...textColorBackground }}>
          Web/Mobile/Desktop Development
        </Typography>

        {webdev.map((i) => (
          <ChipBase name={i.name} />
        ))}

        <Typography variant="h6" sx={{ ...textColorBackground }}>
          Database
        </Typography>


        {database.map((i) => (
          <ChipBase name={i.name} />
        ))}

        <Typography variant="h6" sx={{ ...textColorBackground }}>
          DevOps
        </Typography>

        {others.map((i) => (
          <ChipBase name={i.name} />
        ))}

        <Typography variant="h6" sx={{ ...textColorBackground }}>
          Game Development
        </Typography>
        {gamedev.map((i) => (
          <ChipBase name={i.name} />
        ))}

        <Typography variant="h6" sx={{ ...textColorBackground }}>
          Machine Learning
        </Typography>
        {machineLearning.map((i) => (
          <ChipBase name={i.name} />
        ))}

        <Typography variant="h6" sx={{ ...textColorBackground }}>
          Data Science
        </Typography>
        {dataScience.map((i) => (
          <ChipBase name={i.name} />
        ))}


      </BorderedPaper>


      <BorderedPaper >
        <Typography variant="h4" sx={{ textAlign: 'center', ...textColorBackground }}>
          Hello , Besides programming , Here's a few images describe what I do and what I like
        </Typography>
        <Divider sx={{ my: '10px' }} />
        <CarouselPictures />
      </BorderedPaper>

      <BorderedPaper >
          
        <Prose>
        <AboutContent/>
        </Prose>

        

      </BorderedPaper>



    </>
  );
}

export default Page