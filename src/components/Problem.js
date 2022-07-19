function Problem({problem}) {
    const {image, name, description} = problem
    return(
        <div>
            <h2 className="center">{name}</h2>
            <img src={image} alt={name}/>
            <p>{description}</p>
            <hr/>
        </div>
    )
}

export default Problem