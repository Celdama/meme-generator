import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  background: var(--mainGradient);
  padding: 20px;
  color: var(--white);
`;

export const Content = styled.nav`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);

  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 6px;

    h3 {
      font-weight: 500;
      font-size: var(--fontMed);
    }
  }

  h5 {
    font-weight: 300;
    font-size: var(--fontSmall);
  }
`;

export const TrollFaceImg = styled.img`
  width: 46px;
`;
