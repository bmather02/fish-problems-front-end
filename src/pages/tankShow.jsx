import {useParams} from 'react-router-dom'
function TankShow (props) {
    console.log(props.tanks)
    const {id} = useParams();
    console.log(id)
    const tank = props.tanks.find(t => t.id === parseInt(id))
    console.log(tank)
        if (props.tanks === []){
            return (<p>Error. Please go back 1 page and refresh.</p>)
        } else {
            return(
                <div className="center">
                    <h1 className="center">More about the {tank.size}</h1>
                    <img className="mainimg center" src={tank.image} alt={tank.size}/>
                    <p className="detail">{tank.dimensions}</p>
                    <div className="center column">
                    <a className="button"href={tank.link} target="_blank" rel="noreferrer">Buy Now</a>
                    </div>
                </div>
            )
        }
}

export default TankShow