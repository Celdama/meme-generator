import styled from 'styled-components';

export const Wrapper = styled.header`
  background: var(--mainGradient);
  padding: 20px;
  color: var(--white);
`;

export const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 6px;

    h3 {
      font-weight: 500;
      font-size: 20px;
    }
  }

  h5 {
    font-weight: 300;
    font-size: 14px;
  }
`;

export const TrollFaceImg = styled.img`
  width: 46px;
`;
