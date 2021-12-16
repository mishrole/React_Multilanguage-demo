import React from "react";
import styled from 'styled-components';
import i18next from "i18next";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
// import { css } from '@emotion/react';
// import styled from '@emotion/styled';

const StyledNavbar = styled(Navbar)`
    margin-bottom: 20px;
    padding: 20px 0;
`;

const StyledNavLink = styled(Nav.Link)`
    &&& {
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        margin: 0 .5em;
        text-transform: uppercase;

        &:hover {
            color: rgba(0,0,0,.55);
        }
    }
`;

export const Header = () => {

    const { t } = useTranslation();

    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'us'
        },
        {
            code: 'es',
            name: 'Spanish',
            country_code: 'es'
        }
    ];

    // Tagged Template Literal + CSS Postprocess
    // const NavbarStyles = css`
    //     padding: 20px 0;
    // `;


    // Styled
    // const NavbarWhite = styled.Navbar`
    //     padding: 20px 0;
    // `
    
    return (
        <>
            {
            /* css(HeaderStyles) -> CSS in JS */
            /* <Navbar bg="white" variant="light" fixed="top" className={NavbarStyles}> */}
            <StyledNavbar bg="white" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src="./assets/images/pmxg-large-logo.png" alt="PMXG Logo" width="120px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end my-3 my-lg-0">
                        <Nav navbarScroll>
                            <StyledNavLink href="#home">{t('home')}</StyledNavLink>
                            <StyledNavLink href="#about-us">{t('about-us')}</StyledNavLink>
                            <StyledNavLink href="#products">{t('products')}</StyledNavLink>
                            <StyledNavLink href="#services">{t('services')}</StyledNavLink>
                            <StyledNavLink href="#contact">{t('contact')}</StyledNavLink>
                            <StyledNavLink href="#login">{t('login')}</StyledNavLink>
                            {
                                languages.map(({ code, name, country_code }) => (
                                    <Button variant="link" key={ code } className="mx-lg-1 text-start text-lg-end" onClick = {
                                        () => i18next.changeLanguage(code)
                                    }>
                                        <i className={ `flag-icon flag-icon-${country_code}` }></i>
                                    </Button>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </StyledNavbar>
        </>
    )
}