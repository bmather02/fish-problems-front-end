import {useParams} from 'react-router-dom'
function Solutions (props) {
    const {id} = useParams();
    const problem = props.problems.find(p => p._id === id)
    console.log(problem)
        if (props.problems === []){
            return (<p>Error. Please go back 1 page and refresh.</p>)
        } else {
            return(
                <div>
                    <h1>This is the solution for your {problem.name} problem</h1>
                    <img src={problem.image} alt={problem.name}/>
                    <p>{problem.detail}</p>
                    <h3>Our Solution: {problem.solution}</h3>
                    <h4>Recommended Product</h4>
                    <img src={problem.recimage} alt={problem.name} />
                    <a href={problem.recurl}>Buy Now</a>
                </div>
            )
        }
}

export default Solutions