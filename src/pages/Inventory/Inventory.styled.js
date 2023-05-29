import styled from "@emotion/styled";

export const InventoryContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const InventoryDataContainer = styled.div`
    height: 80vh;
    width: 100vw;
    padding: 20px 30px;
    border: ${({ theme }) => `1px solid ${theme.colors.headerLineColor}`};
    border-radius: 5px;
    overflow: auto;
`;
