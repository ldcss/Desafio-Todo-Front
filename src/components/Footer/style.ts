import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #222;
  color: #fff;
  padding: 3em;
  text-align: center;
  height: 90px;
  padding: 0;
`;

export const IconsContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 10px;
  margin-top: 0px;
`;

export const IconsItems = styled.li`
  margin: 0 1em;
  :hover {
    color: #ffbb33;
  }
`;

export const Copyright = styled.p`
  font-weight: bold;
  color: #ffffaa;
  margin: 0;
`;
