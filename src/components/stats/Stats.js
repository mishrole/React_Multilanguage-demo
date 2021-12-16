import React from "react";
import styled from 'styled-components';
import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
    padding: 150px 0;
    position: relative;
`;

const StyledContainer = styled(Container)`
    background: #273e74;
    text-align: center;
    color: #FFFFFF;
    padding: 80px 0;

    h2 {
        font-weight: bold;
        margin-bottom: 1em;
    }

    p {
        font-size: 26px;
        padding: 0 1em;
        color: rgba(255,255,255,0.9);
        line-height: 35px;
    }
`;

export const Stats = () => {
    
    const { t } = useTranslation();

    return (
        <>
            <StyledWrapper>
                <StyledContainer fluid>
                    <h2>{t('who-we-are')}</h2>
                    <p>{t('who-we-are_message')}</p>
                </StyledContainer>
            </StyledWrapper>
        </>
    )
}