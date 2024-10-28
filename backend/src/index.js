import { app } from './app.js';
import connect from './configs/db.configs.js';
import dotenv from 'dotenv';

dotenv.config();
(async () => {
  try {
    await connect();
    console.log('Server Is Starting...');
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server Start Successful\nServer Running On Port ${
          process.env.PORT || 8000
        }\n\n➜ Local: http://localhost:${process.env.PORT || 8000}`,
      );
    });
  } catch (error) {
    console.error(
      `Unable To Boot The Server.\nError Message: ${error.message}`,
    );
  }
})();
