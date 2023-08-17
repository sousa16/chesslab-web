import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;
    background-color: ${({ bgColor }) => bgColor};
`

export const Logo = styled.p`
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    color: white;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.5rem;
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        color: white;
    }

`