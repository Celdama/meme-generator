import React from 'react';
import trollFaceIcon from './trollFaceIcon.svg';
import { Wrapper, Content } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <img src={trollFaceIcon} alt='' />
          <h3>Meme Generator</h3>
        </div>
        <h5>React Course - Project 3</h5>
      </Content>
    </Wrapper>
  );
};

export default Header;
