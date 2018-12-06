// react libraris
import React from 'react';

// third psrty libraries
import PropTypes from 'prop-types';

// components
import { CardWrap, H4, P, SpanTitle, SpanFav, CardDropdown } from './CardCSS';

const Card = props => {
  const { toggleDropdown, onclick } = props;
  return (
    <CardWrap>
      <H4>
        Hello world
        <SpanTitle toggleDrowndown={toggleDropdown}>
          <i onClick={onclick} className="fas fa-ellipsis-h" />
        </SpanTitle>
        <CardDropdown toggleDrowndown={toggleDropdown}>
          <p>
            <i className="fas fa-marker" />
            Edit
          </p>
          <p>
            <i className="fas fa-trash" />
            Delete
          </p>
        </CardDropdown>
      </H4>
      <P>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit., Donec hendrerit tempor tellus.,Donec pretium posuere
        tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus., Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.,
      </P>
      <div>
        <P CardFooter>
          <b>last updated</b> - 2mins ago
          <SpanFav>
            <i className="fas fa-heart" />
          </SpanFav>
        </P>
      </div>
    </CardWrap>
  );
};

Card.propTypes = {
  toggleDropdown: PropTypes.bool,
  onclick: PropTypes.func
};

export default Card;
