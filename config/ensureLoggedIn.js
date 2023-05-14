module.exports = function(req, res, next) {
    // Check to see if there's an user key in the req {}
    // if req.user returns null set 401 (Unauthorized)
    if (!req.user) return res.status(401).json('Unauthorized!!');
    next();
}