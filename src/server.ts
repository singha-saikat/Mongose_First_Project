import config from './app/config'
import app from './app'
import mongoose from 'mongoose'
// import { error } from "console";

// main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.databaseConectionString as string)

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
main()
