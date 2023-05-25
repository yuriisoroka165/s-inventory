import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <>
            <AppHeader />
            <Container>
                <main>
                    <Suspense fallback={<p>Loading page...</p>}>
                        <Outlet />
                    </Suspense>
                </main>
            </Container>
            <AppFooter />
        </>
    );
};

export default SharedLayout;
