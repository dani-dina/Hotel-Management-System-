import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    roomId : {type : String, required : true, unique : true},
    name   : {type : String, required : true , unique : true},
    desctiption : {type : String, required : false},
    price : {type : Number, required : true},
    availability : {type : Boolean, reqired : true},
    bedType : {type : String, reqired : true , enum : [
         'Single',
         'Double', 
         'King', 'Queen', 
         'Bunk',
         'Standard',
         'lexury'
        ]},
    views : {type : String, required : true , enum : [
        'Sea', 'Mountain', 'City', 'Garden', 'No View'
    ]},    
    isBooked : {type : Boolean, required : true},
    floorNumber : {type : Number, required : true,},
    hasBalcony : {type : Boolean, required : false},
    isSmokingAllowed: {type: Boolean, required: true},
    checkInDate: {type: Date, required: false},
    checkOutDate: {type: Date, required: false},
    amenities: {type: [String], required: true,
        enum: [
            'Wi-Fi',
            'Air Conditioning',
            'Flat-screen TV',
            'Mini Refrigerator',
            'Room Safe',
            'Hair Dryer',
            'Coffee Maker',
            'Iron & Ironing Board',
            'Towels',
            'Toiletries',
            'Complimentary Bottled Water',
            'Desk or Workspace',
            'Closet or Wardrobe',
            'Alarm Clock',
            'Telephone',
            'Laptop/Device Charging Stations',
            'Shoehorn or Slippers',
            'In-Room Dining Menu',
            'Balcony',
            'Window with a View',
            'Extra Pillows and Blankets',
            'Smoke Detector',
            'Fire Extinguisher',
            'Climate Control System',
            'Laundry Service',
            'USB Charging Ports',
            'Key Card Access',
            'Private Bathroom',
            'Bathtub/Shower',
            'Tissues and Toilet Paper',
            'Bedding',
            'Jacuzzi',
            'Minibar',
            'Smart Room Devices'
        ],
    },

});

const Room = mongoose.model('Room',roomSchema);
export default Room;