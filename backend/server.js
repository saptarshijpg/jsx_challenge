const express = require( 'express' )
const cors = require( 'cors' )
const mongoose = require( 'mongoose' )
// const bp = require( 'body-parser' )

const exerciseRouter = require( './routes/exercises' )
const usersRouter = require( './routes/users' )

require( 'dotenv' ).config()

const app = express()
const port = process.env.PORT || 5000;
function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({nope: true});
    } else {
      next();
    }
  }
app.use( cors() )
app.use( express.json() )

const uri = process.env.ATLAS_URI;
mongoose.connect( uri, { useNewUrlParser: true, useCreateIndex: true } )
const connection = mongoose.connection;
connection.once( 'open', () =>
{
    console.log( "MongoDB Connection Established!" )
} )
app.get( '/api/aboutus', ( req, res ) =>
{
    res.send("Hello my name")
} )
// app.use( bp.urlencoded( { extended: true } ) )
app.use( '/exercises', exerciseRouter )
app.use( '/users', usersRouter )

app.listen( port, () =>
{
    console.log( `Server is running on port: ${port}` );
} )