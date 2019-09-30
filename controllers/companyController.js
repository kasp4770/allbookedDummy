const db = require('../config/database');

exports.addAmenity = (req, res) => {
    //const newAmenity = req.body;
    db.amenities.create({
        
        name: "Bar"        
        /*name: newAmenity.name,
        companyId: newAmenity.companyId*/
    }).then(post => {
        res.json(post);
    })
}

