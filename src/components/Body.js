import RestaurantCard from "RestaurantCard"

const Body = () =>{
    return (
        <div className="body">
            <div className = "search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                resName ="Meghna Foods"
                cuisine = "Biryani, North Indian, Asian"
                />
            </div>
        </div>
    )
}

export default Body