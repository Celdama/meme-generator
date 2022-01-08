import React from 'react';
import { Wrapper, Content, Button } from './Form.styles';
import memesData from '../../memesData';

const Form = () => {
  const getMemeImg = (event) => {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    console.log(url);
  };

  return (
    <Wrapper>
      <Content>
        <form action=''>
          <div>
            <input placeholder='Top text' type='text' />
            <input placeholder='Bottom text' type='text' />
          </div>
          <Button onClick={getMemeImg}>Get a new meme image</Button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Form;
