import {Link} from 'react-router-dom'
function ProblemsIndex({problems}) {
    function loaded() {
        if(problems){
            return (
                problems.map((problem) => {
                return (
                    <div className="card"key={problem._id}>
                <Link to={`/problems/${problem._id}`}>
                    <h2>{problem.name}</h2>
                    <img className="cardimg"src={problem.image} alt={problem.name}/>
                    <p>{problem.description}</p>
                </Link>
                    </div>
                )
            }))
        }
    }
    return problems ? loaded() : <p>Something went wrong</p>
}

export default ProblemsIndex