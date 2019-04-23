import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { withWindowSizeListener } from 'react-window-size-listener'

import { Layout, ProjectHeader, ProjectPagination, SEO } from '../components'
import config from '../../config/site'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
  position: relative;
  padding: 2rem 0 0 0;
`

const OuterWrapper = styled.div`
  padding: 0 ${props => props.theme.contentPadding};
  margin: -10rem auto 0 auto;
`

const InnerWrapper = styled.div`
  position: relative;
  max-width: ${props => `${props.theme.maxWidths.project}px`};
  margin: 0 auto;
`

const Project = ({ pageContext: { slug, prev, next }, data: { project: postNode, images: imgs }, windowSize }) => {
  const images = imgs.edges
  const project = postNode.frontmatter
  const wWidth = windowSize.windowWidth
  let imgMargin

  if (wWidth > 1100) {
    imgMargin = '3rem 12rem'
  } else if (wWidth > 800) {
    imgMargin = '3rem 8rem'
  } else {
    imgMargin = '3rem auto'
  }

  return (
    <Layout customSEO>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <ProjectHeader
        avatar={config.avatar}
        name={config.name}
        date={project.date}
        title={project.title}
        areas={project.areas}
        text={postNode.code.body}
      />
      <BG>
        <OuterWrapper>
          <InnerWrapper>
            {images.map(image => (
              <Img
                key={image.node.childImageSharp.fluid.src}
                fluid={image.node.childImageSharp.fluid}
                style={{ margin: imgMargin }}
              />
            ))}
          </InnerWrapper>
          <ProjectPagination next={next} prev={prev} />
        </OuterWrapper>
      </BG>
    </Layout>
  )
}

export default withWindowSizeListener(Project)

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    project: PropTypes.object.isRequired,
    images: PropTypes.object.isRequired,
  }).isRequired,
  windowSize: PropTypes.object.isRequired,
}

Project.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const pageQuery = graphql`
  query($slug: String!, $absolutePathRegex: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    project: mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
      frontmatter {
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
        date(formatString: "DD.MM.YYYY")
        title
        areas
      }
    }
  }
`
