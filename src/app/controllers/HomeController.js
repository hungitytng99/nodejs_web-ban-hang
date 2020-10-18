class HomeController {
    //[GET] /news
    index(req, res, next) {
        return res.render('home');
    }

    show(req, res, next) {
        console.log("run");
        res.render('product/product-detail');
    }
}

module.exports = new HomeController();