import styled from "@emotion/styled";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export const ModalWindow = styled(ReactModal)`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px;
    width: 450px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.globalWhiteColor};
    transform: translate(-50%, -50%) scale(1);

    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 300px;
`;
