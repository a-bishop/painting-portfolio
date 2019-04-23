import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: black;
  text-align: center;
  font-size: 0.9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${props => props.theme.colors.bg};
`

const Footer = () => <Content>&copy; 2019 Andrew Bishop</Content>

export default Footer
