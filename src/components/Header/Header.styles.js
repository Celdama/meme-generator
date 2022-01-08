import styled from 'styled-components';

export const Wrapper = styled.nav`
  background: var(--mainGradient);
  padding: 20px;
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 6px;
  }
`;
