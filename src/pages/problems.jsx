import Problem from "../components/Problem"
function Problems({problems}) {
    function loaded() {
        if(problems){
            return (problems.map((problem,index) => {
                return <Problem problem={problem} key={index}/>
            }))
        }
    }
    return problems ? loaded() : <p>Something went wrong</p>
}

export default Problems