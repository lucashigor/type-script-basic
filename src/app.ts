import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'
import bodyParser = require('body-parser');

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(bodyParser.json())
    }

    private database (): void {
      mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hnuek.mongodb.net/test?retryWrites=true&w=majority/grana-preta', {
        useNewUrlParser: true
      })
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
