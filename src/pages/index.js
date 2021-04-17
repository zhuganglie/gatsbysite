import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full mb-4 mx-auto">
    <StaticImage
      src="../images/lanke.webp"
      layout="fullWidth"
      width={1200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="王质遇仙"
    />
    </div>
    <div className="text-center m-auto">
    <h3>渔樵耕读四首</h3>
    <p>[明] &middot; 任环</p>
    <div className="md:flex  justify-center items-center md:space-x-4">
      <div className="lg:flex items-center lg:space-x-4">
    <p className="">
    明月扁舟，芦花浅水。<br />
    鱼无深愁，漫兴而已。
    </p>
    <p className="">
云山砍破，挑此一肩。<br />
留彼新松，以待参天。
</p>
</div>
<div className="lg:flex items-center lg:space-x-4">
<p className="">
一犁春雨，万顷秋风。<br />
击壤而歌，伊谁之功。
</p>
<p className="">
刺股悬梁，囊萤映雪。<br />
达之思兼，穷亦归洁。
</p>
</div>
</div>
</div>
  </Layout>
)

export default IndexPage
