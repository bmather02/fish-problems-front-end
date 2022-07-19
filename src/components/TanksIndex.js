import {Link} from 'react-router-dom'
function TanksIndex({tanks}) {
    function loaded() {
        if(tanks){
            return (
                tanks.map((tank) => {
                return (
                    <div className="card"key={tank.id}>
                <Link to={`/tanks/${tank.id}`}>
                    <h2>{tank.size}</h2>
                    <img className="cardimg"src={tank.image} alt={tank.size}/>
                    <p>{tank.dimensions}</p>
                </Link>
                    </div>
                )
            }))
        }
    }
    return tanks ? loaded() : <p>Something went wrong</p>
}

export default TanksIndex