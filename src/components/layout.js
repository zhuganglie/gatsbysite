import * as React from "react"
import {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {RiMenuUnfoldLine} from 'react-icons/ri'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {setShowMenu(!showMenu)}
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name,
            link
          }
        }
      }
    }
  `)

  return (
    <>
    <div className="flex h-screen w-screen">
      <div className={`md:flex ${showMenu ? "flex" : "hidden"} md:w-1/5 min-w-max border-r-4 border-red-900`} >
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
      <div className="flex-1 px-4 md:pr-24 py-8 md:w-4/5 overflow-auto">
        <div className="h-12 mb-2 md:hidden">
        <button onClick={toggleMenu} className="px-3 py-1 my-auto font-bold font-sans text-yellow-50 hover:text-gray-900 bg-red-900 hover:bg-yellow-50 hover:border-red-900 flex items-center border-0 outline-none focus:outline-black"><RiMenuUnfoldLine size="20" />&nbsp; 渔樵耕读 </button>
        </div>
        <main>{children}</main>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
