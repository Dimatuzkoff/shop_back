import jwt from 'jsonwebtoken';
import 'dotenv/config'


export const routeWrapper = (routeHandler) => {
    return async (req, res, next) => {
        try {
            await routeHandler(req, res, next);
        } catch (error) {
            console.error(error);
            res.status(500).send({ ok: false, message: "Server error", error });
        }
    };
};


// export const verifyToken = (req, res, next) => {
//     const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
//     console.log('token: ', token);
//     if (!token) {
//         return res.status(403).json({ message: 'Токен не предоставлен' });
//     }

//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Неверный токен' });
//         }
//         req.user = decoded;

//         next();
//     });
// };

export const authGuard = (req, res, next) => {
    console.log(req.ip);
    if (!req.user) {
        return res.status(403).json({ message: 'Токен не предоставлен' });
    }
    next();
};

export const adminGuard = (req, res, next) => {
    if (!req.user) {
        return res.status(403).json({ message: 'Токен не предоставлен' });
    }
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Токен не предоставлен' });
    }
    next();
};