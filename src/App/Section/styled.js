import styled from "styled-components";

export const StyledSection = styled.section`
    width: fit-content;
    text-align: center;
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.background};
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 10px 10px #00000099;
    margin: 0 20px 100px 20px;
    @media (max-width: 767px) {
        margin: 0 0 20px 0;
}
`;

export const SectionHeader = styled.h2`
    margin: 0 auto;
    padding: 20px;
`;