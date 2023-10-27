const app = require('./app');
const mongoose = require("mongoose")
const MONGO_URL= process.env.MONGODB_URI || `mongodb+srv://abdullah:KS9uoq3aIfwndxjG@mernworkoutapp.pu1fuzq.mongodb.net/?retryWrites=true&w=majority`
const port = process.env.PORT || 5000;
const connectToMongoDb=async(MONGO_URL)=>{
  try {
      await mongoose.connect(MONGO_URL)
      app.listen(port,()=>{
      console.log("Mongo db is connected & Server is up on "+port)
})
  } catch (error) {
      console.log(error)
  }
}
connectToMongoDb(MONGO_URL)

// app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`Listening: http://localhost:${port}`);
//   /* eslint-enable no-console */
// });
