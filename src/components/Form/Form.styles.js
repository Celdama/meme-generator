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

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    div {
      display: flex;
      justify-content: space-between;
      gap: 6px;

      input {
        width: 50%;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #d5d4d8;
      }
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
`;
