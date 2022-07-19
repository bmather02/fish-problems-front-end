import { Link } from 'react-router-dom'

function Header(props) {
    return(
        <nav className="row">
            <Link to="/" className="logo">
                <img id="logo" src="https://bradleymather.com/wp-content/uploads/2022/07/Fish-Problems.png" alt="logo" />
            </Link>
            <div className="navlinks">
            <Link to="/" className="button">
                <h5>Home</h5>
            </Link>
            <Link to="/about" className="button">
                <h5>About</h5>
            </Link>
            <Link to="/problems" className="button">
                <h5>Common Problems</h5>
            </Link>
            </div>
        </nav>
    )
}

export default Header