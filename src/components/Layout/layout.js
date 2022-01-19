import React, { Suspense, lazy } from 'react';
import './style.css'
const MenuAppBar = lazy(() => import('../menuAppBar'))


const Layout = ({ children }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <React.Fragment>
                <MenuAppBar />
                {children}
            </React.Fragment>
        </Suspense>
    )
}

export default Layout;
