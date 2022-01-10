import React, { useState } from 'react';
import { Wrapper, Content, Button } from './Form.styles';
import memesData from '../../memesData';

const Form = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/25w3.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImg = (event) => {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = allMemeImages.data.memes[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });

    document.querySelector('.display-meme-img').src = meme.randomImage;
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
        <img className='display-meme-img' src={meme.randomImage} alt='meme' />
      </Content>
    </Wrapper>
  );
};

export default Form;
