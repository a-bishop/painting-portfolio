import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  background: url("${props => props.theme.bgPattern}")   #4c4c4c;
  display: flex;
  position: relative;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 3rem 1.0875rem 3rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  height: 550px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 500px;
  }
`;

const Avatar = styled.div`
  height: 80px;
  width: 80px;
  margin: 0 auto;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
`;

const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${props => props.theme.colors.color};
`;

const Location = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoreInfo = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
`;

const Contact = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
  line-height: 1.5rem;
`;

const contact = (
  <span>
    Friendly and reliable
    <br />
    <a href="mailto:andrew.bishop53@gmail.com">Contact me</a> for a quote
  </span>
);

const Header = ({ avatar, name, location, moreInfo }) => (
  <Wrapper>
    <Content>
      <Avatar>
        <img src={avatar} alt={name} />
      </Avatar>
      <Name>{name}</Name>
      <Location>{location}</Location>
      <MoreInfo>{moreInfo}</MoreInfo>
      <Contact>{contact}</Contact>
    </Content>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired
};
