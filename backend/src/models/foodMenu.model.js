import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    foodId : {type : String, required : true, unique : true},
    name   : {type : String, required : true},
    description : {type : String , required : false},
    price : {type : Number, required : true},
    image : {type : String, required : false},
    availability : {type : Boolean, required : true},
    isVegetarian : {type : Boolean, required : true},
    categories   : {type : String, required : true, enum : [
        'Starters',
        'main-course',
        'Desserts',
        'Vegetarian',
        'Vegan',
        'gluten-free',
        'Pasta',
        'Salads',
        'Soups',
        'Burgers',
        'Sandwiches',
        'Pizza',
        'grilled-items',
        'Seafood',
        'Steaks',
        'rice-dishes',
        'Fried-items',
        'healthy-options',
        'breakfast-items',
        'snacks',
        'BBQ',
        'Sushi',
        'tradional-food',
        'cake'
    ]}
});

const Food = mongoose.model('Food',foodSchema);
export default Food;