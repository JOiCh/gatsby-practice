// Navbar不需再import css因為他被收在Layout內，要從Layout引css
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata 

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">JOi's Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
