import styled from "@emotion/styled";

export const CloseButton = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-left: auto;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;

    svg {
        fill: ${({ theme }) => theme.colors.globalBlackColor};
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
