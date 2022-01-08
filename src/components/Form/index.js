import React from 'react';
import { Wrapper, Content, Button } from './Form.styles';

const Form = () => {
  return (
    <Wrapper>
      <Content>
        <form action=''>
          <div>
            <input type='text' />
            <input type='text' />
          </div>
          <Button>Get a new meme image</Button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Form;
