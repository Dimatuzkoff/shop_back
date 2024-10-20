import passport from 'passport';
import User from '../modeles/user.js';
import { Strategy as LocalStrategy } from 'passport-local';
import crypto from 'crypto';
import { log } from 'console';

function passportInit(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('local-login', new LocalStrategy({
        usernameField: 'phone', // Заменяем 'username' на 'phone'
        passwordField: 'password'
    }, (phone, password, done) => {
        console.log("PASSPORT", phone, password);
        User.findOne({ phone }).exec()
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect phone or password.' });
                }
                crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
                    if (err) { return done(err); }
                    if (!crypto.timingSafeEqual(Buffer.from(user.hashed_password, 'hex'), hashedPassword)) {
                        return done(null, false, { message: 'Incorrect phone or password.' });
                    }
                    return done(null, user);
                });
            })
            .catch(err => done(err));
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id).exec(); // Изменено на использование exec()
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
}

export default passportInit;
