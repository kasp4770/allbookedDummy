const db = require('../config/database');
const geolib = require('geolib');

exports.list = (req, res) => {
    db.companies.findAll({
        include: [{ model: db.amenities, raw: true }]
    }).then(companies => {
        res.json(companyListToPreferedStructure(companies));
    })
}

exports.findByLocation = (req, res) => {

    const y = req.params.Y;
    const x = req.params.X;
    //Mangler optional 'radius' i URL'en:
    //const radius = req.params.radius;

    db.companies.findAll({
        include: [{model: db.amenities, raw: true }]
    }).then(companies => {
        res.json(companiesWithinRadius(companies, x, y, 30000));
        
        //TEST
        //res.json(companiesWithinRadius(companies, 11.215672, 55.504689, 5000))
    })
}

//Omstrukturerer JSON således at amenity-array'et består af strings istedet for objekter
function companyListToPreferedStructure(list) {
    var newCompanyList = [];

    for (let i = 0; i < list.length; i++) {

        var newAmenityList = [];

        for (let j = 0; j < list[i].Amenities.length; j++) {
            newAmenityList.push(list[i].Amenities[j].name);
        }
        var newCompanyObj = {
            id: list[i].id,
            name: list[i].name,
            address: list[i].address,
            zip: list[i].zip,
            city: list[i].city,
            latitudeY: list[i].latitudeY,
            longitudeX: list[i].longitudeX,
            accommodationType: list[i].accommodationType,
            companyStars: list[i].companyStars,
            companyImage: list[i].companyImage,
            lowestPrice: list[i].lowestPrice,
            rating: list[i].rating,
            noOfReviews: list[i].noOfReviews,
            amenities: newAmenityList
        };

        newCompanyList.push(newCompanyObj)
    }
    return newCompanyList;
}

function companiesWithinRadius(list, geoX, geoY, radiusDistance){
    if(radiusDistance == undefined){
        radiusDistance = 30000;
    }

    var newCompanyList = [];
    for(let i = 0; i < list.length; i ++){
        if(geolib.isPointWithinRadius(
            {latitude: list[i].latitudeY, longitude: list[i].longitudeX},
            {latitude: geoY, longitude: geoX},
            radiusDistance) == true){
            newCompanyList.push(list[i])
        }
    }
    return companyListToPreferedStructure(newCompanyList);
}

