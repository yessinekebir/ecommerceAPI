var express = require('express');
var router = express.Router();
var fakeProducts = require('fake-products-sj');
var validTokens = ['Pippo','Caio','Sempronio','Ciccio'];

var authUser = function(req, res, next) {
    if (validTokens.includes(req.query.token)){
        return next();
    }
    res.status(401).json({message:'Invalid token'});
}

router.get('/products', function(req, res) {
    res.json(fakeProducts.getProducts());
})

router.post('/products', authUser, function(req, res) {
    res.json(fakeProducts.buyProduct(req.body.id, req.query.token));
})
module.exports = router;
