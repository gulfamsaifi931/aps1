import mongoose from "mongoose";
//create a schema
const formdetailsSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })
//create a modle  
const formdetails = mongoose.models.formdetails || mongoose.model('formdetails', formdetailsSchema)

export default  formdetails;