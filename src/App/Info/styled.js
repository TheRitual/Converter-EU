import styled, { css } from "styled-components";

export const StyledInfo = styled.section`
text-align: center;
    width: 80%;
    margin: 0 auto;
    position: fixed;
    left: 10%;
    bottom: 0;
    opacity: 1;
    transition: 1s;
    @media(max-width: 767px) {
       width: 100%;
        left: 0;
    }
`;

export const Information = styled.p`
    margin: 0;
    height: 40px;
    background-color: #FFF;
    color: #305278;
    padding: 10px;
    border: 2px solid #000;
    border-bottom: 0px;
    border-radius: 20px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    ${({ isError }) => isError && css`
        color: hsl(0, 100 %, 30 %);
    `}
`;