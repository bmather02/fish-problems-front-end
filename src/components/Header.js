import { Link } from 'react-router-dom'

function Header(props) {
    return(
        <nav>
            <Link to="/">
                <img id="logo" src="https://bradleymather.com/wp-content/uploads/2022/07/Fish-Problems.png" alt="logo" />
            </Link>
            <Link to="/about">
                <h3>About</h3>
            </Link>
            <Link to="/problems">
                <h3>Common Problems</h3>
            </Link>
        </nav>
    )
}

export default Header