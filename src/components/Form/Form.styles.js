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
  img {
    margin-top: 20px;
    padding: 20px;
    max-width: 480px;
    align-self: center;
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
