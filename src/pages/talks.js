import * as React from "react"
import {graphql} from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FiDownload} from "react-icons/fi"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TalksPage = ({data}) => {

    return (
<Layout>
<Seo title="Talks" keywords={[`talks`,`presentation`, `slides`]} />
<h2>演 讲</h2>
<hr />
      {data.allTalksJson.edges.map(talk => (
        <div key={talk.node.id} className="md:flex md:space-x-12 md:items-center md:justify-start">
          <div className="w-full md:w-1/2 lg:w-1/3">
          <GatsbyImage image={getImage(talk.node.thumbnailImage)} width={600} alt="演讲" />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 md:my-4">
            <h4>{talk.node.title}</h4>
            <div className="mb-2">
              {talk.node.description}
            </div>
            <div className="flex items-center justify-start space-x-2 min-w-max">
            <FiDownload size="22" />
            <a href={talk.node.file.publicURL} rel="noreferrer" target="_blank">
             <span>下载 PDF</span>
            </a>
            </div>
          </div>
        </div>
      ))}
</Layout>
)};

export const talksQuery = graphql`
query {
  allTalksJson(sort: { order: DESC, fields: [date] }) {
    edges {
      node {
        id
        date
        description
        title
        file {
          publicURL
        }
       thumbnailImage {
          childImageSharp {
              gatsbyImageData(
       width: 300
       placeholder: BLURRED
     )
          }
        } 
      }
    }
  }
}
`

export default TalksPage
