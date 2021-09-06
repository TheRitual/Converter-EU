import styled from "styled-components";

export const ConverterElement = styled.div`
    padding: 10px;
    border-bottom: 3px dotted #FFF;
    transition: 1s;
    @media (max-width: 767px) {
        border-bottom-color: #DEF;
    }
`;

export const ConverterButton = styled.button`
    display: block;
    font-size: 20px;
    margin: 15px auto;
    border: 2px solid;
    border-radius: 10px;
    padding: 7px;
    color: #305278;
    background-color: hsl(179, 100%, 98%);
    transition: 0.3s;
    &:hover {
        background-color: #4c85c5;
        color: #FFF;
        transform: scale(1.2);
        cursor: pointer;
    }
`;