import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import ProductRoute from './routes/ProductRoute.js';

dotenv.config();

const app = express();
mongoose.connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => console.log("Database Connected"));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Terhubung oleh Express JS Server ZanMarket!');
});


app.use(UserRoute);
app.use(ProductRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running at port ${port}`));

