import styled from "styled-components";

export const ControlSelect = styled.select`
    font-family: 'Dela Gothic One', cursive;
    width: 100px;
    text-align: center;
    border: #000 solid 2px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.primary};
    font-size: 16px;
    margin-left: 10px;
    margin-top: 10px;
    &:active {
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.background};
    }   
    &:focus {
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.background};
    }
`;

export const ControlInput = styled.input`
    font-family: 'Dela Gothic One', cursive;
    width: 250px;
    text-align: center;
    border: #000 solid 2px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.primary};
    &:active {
        background-color: ${({theme}) => theme.colors.primaryLight};
    }
    &:focus {
        background-color: ${({theme}) => theme.colors.primaryLight};
        color: ${({theme}) => theme.colors.background};
    }
    &:disabled {
        background-color: #50647a;
        color: #DDD;
    }
`;