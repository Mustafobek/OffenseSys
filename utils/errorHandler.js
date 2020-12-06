module.exports = async (res, error) => {
    res.status(500).render('error', {
        message: error.message ? error.message : error
    })
}