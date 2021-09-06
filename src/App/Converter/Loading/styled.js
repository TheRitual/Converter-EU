import styled, { keyframes } from "styled-components";

const loadGridAnimation = keyframes`
    0% {
        opacity: 1;
        border-radius: 15%;
    }
    50% {
        opacity: 0.1;
        border-radius: 50%;
    }
    100% {
        opacity: 1;
        border-radius: 15%;
    }
`;

export const LoadingGrid = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 20px auto;
`;

export const LoadingDot = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    background: ${({theme}) => theme.colors.primary};
    animation: ${loadGridAnimation} 1.2s linear infinite;
    &:nth-child(1) {
        top: 8px;
        left: 8px;
        animation-delay: 0s;
    }
    &:nth-child(2) {
        top: 8px;
        left: 32px;
        animation-delay: -0.4s;
    }
    &:nth-child(3) {
        top: 8px;
        left: 56px;
        animation-delay: -0.8s;
    }
    &:nth-child(4) {
        top: 32px;
        left: 8px;
        animation-delay: -0.4s;
    }
    &:nth-child(5) {
        top: 32px;
        left: 32px;
        animation-delay: -0.8s;
    }
    &:nth-child(6) {
        top: 32px;
        left: 56px;
        animation-delay: -1.2s;
    }
    &:nth-child(7) {
        top: 56px;
        left: 8px;
        animation-delay: -0.8s;
    }
    &:nth-child(8) {
        top: 56px;
        left: 32px;
        animation-delay: -1.2s;
    }
    &:nth-child(9) {
        top: 56px;
        left: 56px;
        animation-delay: -1.6s;
    }
`;