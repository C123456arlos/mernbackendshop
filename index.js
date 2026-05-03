// const express = require('express')
// const mongoose = require('mongoose');
// const app = express()
// const port = process.env.PORT || 5000
// const cors = require('cors')


// require('dotenv').config()


// app.use(express.json())
// app.use(cors({
//     origin: ['http://localhost:5173'],
//     credentials: true
// }))
// const bookRoutes = require('./src/books/book.route')
// const orderRoutes = require('./src/orders/order.route')

// app.use('/api/books', bookRoutes)
// app.use('/api/orders', orderRoutes)

// async function main() {
//     await mongoose.connect(process.env.DB_URL);
//     app.use('/', (req, res) => {
//         res.send({ message: 'server' })
//     })
// }
// main().then(() => console.log("mongo db connected successfully")).catch(err => console.log(err));



// app.listen(port, () => {
//     console.log(`example ${port}`)
// })









const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require('dotenv').config()





const corsOptions = {
    origin: 'https://mernshopbookstore-oc68e28nx-carlos-projects-b4082f29.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));


// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://mernshopbookstore.vercel.app/', 'https://mernshopbookstore.vercel.app/npm'],
    credentials: true,
}))

// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/stats/admin.stats')


app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/admin', adminRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get("/", (req, res) => {
        res.send({ message: "Book Store Server is running!" });
    });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});






























// mondodb
// test






// 6:54











