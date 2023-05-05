import styled from "@emotion/styled";

export const UserMenuContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const UserGreeting = styled.p`
    margin: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.globalFontColor};
`;

export const LogOutButton = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 0;
    /* text-decoration: none; */
    font-weight: 700;
    font-size: 16px;
    line-height: ${() => 47 / 40};
    letter-spacing: 0.02em;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--font-color);

    &:active {
        color: var(--global-white-color);
    }

    &:hover {
        color: ${({ theme }) => theme.colors.linkHoverColor};
    }

    svg {
        fill: ${({ theme }) => theme.colors.navigationIconColor};
    }

    &:hover {
        svg {
            fill: ${({ theme }) => theme.colors.linkHoverColor};
        }
    }

    &:active {
        svg {
            fill: ${({ theme }) => theme.colors.globalBlackColor};
        }
    }
`;
