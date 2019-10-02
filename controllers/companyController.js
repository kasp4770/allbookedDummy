const db = require('../config/database');

exports.list = (req, res) => {
    db.companies.findAll({
        include: [{ model: db.amenities, raw: true }]
    })
    //Omstrukturerer JSON således at amenity-array'et består af strings istedet for objekter
    .then(companies => {
        
        var newCompanyList = [];

        for(let i = 0; i < companies.length; i++){

            var newAmenityList = [];

            for(let j = 0; j < companies[i].Amenities.length; j++){
                newAmenityList.push(companies[i].Amenities[j].name);
            }
            var newCompanyObj = {
                id: companies[i].id,
                name: companies[i].name,
                address: companies[i].address,
                zip: companies[i].zip,
                city: companies[i].city,
                latitudeY: companies[i].latitudeY,
                longitudeX: companies[i].longitudeX,
                accommodationType: companies[i].accommodationType,
                companyStars: companies[i].companyStars,
                companyImage: companies[i].companyImage,
                lowestPrice: companies[i].lowestPrice,
                rating: companies[i].rating,
                noOfReviews: companies[i].noOfReviews,
                amenities: newAmenityList
            };

            newCompanyList.push(newCompanyObj)
        }
        return newCompanyList;
    })
    .then(result => {
        res.json(result);
    })
}



