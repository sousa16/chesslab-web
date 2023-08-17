import styled from 'styled-components';

export const ShowcaseImageCard = styled.div`
    display: flex;
    width: max-content;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
        height: 50%;
        justify-content: center;
    }
 
`
