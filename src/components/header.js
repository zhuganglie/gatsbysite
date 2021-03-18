import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {FaEnvelopeSquare, FaTwitterSquare, FaGithubSquare} from 'react-icons/fa'
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="h-screen w-max max-w-xs m-auto font-monospace">
    <div className="text-center p-7 flex flex-col  space-y-12 items-baseline justify-center">
      <div>
        <div className="w-1/3 m-auto">
        <StaticImage src="../images/yideng.png" alt="avatar" width={48} height={48} layout="fixed" />
        </div>
      <h2 className="mt-3.5 mb-3 text-center">
        <Link to="/" className="text-red-900 hover:text-red-900 no-underline">
          {siteTitle}
        </Link>
      </h2>
      <p className="flex space-x-1 items-center justify-center text-sm text-black"><span className="border border-black rounded p-0.5">渔</span> <span className="border border-black rounded p-0.5">樵</span> <span className="border border-black rounded p-0.5">耕</span> <span className="border border-black rounded p-0.5">读</span></p>
   </div>
      <nav className="m-auto">
      <ul className="flex flex-col flex-1 m-2 space-y-2">
              {menuLinks.map(link => (
                <li key={link.name} className="m-0 list-none">
    <Link className="text-red-900 no-underline" activeClassName="text-black font-bold" to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
      </nav>
      <footer className="mt-8 text-sm mx-auto">
          &copy; {new Date().getFullYear()}
          {` `}
          <span>猪刚烈</span>
          <div className="flex items-center justify-center space-x-2 mt-2">
          <a href="https://twitter.com/zhugangliet" aria-label="twitter"> <FaTwitterSquare aria-label="twitter" size={20} color="#7f1d1d" /> </a>
  <a href="https://github.com/zhuganglie" aria-label="github"><FaGithubSquare aria-label="github" size={20} color="#7f1d1d" /></a>
  <a href="mailto:pyrrhonianpig@gmail.com" aria-label="email"> <FaEnvelopeSquare aria-label="email" size={20} color="#7f1d1d" /> </a>
</div>
        </footer>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
