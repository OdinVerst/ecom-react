const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe');

const app = express();
const PORT = process.env.PORT || 5000;
const Stripe = stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/' , 'index.html'))
    });
}

app.post('/payments', async (req, res) => {
    try {
        const charge = await Stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: req.body.card.id,
            source: req.body.id,
        });
        res.status(200).json({ success: charge })
    } catch (e) {
        res.status(500).json({ error: e })
    }
})

app.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log(`Example app listening at http://localhost:${PORT}`)
});