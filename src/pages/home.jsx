import {Link} from 'react-router-dom'
function Home(props) {
    return (
        <main className="center">
            <h1 className="center">You've Got 99 Problems, But A Fish Ain't One</h1>
            <br/>
            <h3>We hope we can help you find the solution to your problem. Check below to see our solution to your problem.</h3>
            <br/>
            <Link to="/problems" className="button">
                <h5>Common Problems</h5>
            </Link>
        </main>
    )
}

export default Home