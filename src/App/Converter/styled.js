import styled from "styled-components";

export const ConverterElement = styled.div`
    padding: 15px 0 ;
    border-bottom: 3px dotted ${({ theme }) => theme.colors.background};;
    transition: 1s;
    @media (max-width: 767px) {
        filter: drop-shadow(0px 3px 3px ${({ theme }) => theme.colors.primaryLight});
    }
    `;

export const ConverterButton = styled.button`
    display: block;
    font-size: 20px;
    margin: 15px auto;
    border: 2px solid;
    border-radius: 10px;
    padding: 7px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.background};
    transition: 0.3s;
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryLight};
        color: ${({ theme }) => theme.colors.background};
        transform: scale(1.2);
        cursor: pointer;
    }
`;