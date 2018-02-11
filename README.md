# Fake Product API (Admin,Users)
#npm "fake-eshop-yk" REQUIRED

For use fake products

var fakeProducts = require('fake-products-sj');  // required file to  this npm 
 
fakeProducts.addProduct({name:'Iphone 3G', amount: 2}); //add product ({name:x,amount:y}) --> JSON form
fakeProducts.getProducts(); //show all product
fakeProducts.deleteProducts(1); //delete product at id=1
fakeProducts.editProducts(1, 'Iphone X plus', 100);   //edit product at id 1 and change his name and his qty to iPhone X plus - 100 qty
fakeProducts.buyProduct(1, 'my_id'); //Buy product at id=1
fakeProducts.getHistorySell(); //show all purchases
