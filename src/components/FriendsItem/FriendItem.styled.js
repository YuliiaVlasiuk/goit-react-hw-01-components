import styled from "styled-components";

export const ColorIsActive=styled.div`
    width:20px; 
    height:20px;
    border-radius: 50%;
    background-color: #4caf50;
    margin-left: 30px;

    background-color: ${props => {
        return props.isActive ? 'green' : 'red';
       }};    
   `
