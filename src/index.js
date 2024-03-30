const app = require('./app'); // Assuming `app.js` contains your Express app configuration
const mongoose = require("mongoose");

// Environment variable for MongoDB URI (recommended)
const MONGO_URI = process.env.MONGODB_URI;

// Fallback URI (use with caution for development only)
const FALLBACK_MONGO_URI = `mongodb+srv://abdullah:KS9uoq3aIfwndxjG@mernworkoutapp.pu1fuzq.mongodb.net/?retryWrites=true&w=majority`;

const port = process.env.PORT || 5000;

const connectToMongoDb = async () => {
  try {
    // Prioritize environment variable for security
    const uri = MONGO_URI || FALLBACK_MONGO_URI;

    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Connection pool configuration
      poolSize: 10, // Set a reasonable pool size (adjust as needed)
      keepAlive: true, // Maintain open connections for reuse
      connectTimeoutMS: 10000, // Timeout for establishing connections (optional)
      socketTimeoutMS: 45000, // Timeout for inactive connections (optional)
    };

    await mongoose.connect(uri, connectionOptions);

    console.log("MongoDB connected successfully with connection pooling!");

    app.listen(port, () => {
      console.log(`Server is up and listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Terminate server on connection failure
  }
};

// Connect to MongoDB on application startup
connectToMongoDb();
