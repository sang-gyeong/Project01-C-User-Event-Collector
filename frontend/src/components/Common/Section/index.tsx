import React from 'react';
import styled from '@styles/themed-components';

const Section = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0 35px 0;
  border-bottom: 1px solid ${props => props.theme.color.borderColor};
  .section-title {
    ${props => props.theme.font.secTitle}
    position : relative;
    top: 8px;
  }
  overflow: visible;
`;

export default Section;
