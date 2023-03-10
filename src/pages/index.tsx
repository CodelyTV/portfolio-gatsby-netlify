import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"

const IndexPage = ({data}: PageProps<Queries.ProjectsQuery>) => {
  return (
    <main>
      <h1>
        Codely - My portfolio
      </h1>
      <section>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter?.title}</h2>
            {node.frontmatter?.technologies?.join(", ")}
            <p>Posted: {node.frontmatter?.date}</p>
          </article>
        ))
      }
    </section>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query Projects {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          summary
          technologies
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>My portfolio</title>
