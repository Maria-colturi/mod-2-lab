module.exports.check = (req, res, next) => {
    if(req.session.userId) {
        next();
    }
    else {
        res.redirect("/login");
    }
}