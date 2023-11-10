import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true
    },
    cart : {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});

export default mongoose.model("Account", userSchema);