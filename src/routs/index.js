import express from "express";
import cors from "cors";
import Product from "../modeles/product.js";
import crypto from 'crypto';
import User from '../modeles/user.js';

var router = express.Router();
router.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`ok + ${id}`);
});

router.use(cors());

router.get("/product", (req, res) => {
    const id = req.params.id;
    // res.send(`ok + ${id}`);
    Product.find({}).then((data) => {
        res.json(data);
    })
});

router.post('/product', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    const price = req.body.price
    // const Product = mongoose.model('Product', { name: String });

    const product = new Product({ name, price });
    product.save()
        .then(() => {
            console.log('Product saved successfully');
            res.send('Product saved successfully');
        })
        .catch(error => {
            console.error('Error saving product:', error);
            res.status(500).send('Error saving product');
        });

})


router.delete("/product/:id", (req, res) => {
    const productId = req.params.id;
    Product.findByIdAndDelete(productId)
        .then(() => {
            console.log('Product deleted successfully');
            res.send('Product deleted successfully');
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            res.status(500).send('Error deleting product');
        });
});

router.get("/users", (req, res) => {
    User.find({}).then((data) => {
        res.json(data);
    })
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Проверяем, существует ли пользователь с таким же именем
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        // Генерируем соль
        const salt = crypto.randomBytes(16).toString('hex');

        // Хэшируем пароль
        crypto.pbkdf2(password, salt, 310000, 32, 'sha256', async (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: 'Error hashing password.' });
            }

            // Создаем нового пользователя
            const newUser = new User({
                username,
                hashed_password: hashedPassword.toString('hex'),
                salt
            });

            // Сохраняем пользователя в базе данных
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully.' });
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});


export default router;
