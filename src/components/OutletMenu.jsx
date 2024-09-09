import { Link } from "react-router-dom";


const OutletMenu = () => {
    return (
        <nav id="navPrimary">
            <ul className="navigation-list inner-wrap">
                <li className="navigation-item">
                    <Link to='/'>Home</Link>
                </li>

                <li className="navigation-item">
                    <Link to='/product'>Product</Link>
                </li>
            </ul>
        </nav>
    );
};

export default OutletMenu;