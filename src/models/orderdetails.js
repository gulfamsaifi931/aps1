import mongoose from "mongoose";
//create a schema
const orderdetailsSchema = new mongoose.Schema(
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
        message:{
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })
//create a modle  
const orderdetails = mongoose.models.orderdetails || mongoose.model('orderdetails', orderdetailsSchema)

export default  orderdetails;