import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET,
      callbackURL : '/auth/google/callback'
    },
    async ( accessToken, refreshToken, profile, done) => {
      // check users from db
      return done(null,profile);
    }
  )
);

passport.serializeUser((user, done) => done(null,user));
passport.deserializeUser((user,done) => done(null,user));