const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // Pass reference to the middleware function
  // for it to only run on the /api/stripe route.
  // These route handlers take x arguments (middlewares).
  // Eventually one argument has to actually process the request (send a response)
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // req.user provided automatically by Passport
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
