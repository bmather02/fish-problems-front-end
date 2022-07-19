import ProblemsIndex from "../components/ProblemsIndex"
function Problems({problems}) {
    
    return(
        <div className="center column">
            <h1>Common Problems</h1>
         <ProblemsIndex problems={problems}/>
         </div>
    )
}

export default Problems