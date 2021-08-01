/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
    query Post {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }      
    `);

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: `/post/${node.frontmatter.slug}`,
            component: path.resolve('./src/templates/post-details.js'),
            context: {slug: node.frontmatter.slug}
        })
    })
}