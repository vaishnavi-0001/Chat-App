const mongoose = require('mongoose');

const url = "mongodb+srv://vaishnaviagrawal0124:77RfeOdJvYLAaPEe@cluster0.4gu26bk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connected to db')).catch((e) => console.log('Error', e))
