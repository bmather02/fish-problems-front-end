import TanksIndex from "../components/TanksIndex"
function Tanks({tanks}) {
    
    return(
        <div className="center column">
            <h1>Common Tank Sizes</h1>
         <TanksIndex tanks={tanks}/>
         </div>
    )
}

export default Tanks