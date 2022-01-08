import React, { useState } from 'react';
import { Wrapper, Content, Button } from './Form.styles';
import memesData from '../../memesData';

const Form = () => {
  const [memeImg, setMemeImg] = useState('https://i.imgflip.com/25w3.jpg');

  const getMemeImg = (event) => {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImg(memesArray[randomNumber].url);

    document.querySelector('.display-meme-img').src = memeImg;
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
        <img className='display-meme-img' src={memeImg} alt='meme' />
      </Content>
    </Wrapper>
  );
};

export default Form;
