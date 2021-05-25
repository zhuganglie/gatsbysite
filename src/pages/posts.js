import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { kebabCase } from 'lodash'

import {FiCalendar} from 'react-icons/fi'
import {AiOutlineTag} from 'react-icons/ai'

const IndexPage =({data}) => {
 const { edges: posts } = data.allMdx
    return (
     <Layout>
         <Seo title = "Posts" />
    <div>
      <h2>文 章</h2>
      <hr />
      <ul className="list-none mt-2 ml-0">
        {posts.map(({ node: post }) => (
          <li key={post.id} className="my-6 ml-0">
            <div className="flex flex-col space-y-2 md:items-start md:justify-between">

            <div className="flex space-x-2 ">
        <FiCalendar size="18" color="" />
        <span className="font-sans text-sm text-left">{post.frontmatter.date}</span>
        </div>
            <div>
            <Link to={post.fields.slug}>
              <h4 className="mb-0.5 text-left">{post.frontmatter.title}</h4>
            </Link>
            <div class="mt-2">
            <span className="flex text-sm font-sans space-x-4">
        {post.frontmatter.tags.map(tag => (<Link to={`/tags/${kebabCase(tag)}/`} className="flex space-x-2 text-red-900"><AiOutlineTag size="18" color="#7F1D1D" /> {tag}</Link>))}
        </span>
        </div>
        </div>
        
        </div>
          </li>
        ))}
      </ul>
    </div>
     </Layout>
    )
}

export const pageQuery = graphql`
  query indexPage {
    allMdx (filter: {fileAbsolutePath: {regex: "/posts/"}}){
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "LL", locale: "zh-cn")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
