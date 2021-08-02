import React from 'react';
import { Link, graphql } from 'gatsby';

//Styled components
import { Container } from '../../components/posts';

const Posts = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Container>
      {posts.map(post => {
        return (
          <Link to={`/post/${post.frontmatter.slug}`} key={post.id}>
            <div>
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.title}</p>
            </div>
          </Link>
        )
      })}
    </Container>
  )
}

export default Posts;

//Post query
export const query = graphql`
query PostsQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug 
          description
        }
        id
      }
    }
  }
`;