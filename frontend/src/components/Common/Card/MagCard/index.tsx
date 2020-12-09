import React from 'react';
import styled from '@styles/themed-components';
import BoxItem from '@components/Common/BoxItem';

interface IMagMetaProps {
  magMetaData: MagMeta;
}

type MagMeta = {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  date: string;
  tag: string;
};

const enterTitle = title => {
  const pop = title.split(':');
  return pop.map((pa, i) => <p key={i}>{pa}</p>);
};

const MagCard = ({ magMetaData: mag }: IMagMetaProps) => {
  return (
    <Container>
      <BoxItem imgUrl={mag.imgUrl} />
      <MagTitle>{enterTitle(mag?.title)}</MagTitle>
      <MagDate>{mag?.date}</MagDate>
    </Container>
  );
};

const Container = styled.ul`
  width: ${props => props.theme.size.bigCarouselContentWidth};
  display: flex;
  flex-direction: column;
  border: 10px solid red;
`;

const MagTitle = styled.a`
  ${props => props.theme.font.magTitle}
  display: block;
  padding-top: 8px;
  line-height: 135%;
`;

const MagDate = styled.p`
  ${props => props.theme.font.sub}
  display: inline-block;
  padding-top: 8px;
`;

export default MagCard;