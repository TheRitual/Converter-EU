import styled from "styled-components";

export const ControlSelect = styled.select`
    font-family: 'Dela Gothic One', cursive;
    width: 100px;
    text-align: center;
    border: #000 solid 2px;
    border-radius: 10px;
    padding: 10px;
    background-color: #FFF;
    color: #305278;
    font-size: 16px;
    margin-left: 10px;
    margin-top: 10px;
    &:active {
        background-color: #305278;
        color: #FFF;
    }   
    &:focus {
        background-color: #305278;
        color: #FFF;
    }
`;

export const ControlInput = styled.input`
    font-family: 'Dela Gothic One', cursive;
    width: 250px;
    text-align: center;
    border: #000 solid 2px;
    border-radius: 10px;
    padding: 10px;
    background-color: #FFF;
    color: #305278;
    &:active {
        background-color: #6d93be;
    }
    &:focus {
        background-color: #6d93be;
        color: #FFF;
    }
    &:disabled {
        background-color: #50647a;
        color: #DDD;
    }
`;