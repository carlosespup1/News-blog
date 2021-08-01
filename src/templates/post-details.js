import React from 'react';
import { graphql } from 'gatsby';

const PostDetails = ({ data }) => {
    const { title, description } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return (
        <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
    )
}

export default PostDetails;

export const query = graphql`
    query PostPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            description
            title
            }
        }
    }
`;