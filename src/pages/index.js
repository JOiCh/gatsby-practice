import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
export default function Home({data}) {

   console.log(data);
  // // 拿出data內的description和title來用⬇
  // const {title, description} = data.site.siteMetadata 

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>我是真正的首頁內容RRRRR</h2>
          <h3>Develop & Deploy!!!!!</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Dear Project
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
        {/* <img src="/moneyGrow.png" alt="" style={{ maxWidth: "100%" }} /> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
query IndexImg {
  file(relativePath: {eq: "money.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`