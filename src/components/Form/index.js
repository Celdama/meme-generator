import React from 'react';
import { Wrapper, Content, Button } from './Form.styles';

const Form = () => {
  return (
    <Wrapper>
      <Content>
        <form action=''>
          <div>
            <input placeholder='Top text' type='text' />
            <input placeholder='Bottom text' type='text' />
          </div>
          <Button>Get a new meme image</Button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Form;
