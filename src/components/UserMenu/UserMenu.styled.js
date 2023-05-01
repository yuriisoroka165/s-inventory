import styled from "@emotion/styled";

export const UserMenuContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const UserGreeting = styled.p`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.globalFontColor};
`;

export const LogOutButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;

    svg {
        fill: ${({ theme }) => theme.colors.accentColor};
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
