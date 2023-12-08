import mongoose from "mongoose";
//create a schema                
const door_formSchema = new mongoose.Schema(
    {
        custumer_name:  {
            type: String,
            required: true,
        },
        productname: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        size2: {
            type: String,
            required: true,
        },
        colorName: {
            type: String,
            required: true,
        },
        polish: {
            type: String,
            required: true,
        },
        hinge: {
            type: String,
            required: true,
        },
        door_opning: {
            type: String,
            required: true,
        },
        message:{
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })
//create a modle  
const door_form = mongoose.models.door_form || mongoose.model('door_form', door_formSchema)

export default  door_form;