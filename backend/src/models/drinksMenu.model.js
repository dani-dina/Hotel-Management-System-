import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
    drinkId : {type : String , required : true, unique : true},
    name : {type : String , required : true},
    description : {type : String , required : false},
    price : {type : Number , required : true},
    image : {type : String, required : false},
    availability : {type : Boolean, required : true},
    isAlcoholic  : {type : Boolean, required : true},
    categories : {type : String ,  required : true , enum : [
        'hot',
        'alcoholic',
        'soft',
        'juice',
        'traditional',
        'cocktail',
        'non-alcoholic',
        'energy',
        'milkshake',
        'smoothie',
        'iced',
        'lemonade',
        'herbal tea',
        'sparkling water',
        'hot chocolate',
        'mocktail',
        'soda'
    ]}
});

const Drink = mongoose.model('Drink',drinkSchema);
export default Drink;