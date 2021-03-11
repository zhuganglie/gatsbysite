import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticImage
      src="../images/lanke.webp"
      width={1200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="王质遇仙"
      className="w-full mb-4"
    />
    <div className="text-center">
    <h3>渔樵耕读四首</h3>
    <p>[明] &middot; 任环</p>
    <div className="md:flex text-center md:items-center md:justify-evenly md:space-x-4">
    <div >
    明月扁舟，芦花浅水。<br />
    鱼无深愁，漫兴而已。 <br />
    </div>
    <div>
云山砍破，挑此一肩。<br />
留彼新松，以待参天。 <br />
</div>
<div>
一犁春雨，万顷秋风。<br />
击壤而歌，伊谁之功。<br />
</div>
<div>
刺股悬梁，囊萤映雪。<br />
达之思兼，穷亦归洁。 <br />
</div>
</div>
    </div>
  </Layout>
)

export default IndexPage
