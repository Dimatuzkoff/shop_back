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


export const authGuard = (req, res, next) => {
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