import React from 'react'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Container,
} from '../styles/Global.styled';

// import Header styles
import {
    HeaderContainer,
    Logo,
} from '../styles/Header.styled'

import { theme } from '../utils/Theme';


const Header = () => {

    return (
        <HeaderContainer bgColor={theme.colors.transparent}>
            <PaddingContainer
                top='1.2rem'
                bottom='1.2rem'
                responsiveLeft='1rem'
                responsiveRight='1rem'
            >
                <Container>
                    <FlexContainer justify='center' responsiveFlex>
                        {/* --left-logo-- */}
                        <Logo>ChessLab</Logo>
                    </FlexContainer>
                </Container>
            </PaddingContainer>
        </HeaderContainer>
    )
}

export default Header