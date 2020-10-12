class HomeController {
    //[GET] /news
    index(req, res, next) {
        console.log("HomeCOntroller running ...");
        return res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new HomeController();