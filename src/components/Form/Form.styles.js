import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    div {
      display: flex;
      justify-content: space-between;
      gap: 12px;

      input {
        width: 50%;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #d5d4d8;
        text-indent: 5px;
      }
    }
  }
  .meme {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      margin-top: 20px;
      padding: 20px;
      max-width: 100%;
      border-radius: 26px;
      align-self: center;
    }

    .meme-text {
      position: absolute;
      width: 80%;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      margin: 15px 0;
      padding: 0 5px;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      font-size: 2em;
      text-transform: uppercase;
      color: white;
      letter-spacing: 1px;
      text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
        -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000,
        -2px 0 0 #000, 2px 2px 5px #000;
    }

    .bottom {
      bottom: 16px;
    }
    .top {
      top: 36px;
    }
  }
`;

export const Button = styled.button`
  background: var(--mainGradient);
  height: 40px;
  color: var(--white);
  width: 100%;
  border: 0;
  border-radius: 5px;
  font-size: var(--fontMed);
  letter-spacing: -0.05em;
  cursor: pointer;
`;
