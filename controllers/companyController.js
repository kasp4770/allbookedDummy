const db = require('../config/database');



//IKKE FÆRDIG: Skal have lavet den rette JSON struktur
exports.list = (req, res) => {

    db.companies.findAll({
        include: [{ model: db.amenities, raw: true }]
    }).then(companies => {

        obj = companies.forEach(element => {
            
        });

    })




    /*.then( companies => {
        //companies.Amenities.map()
        return companies.map( com => com.Amenities);

        
    })*/.then(result => {
        res.json(result);
    })


}



