require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;



const recipeDetail = async (req, res) =>{
    
    const { recipeId } = req.params;
    
    try{
        let { data } = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?&apiKey=${API_KEY}`)
        if(data.hasOwnProperty('id')){
            let dataMapped = await data?.map(e =>{
                return{
                    id: e.id,
                    name: e.title,
                    image: e.image,
                    summary: e.summary,
                    diets: e.diets,
                    vegetarian: e.vegetarian,
                    vegan: e.vegan,
                    glutenFree: e.glutenFree,
                    dairyFree: e. dairyFree,
                    veryHealthy: e.veryHealthy,
                    instructions: e.instructions
                }
            })
            res.json(dataMapped)
        } else {
            throw new Error(`We cant find a recipe with id: ${recipeId}`)
        }
    }catch(e){
        res.send(e.message)
    }
}

module.exports = recipeDetail;