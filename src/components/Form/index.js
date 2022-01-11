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

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { topText, bottomText, randomImage } = meme;
  return (
    <Wrapper>
      <Content>
        <form action=''>
          <div>
            <input
              name='topText'
              onChange={handleChange}
              placeholder='Top text'
              type='text'
              value={topText}
            />
            <input
              name='bottomText'
              onChange={handleChange}
              placeholder='Bottom text'
              type='text'
              value={bottomText}
            />
          </div>
          <Button onClick={getMemeImg}>Get a new meme image</Button>
        </form>
        <div className='meme'>
          <img className='display-meme-img' src={randomImage} alt='meme' />
          <h2 className='meme-text top'>{topText}</h2>
          <h2 className='meme-text bottom'>{bottomText}</h2>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Form;
