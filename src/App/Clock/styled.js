import styled from "styled-components";

export const StyledClock = styled.section`
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: right;
    color: ${({theme}) => theme.colors.primary};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
`;