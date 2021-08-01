import React from 'react';
import { Link, graphql } from 'gatsby';

const Posts = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <div>
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
    </div>
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