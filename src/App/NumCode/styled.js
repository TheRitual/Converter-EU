import styled, { css } from "styled-components";

export const CodeValue = styled.span`
    font-size: 20px;
    ${({ isSmall }) => isSmall && css`
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
    `}
`;

export const Code = styled.span`
    color: #fff;
    background-color: #305278;
    padding: 7px;
    font-size: 14px;
    border-radius: 15px;
    ${({ isSmall }) => isSmall && css`
        font-size: 12px;
        padding: 5px;
        border-radius: 10px;
    `}
`;