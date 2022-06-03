import "./navbar.scss"
import { Link } from "react-router-dom"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
        type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
        ]
    },
    {
        type: 'group', name: 'group2', items: [
            { value: 'five', label: 'Five' },
            { value: 'six', label: 'Six' }
        ]
    }
]



const Navbar = () => {
    const defaultOption = options[0];
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <span className="logo">✩ TÌM VIỆC NHANH ✩</span>
                    <div className="navItems">
                        <Link to="/register">
                            <button className="navButton">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="navButton">Login</button>
                        </Link>
                        <div className="cart-icon">
                            {/* <h1>0</h1> */}
                            <div className="item">



                                <img
                                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                    className="avatar"
                                />
                                <span>admin</span>
                                <Dropdown
                                    arrowClosed={<span className="arrow-closed" />}
                                    arrowOpen={<span className="arrow-open" />}
                                    options={options}
                                    value={defaultOption}
                                    placeholder="Select an option"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar