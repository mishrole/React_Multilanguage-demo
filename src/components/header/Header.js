import React from "react";
import { Container, Navbar, DropdownButton, Dropdown} from "react-bootstrap";
import { Globe2 } from 'react-bootstrap-icons';
import i18next from "i18next";

export const Header = () => {

    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'us'
        },
        {
            code: 'es',
            name: 'Spanish',
            country_code: 'mx'
        }
    ];

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>Multilanguage Demo</Navbar.Brand>
                    <DropdownButton id="dropdown-basic-button" title={
                        <Globe2 color="black" />
                    } variant="light" size="sm">
                        {
                            languages.map(({ code, name, country_code }) => (
                                <Dropdown.Item key={code} onClick={() => i18next.changeLanguage(code)}>
                                    <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                                    {name}
                                </Dropdown.Item>    
                            ))
                        }
                    </DropdownButton>
                </Container>
            </Navbar>
        </>
    )
}