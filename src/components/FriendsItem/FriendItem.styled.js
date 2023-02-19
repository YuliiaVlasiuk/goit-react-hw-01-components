import styled from 'styled-components';

export const ColorIsActive = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #4caf50;
  margin-left: 30px;

  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const FriendItemSection = styled.div`

width: 400px;
border: 2px solid grey;
border-radius:4px;
display: flex;
box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1) ;
align-items: center;
gap: 20px
   `;
