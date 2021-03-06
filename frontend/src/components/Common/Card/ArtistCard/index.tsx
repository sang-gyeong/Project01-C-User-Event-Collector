import React from 'react';
import styled from '@styles/themed-components';
import CircleImage from '@components/Common/CircleImage';
import CircleHeartButton from '@components/Common/Button/CircleHeartButton';
import A from '@components/Common/A';
import api from '@api/index';
import logEventHandler from '@utils/logEventHandler';
import ClickEventWrapper from '@components/EventWrapper/ClickEventWrapper';
import { useAuthDispatch } from '@context/AuthContext';

interface IArtistMetaProps {
  artistMetaData: ArtistMeta;
  type?: string | null;
  deleteArtist?: any;
}

interface ArtistMeta {
  id: number;
  name: string;
  debut: string;
  imgUrl: string;
}

const ArtistCard = ({ artistMetaData: artist, type, deleteArtist }: IArtistMetaProps) => {
  const target = 'ArtistCard';
  return (
    <Container className="artist-card">
      <ImageContainer>
        <A next="artist" target={target} id={artist.id}>
          <CircleImage imageSrc={artist.imgUrl} alt="artist-img" />
        </A>
        {type && (
          <ClickEventWrapper target={`${target}/DeleteBtn`} id={artist.id}>
            <ButtonWrapper onClick={e => logEventHandler(deleteArtist(e, artist.id), null)}>
              <CircleHeartButton />
            </ButtonWrapper>
          </ClickEventWrapper>
        )}
      </ImageContainer>
      <A next="artist" target={target} id={artist.id}>
        <ArtistTitle>{artist.name}</ArtistTitle>
      </A>
    </Container>
  );
};

const Container = styled.ul`
  width: ${props => props.theme.size.smallCarouselContentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 2s;
  position: relative;
`;

const ImageContainer = styled.a`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 6px;
  bottom: 0;
  border-radius: 50%;
`;

const ArtistTitle = styled.a`
  ${props => props.theme.font.plain}
  display: inline-blocK;
  margin-top: 10px;
`;

export default ArtistCard;
