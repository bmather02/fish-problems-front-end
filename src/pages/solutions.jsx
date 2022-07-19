import {useParams} from 'react-router-dom'
function Solutions (props) {
    const {id} = useParams();
    const problem = props.problems.find(p => p._id === id)
    console.log(problem)
        if (props.problems === []){
            return (<p>Error. Please go back 1 page and refresh.</p>)
        } else {
            return(
                <div className="center">
                    <h1 className="center">This is the solution for your {problem.name} problem</h1>
                    <img className="mainimg center" src={problem.image} alt={problem.name}/>
                    <p className="detail">{problem.detail}</p>
                    <div className='u-full-width center'>
                    <h3>Our Solution: {problem.solution}</h3>
                    </div>
                    <div className="center column">
                    <h4>Recommended Product</h4>
                    <img className="productimg" src={problem.recimage} alt={problem.name} />
                    <a className="button"href={problem.recurl} target="_blank">Buy Now</a>
                    </div>
                </div>
            )
        }
}

export default Solutions