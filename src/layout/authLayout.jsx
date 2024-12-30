import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loading from '../components/Loading'

const authLayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [location.pathname]);
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default authLayout;