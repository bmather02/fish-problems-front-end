import {useParams} from 'react-router-dom'
function TankShow (props) {
    const {id} = useParams();
    const tank = props.tanks.find(t => t.id === parseInt(id))
        if (props.tanks === []){
            return (<p>Error. Please go back 1 page and refresh.</p>)
        } else {
            return(
                <div className="center column">
                    <h1 className="center">More about the {tank.size}</h1>
                    <img className="center tankimg" src={tank.image} alt={tank.size}/>
                    <p className="">Dimensions: {tank.dimensions}</p>
                    <div className="center column">
                    <a className="button"href={tank.link} target="_blank" rel="noreferrer">Buy Now</a>
                    </div>
                </div>
            )
        }
}

export default TankShow