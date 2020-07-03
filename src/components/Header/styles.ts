import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  text-shadow: 1px 1px 2px #999;
`;

export const SubContainer = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const NavContainer = styled(SubContainer) `
  margin-top: 200px;
  max-width: 50px;
  min-width: 50px;
  font-size: 12px;
`; 

export const NavArrow = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
`;

export const Logo = styled.img `
  width: 150px;
  height: 150px;
`;

export const AppTitle = styled.h1`
  margin: 20px 0px;
`;