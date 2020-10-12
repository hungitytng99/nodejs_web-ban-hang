class HomeController {
    //[GET] /news
    index(req, res, next) {
        return res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new HomeController();