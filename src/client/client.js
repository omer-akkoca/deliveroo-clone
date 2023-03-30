import DATABASE from "./database.json"

class DeliverooClient{

    getAllCategories(){
        let response = { data: null, error: null }

        const categories = DATABASE.categories
        if (categories) 
            response.data = categories
        else 
            response.error = "There are no any categories.";
        
        return response;
    }

    getAllFeatures() {
        let response = { data: null, error: null }

        const features = DATABASE.featured
        if (features) 
            response.data = features
        else 
            response.error = "There are no any features";
        
        return response;
    }

    getFeaturedById({ id }){
        let response = { data: null, error: null }

        const feature = DATABASE.featured.find(e => e._id === id)
        if (feature) 
            response.data = feature
        else 
            response.error = "There is no fuature with this id.";

        return response;
    }

    getRestaurantForFeatured({ restaurants }) {
        let response = { data: null, error: null }

        const data_restaurants = DATABASE.restaurants
        const restaurants_by_feature = []

        for (let i = 0; i < restaurants.length; i++) {
            const x = data_restaurants.find(e => e._id === restaurants[i]);
            restaurants_by_feature.push(x)
        }

        if (restaurants_by_feature.length > 0)
            response.data = restaurants_by_feature
        else
            response.error = "Could not find any restaurant for this feature.";

        return restaurants_by_feature;
    }

    getRestaurantById({ id }){
        let response = { data: null, error: null }

        const restaurant = DATABASE.restaurants.find(e => e._id === id)
        if (restaurant) 
            response.data = restaurant
        else 
            response.error = "There is no restaurant with this id.";

        return response;
    }

    getRestaurantByCategory({ category }){
        let response = { data: null, error: null }

        const restaurants = DATABASE.restaurants.filter(e => e.labels.indexOf(category) > -1)
        
        if (restaurants) 
            response.data = restaurants
        else 
            response.error = "There are no restaurants in this category.";

        return response;
    }

}

export default DeliverooClient;