import * as React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const TalksPage = ({data}) => {
    return (
<Layout>
<SEO title="Talks" keywords={[`talks`,`presentation`, `slides`]} />
<h2>演 讲</h2>
    <div className="">
      {data.allTalksJson.edges.map(talk => (
        <div key={talk.node.id} className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full md:w-2/3 my-3">
          <GatsbyImage image={getImage(talk.node.thumbnailImage)} alt="演讲" />   
          </div>
          <div className="flex flex-col items-strech">
            <h4>{talk.node.title}</h4>
            <div className="mb-2">
              {talk.node.description}
            </div>
            <a href={talk.node.url}>
              <span className="text-red-900">详情...</span>
            </a>
          </div>
        </div>
      ))}
    </div>
</Layout>
)};

export const talksQuery = graphql`
  query {
    allTalksJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date
          description
          url
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
`;

export default TalksPage