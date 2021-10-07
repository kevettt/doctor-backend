const {Schema, model} = require('mongoose');

const Hospital = Schema({
    nombre: {
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: true
    },
    img:{
        type: String,
    },
    usuario:{
        required:true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

Hospital.method('toJSON',function(){
   const {__v,_id, password, google, ...object} = this.toObject();
   object.uid = _id;
   return object;
})


module.exports= model('Hospital',Hospital);