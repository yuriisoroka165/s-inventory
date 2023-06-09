import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.theme.width.globalContainerWidth};
    z-index: 999;
`;

export const HeaderComponent = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 20px;
    border-bottom: ${({ theme }) =>
        `1px solid ${theme.colors.headerLineColor}`};
    background-color: ${({ theme }) => `${theme.colors.headerBackgroundColor}`};
    box-shadow: ${({ theme }) => `${theme.shadows.headerShadow}`};
`;
