import styled from 'styled-components';

export const Layout = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 0 10px 100px 10px;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;

  color: var(--main-text-color);

  padding-top: 70px;
  padding-bottom: 70px;

  span {
    color: var(--accent-text-color);
  }
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--main-text-color);

  margin-bottom: 30px;
`;
