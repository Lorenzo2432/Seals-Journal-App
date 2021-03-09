const Profile = require('../models/Profile')

router.get('.proflie', (req, res) => {

    Profile.find()
    .then(profile => {
        res.json({
            confirmation: 'success',
        })
    })
    .catch(err => {

    })

    res.json({
        confirmation: 'success',
        data: 'this is the profile endpoint!'
    })
})

module.exports = router