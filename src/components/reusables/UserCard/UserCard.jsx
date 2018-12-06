import React from 'react';
import { CardWrap, P } from '../card/CardCSS';
import { ThumbnailWrap, Thumbnail } from '../thumbnail/Thumbnail';

const UserCard = () => (
  <CardWrap userCard>
    <ThumbnailWrap bigThumbnail>
      <Thumbnail src="./images/userface.png" alt="User thumbnail" />
    </ThumbnailWrap>
    <P username>Chigoziem Nwaiwu</P>
  </CardWrap>
);

export default UserCard;
