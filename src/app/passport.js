import passport from 'passport';
import User from '../modeles/user.js';
import { Strategy as LocalStrategy } from 'passport-local';
import crypto from 'crypto';
function passportInit(app) {
    app.use(passport.initialize());
    app.use(passport.session());


    passport.use('local-login', new LocalStrategy((username, password, done) => {
        User.findOne({ username: username }).exec() // Уберите обратный вызов здесь
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect username or password.' });
                }
                crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
                    if (err) { return done(err); }
                    if (!crypto.timingSafeEqual(Buffer.from(user.hashed_password, 'hex'), hashedPassword)) {
                        return done(null, false, { message: 'Incorrect username or password.' });
                    }
                    return done(null, user);
                });
            })
            .catch(err => done(err));
    }));









    // passport.use(new LocalStrategy((username, password, done) => {
    //     User.findOne({ username: username }, (err, user) => {
    //         if (err) { return done(err); }
    //         if (!user) { return done(null, false, { message: 'Incorrect username or password.' }); }

    //         crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
    //             if (err) { return done(err); }
    //             if (!crypto.timingSafeEqual(Buffer.from(user.hashed_password, 'hex'), hashedPassword)) {
    //                 return done(null, false, { message: 'Incorrect username or password.' });
    //             }
    //             return done(null, user);
    //         });
    //     });
    // }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        // Найдите пользователя в вашей базе данных по id
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

}

export default passportInit;