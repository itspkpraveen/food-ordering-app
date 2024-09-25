const RestaurantCard = (props)=>{
    const {resName, cuisine} = props
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}> 
            <h3>{resName}</h3>
            <h3>{cuisine}</h3>
            <h3>{resName}</h3>
            <h3>{resName}</h3>
            <h3>{resName}</h3>
        </div>
    )
}

export default RestaurantCard