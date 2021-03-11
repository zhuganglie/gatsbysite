import React, {useEffect} from "react"
import {Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { kebabCase } from "lodash"
import commentBox from "commentbox.io"
import {AiOutlineTag} from "react-icons/ai"
import {FiCalendar} from "react-icons/fi"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  useEffect(() =>{
    commentBox('5750314422501376-proj', {
      backgroundColor: 'transparent',
      textColor: 'black',
      subtextColor: 'grey',
    }
    )
  },[])
  return (
    <Layout>
    <div>
      <h2 className="mb-2">{mdx.frontmatter.title}</h2>
      <div className="flex space-x-2">
      &nbsp; &nbsp; <FiCalendar size="18" color="black" /> <p className=" text-sm font-sans text-black"> {mdx.frontmatter.date}</p>
      </div>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
    <div className="mb-4 text-sm font-sans flex items-center space-x-2 ">
        <span className="text-red-900 font-bold"><Link to="/tags">标签：</Link></span>
         {mdx.frontmatter.tags.map(tag => (<Link to={`/tags/${kebabCase(tag)}/`} className="flex text-red-900 px-1"><AiOutlineTag size="18" color="#7F1D1D" />{tag}</Link>))}
        </div>
    <div className="commentbox" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "LL", locale: "zh-cn")
        tags
      }
    }
  }
`
