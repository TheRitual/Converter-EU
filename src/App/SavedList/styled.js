import styled from "styled-components";


export const List = styled.ul`
    list-style-type: none;
    margin: auto;
    padding: 0px;
    overflow-y: auto;
    max-height: 600px;
`;

export const ListItem = styled.li`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;
    color: #000;
    border-bottom: 1px #CCC solid;
    border-top: 1px #AAA solid;
    padding: 7px;
    margin: auto;
    line-height: 2.3;
    &:hover {
        background-color: #def0ef;
    }
`;

export const FunctionalButton = styled.button`
    font-family: 'Roboto', sans-serif;
    color: rgb(92, 35, 35);
    background-color: transparent;
    font-size: 18px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    margin: 5px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        color: #000;
    }
`;

export const RemoveButton = styled.button`
    color: rgb(92, 35, 35);
    background-color: rgba(92, 35, 35, 0.219);
    font-size: 15px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    margin: 5px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        background-color: tomato;
        color: #000;
    }
`;
