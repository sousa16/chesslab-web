import React from 'react'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    IconContainer,
} from '../styles/Global.styled';

// import showcase styles
import {
    ShowcaseImageCard,
} from '../styles/Showcase.styled'

// import react icons
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
//import { IoIosAppstore } from 'react-icons/io';
//import { BiLogoPlayStore } from 'react-icons/bi';

// import assets
import splash from '../assets/splash.png';

const Showcase = () => {
  return (
    <PaddingContainer 
        id='home'
        top='9%'
        responsiveLeft='1rem'
        responsiveRight='1rem'
        responsiveTop='6rem'
    >
        <FlexContainer align='left' fullWidthChild>

            {/* --left-content-- */}
            <div>
                <Heading
                    as='h2'
                    size='h2'
                    top='0.5rem'
                    bottom='1rem'
                >
                    Welcome to ChessLab
                </Heading>

                <Heading as='h3' size='h3'>
                    Your Chess Training Companion
                </Heading>

                <ParaText as='p' top='2rem' bottom='2rem' right='4rem'>
                ChessLab offers a comprehensive training experience that enables you to study and refine your openings, 
                as well as sharpen your tactical prowess. 
                This user-friendly mobile app provides a platform to create and edit your personalized opening repertoires, 
                in addition to a multitude of puzzles of varying levels of difficulty. By integrating the Spaced Repetition System (SRS),
                ChessLab ensures that your training adapts to your progress, maximizing memory retention and skill improvement.
                </ParaText>

                {/* --social-icons--  */}
                <FlexContainer gap='20px' responsiveFlex>

                    {/* <a href='' target='_blank' rel="noreferrer"> 
                        <IconContainer color='white' size='2rem'>
                            <IoIosAppstore />
                        </IconContainer>
                    </a>

                    {<a href='' target='_blank' rel="noreferrer"> 
                        <IconContainer color='white' size='2rem'>
                            <BiLogoPlayStore />
                        </IconContainer>
                    {</a>*/}

                    <a href='https://github.com/MartimBaltazar/ChessLab' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <FaGithub />
                        </IconContainer>
                    </a>

                    <a href='mailto:jpcsousa@outlook.pt' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <AiOutlineMail />
                        </IconContainer>
                    </a>
                </FlexContainer>
            </div>

            {/* --right-content-- */}
            <FlexContainer 
            direction='column'
            align='center'
            >   
                <Heading as='h2' size='h2' bottom='1rem' responsiveTop='2rem'>
                    COMING SOON
                </Heading>
                <Heading as='h4' size='h4' bottom='2rem'>
                    We are working very hard on the mobile app development, stay tuned!
                </Heading>
                <ShowcaseImageCard>
                    <img src={splash}
                    alt='splash' />
                </ShowcaseImageCard>
            </FlexContainer>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase