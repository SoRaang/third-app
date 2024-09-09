import { Outlet } from 'react-router-dom';
import OutletMenu from '../components/OutletMenu';

const OutletTest = () => {
    return (
        <div>
            <OutletMenu />

            <div id="sectionContainer" className="inner-wrap">
                <Outlet />
            </div>
        </div>
    );
};

export default OutletTest;