import React, { useState, useEffect } from 'react';
import { Wrapper, Content, Button } from './Form.styles';

/**
 * Challenge:
 * As soon as the Meme component loads the first time,
 * make an API call to "https://api.imgflip.com/get_memes".
 *
 * When the data comes in, save just the memes array part
 * of that data to the `allMemes` state
 *
 * Think about if there are any dependencies that, if they
 * changed, you'd want to cause to re-run this function.
 *
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` blocks to resolve the promises
 * from using `fetch`. We'll learn why after this challenge.
 */

const Form = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/25w3.jpg',
  });
  const [allMemes, setAllMemes] = useState([]);

  const getMemeImg = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    console.log(url);
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

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

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
