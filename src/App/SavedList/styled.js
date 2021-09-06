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
    color: ${({theme}) => theme.colors.dark};
    padding: 7px;
    margin: auto;
    line-height: 2.3;
    transition: 0.2s;
    cursor: default ;
    filter: drop-shadow(0px -1px 0px ${({theme}) => theme.colors.primaryLight});
    &:hover {
        filter: drop-shadow(0px 3px 3px ${({theme}) => theme.colors.primaryLight});
    }
`;

export const FunctionalButton = styled.button`
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.error};
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
        color: ${({theme}) => theme.colors.dark};
    }
`;

export const RemoveButton = styled.button`
    color: ${({theme}) => theme.colors.error};
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
