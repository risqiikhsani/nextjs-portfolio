import AboutContent from "@/contents/mdx/about/AboutContent.mdx";

export default async function Page() {
  return (
    <>
      {/* <About links={links} stats={stats}/> */}
      <div className="prose prose-slate">
        <AboutContent />
      </div>
    </>
  );
}
