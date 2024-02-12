const Nav = () => {

    return (
        <nav className="container">
            <div className="logo">
                <img className="logo-img" src="/imgaes/logoimg.png" alt="imagehere" />
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    )
};

export default Nav;