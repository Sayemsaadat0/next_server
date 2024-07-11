import { connect } from "mongoose";

// const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.8xgxmx2.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
// const MONGO_URI = `mongodb+srv://SAYEM_NEXT_SERVER:SAYEM_NEXT_SERVER@cluster0.8xgxmx2.mongodb.net/NEXT_SERVER_DATA?retryWrites=true&w=majority`
const MONGO_URI = `mongodb+srv://SAYEM_NEXT_SERVER:SAYEM_NEXT_SERVER@cluster0.4l6a3hl.mongodb.net/NEXT_SERVER_DATA?retryWrites=true&w=majority&appName=Cluster0`

connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error));