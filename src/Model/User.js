import { Schema, model, models } from "mongoose"


const userSchema = new Schema({
    name: String,
    email: String
}, { timestamps: true })


export default models.user || model("user", userSchema);