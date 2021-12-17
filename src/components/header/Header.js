import React from "react";
import styled from 'styled-components';
import i18next from "i18next";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

const StyledNavbar = styled(Navbar)`
    margin-bottom: 20px;
    padding: 20px 0;
`;

const StyledNavLink = styled(NavLink)`
    &&& {
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        margin: 0 .5em;
        letter-spacing: 0.5px;
        text-transform: uppercase;

        &:hover {
            color: rgba(0,0,0,.55);
        }
    }
`;

const StyledExternalLink = styled.a`
    &&& {
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        margin: 0 .5em;
        letter-spacing: 0.5px;
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

    return (
        <>
            <StyledNavbar bg="white" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src="./assets/images/pmxg-large-logo.png" alt="PMXG Logo" width="120px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end my-3 my-lg-0">
                        <Nav navbarScroll>
                            {/* <NavLink className={({ isActive }) => isActive ? "red" : "blue"} /> */}
                            <StyledNavLink className="nav-link" to="/">{t('home')}</StyledNavLink>
                            <StyledNavLink className="nav-link" to="/about-us">{t('about-us')}</StyledNavLink>
                            <StyledNavLink className="nav-link" to="/products">{t('products')}</StyledNavLink>
                            <StyledNavLink className="nav-link" to="/services">{t('services')}</StyledNavLink>
                            <StyledExternalLink className="nav-link" href="https://app.pmxg.com/contact">{t('contact')}</StyledExternalLink>
                            <StyledExternalLink className="nav-link" href="https://app.pmxg.com/auth">{t('login')}</StyledExternalLink>
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