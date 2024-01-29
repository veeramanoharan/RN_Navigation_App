import { createContext,useState } from "react";


export const Favourites_Context = createContext({
    ids:[],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});



function Fav_contextProvider({children}){
    const [favMealId,setFavMealId] = useState([]);

    function addFavMeal(id){
        return setFavMealId((curr_FavId) => [...curr_FavId,id]);
    }
    function removeFavMeal(id){
        return setFavMealId ((curr_FavId) => curr_FavId.filter((mealId) => mealId != id));
    }

    const Provider_values = {
        ids: favMealId,
        addFavourite: addFavMeal,
        removeFavourite: removeFavMeal
    };

    return <Favourites_Context.Provider value={Provider_values}>
            {children}
         </Favourites_Context.Provider>
}

export default Fav_contextProvider;