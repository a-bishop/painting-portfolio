import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Spring, animated, config } from 'react-spring'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import arrow from '../images/left-chevron.svg'

const Wrapper = styled.div`
  display: flex;
  position: relative;
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 2rem 1.0875rem 5rem 1.0875rem;
  color: ${props => props.theme.colors.color};
`

const Back = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img[data-info='back'] {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem 0 0;
  }
`

const Avatar = styled.div`
  height: 3rem;
  width: 3rem;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  div {
    background-color: white;
    padding: 13px 0 10px 8px;
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  div > img {
    width: 90%;
    height: 90%;
  }
`

const Name = styled(animated.h4)`
  margin: 0 0 0 1rem;
  color: ${props => props.theme.colors.color};
`

const Details = styled.div`
  width: 100%;
  margin-top: 6rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.color};
  }
`

const Text = styled.div`
  max-width: 750px;
  margin: 4rem auto 2rem auto;
  color: white;
`

const ProjectHeader = ({ avatar, name, title, date, areas, text }) => (
  <Wrapper>
    <Content>
      <Back to="/">
        <img src={arrow} data-info="back" alt="Back to home" aria-label="Back to home" />
        <Avatar>
          <div>
            <img src={avatar} alt={name} />
          </div>
        </Avatar>
        <Name>{name}</Name>
      </Back>
      <Details>
        <Spring
          native
          config={config.slow}
          delay={200}
          from={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }}
          to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        >
          {props => <animated.h1 style={props}>{title}</animated.h1>}
        </Spring>
        <Spring native config={config.slow} delay={600} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <animated.div style={props}>
              <p>{date}</p>
              <div>
                {areas.map((area, index) => (
                  <React.Fragment key={area}>
                    {index > 0 && ', '}
                    {area}
                  </React.Fragment>
                ))}
              </div>
              {text && (
                <Text>
                  <MDXRenderer>{text}</MDXRenderer>
                </Text>
              )}
            </animated.div>
          )}
        </Spring>
      </Details>
    </Content>
  </Wrapper>
)

export default ProjectHeader

ProjectHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  areas: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
}
