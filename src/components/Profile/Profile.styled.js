import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 5px;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  font-size: 16px;
`;

export const Avatar = styled.img`
  display: block;
  height: auto;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Container = styled.div`
  font-size: 18px;
  text-align: center;
  border: 1px solid black;
  width: 245px;
  margin: 0 auto 15px;
  padding: 15px;
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Name = styled.p`
  font-weight: 700;
`;
