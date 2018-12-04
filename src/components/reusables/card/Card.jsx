// react libraris
import React from 'react';
import { CardWrap, H4, P, SpanTitle, CardFooter, SpanFav } from './CardCSS';

const Card = () => (
  <CardWrap>
    <H4>
      Hello world{' '}
      <SpanTitle>
        <i className="fas fa-ellipsis-h" />
      </SpanTitle>
    </H4>
    <P>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit., Donec hendrerit tempor tellus.,Donec pretium posuere
      tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus., Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus.,
    </P>
    <div>
      <CardFooter>
        <b>last updated</b> - 2mins ago
        <SpanFav>
          <i className="fas fa-heart" />
        </SpanFav>
      </CardFooter>
    </div>
  </CardWrap>
);

export default Card;
