import { FcDepartment } from "react-icons/fc";

import { iconSize } from "../../constants/iconSize";
import { HomeContainer } from "./Home.styled";

const Home = () => {
    return (
        <HomeContainer>
            <h1>Welcome to inventory app</h1>
            <FcDepartment size={iconSize.large} />
        </HomeContainer>
    );
};

export default Home;
