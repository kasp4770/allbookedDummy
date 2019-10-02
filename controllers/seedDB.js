const db = require('../config/database');

var companyData = [
    {
        name: "Alleshave Bed and Breakfast",
        address: "Alleshavevej 42",
        zip: "4593",
        city: "Eskebjerg",
        latitudeY: 55.71961427,
        longitudeX: 11.26884163,
        accommodationType: "Bed & Breakfast",
        companyStars: 2.0,
        lowestPrice: 199.95,
        rating: 3.2,
        noOfReviews: 6
    },
    {
        name: "Kalundborg Camping",
        address: "Saltbækvej 88",
        zip: "4400",
        city: "Kalundborg",
        latitudeY: 55.72893852,
        longitudeX: 11.11242532,
        accommodationType: "Camping",
        companyStars: 2.0,
        lowestPrice: 89.00,
        rating: 3.7,
        noOfReviews: 9
    },
    {
        name: "Zleep Hotel Kalundborg",
        address: "Klintedalsvej 60",
        zip: "4400",
        city: "Kalundborg",
        latitudeY: 55.70272647,
        longitudeX: 11.01817068,
        accommodationType: "Hotel",
        companyStars: 3.0,
        lowestPrice: 449.95,
        rating: 0.0,
        noOfReviews: 0
    },
    {
        name: "Holiday home Slagelse",
        address: "Mullerup Strandvej 13",
        zip: "4200",
        city: "Slagelse",
        latitudeY: 55.48784322,
        longitudeX: 11.19566986,
        accommodationType: "Hotel",
        companyStars: 3.0,
        lowestPrice: 120.00,
        rating: 3.1,
        noOfReviews: 15
    },
    {
        name: "Comwell Sorø",
        address: "Abildvej 100",
        zip: "4180",
        city: "Sorø",
        latitudeY: 55.45099403,
        longitudeX: 11.54576006,
        accommodationType: "Hotel",
        companyStars: 3.0,
        lowestPrice: 399.00,
        rating: 5.0,
        noOfReviews: 112
    },
    {
        name: "Hørhaven B&B",
        address: "Hørhavevej 1",
        zip: "4250",
        city: "Fuglebjerg",
        latitudeY: 55.35106825,
        longitudeX: 11.58766797,
        accommodationType: "Bed & Breakfast",
        companyStars: 3.0,
        lowestPrice: 180.00,
        rating: 4.5,
        noOfReviews: 51
    },
    {
        name: "Sorø Camping & Cottages",
        address: "Udbyhøjvej 10",
        zip: "4180",
        city: "Sorø",
        latitudeY: 55.4461083688888,
        longitudeX: 11.54583418,
        accommodationType: "Camping",
        companyStars: 2.0,
        lowestPrice: 20.00,
        rating: 1.5,
        noOfReviews: 230
    },
    {
        name: "Fredens Hus",
        address: "Krøjerup Overdrev 16",
        zip: "4180",
        city: "Sorø",
        latitudeY: 55.44909192,
        longitudeX: 11.5107157,
        accommodationType: "Bed & Breakfast",
        companyStars: 3.0,
        lowestPrice: 250.00,
        rating: 3.8,
        noOfReviews: 56
    },
    {
        name: "Hotel Kirstine",
        address: "Købmagergade 20",
        zip: "4700",
        city: "Næstved",
        latitudeY: 55.22873944,
        longitudeX: 11.7591279,
        accommodationType: "Hotel",
        companyStars: 4.0,
        lowestPrice: 699.95,
        rating: 5.0,
        noOfReviews: 542
    },
    {
        name: "Engly Bed & Breakfast",
        address: "Gadevang 23",
        zip: "4700",
        city: "Næstved",
        latitudeY: 55.15592281,
        longitudeX: 11.81358091,
        accommodationType: "Bed & Breakfast",
        companyStars: 2.0,
        lowestPrice: 140.00,
        rating: 3.8,
        noOfReviews: 28
    },
    {
        name: "De Hvide Svaner Camping",
        address: "Karrebækvej 741",
        zip: "4736",
        city: "Karrebæksminde",
        latitudeY: 55.20144881,
        longitudeX: 11.6650423,
        accommodationType: "Camping",
        companyStars: 2.0,
        lowestPrice: 80.00,
        rating: 2.5,
        noOfReviews: 2
    },
    {
        name: "Feddet Camping & Cottages",
        address: "Feddet 12",
        zip: "4640",
        city: "Faxe",
        latitudeY: 55.17446637,
        longitudeX: 12.10119571,
        accommodationType: "Camping",
        companyStars: 2.0,
        lowestPrice: 10.00,
        rating: 4.0,
        noOfReviews: 46
    },
    {
        name: "Hotel Sørup Herregaard",
        address: "Sørupvej 26",
        zip: "4100",
        city: "Ringsted",
        latitudeY: 55.38616087,
        longitudeX: 11.79435253,
        accommodationType: "Hotel",
        companyStars: 4.0,
        lowestPrice: 600.00,
        rating: 5.0,
        noOfReviews: 532
    },
    {
        name: "Scandic Ringsted",
        address: "Nørretorv 57",
        zip: "4100",
        city: "Ringsted",
        latitudeY: 55.45062788,
        longitudeX: 11.78711738,
        accommodationType: "Hotel",
        companyStars: 3.0,
        lowestPrice: 189.00,
        rating: 3.3,
        noOfReviews: 56
    },
    {
        name: "Hyggestuen B&B gallerí",
        address: "Holbækvej 103",
        zip: "4450",
        city: "Jyderup",
        latitudeY: 55.66439786,
        longitudeX: 11.41507059,
        accommodationType: "Bed & Breakfast",
        companyStars: 2.0,
        lowestPrice: 59.00,
        rating: 2.0,
        noOfReviews: 78
    },
    {
        name: "Bromølle Kro",
        address: "Slagelsevej 78",
        zip: "4450",
        city: "Jyderup",
        latitudeY: 55.61228112,
        longitudeX: 11.38704375,
        accommodationType: "Kro",
        companyStars: 2.0,
        lowestPrice: 100.00,
        rating: 2.6,
        noOfReviews: 15
    },
    {
        name: "Rosengården",
        address: "Kirkemosevej 13",
        zip: "4591",
        city: "Føllenslev",
        latitudeY: 55.72337401,
        longitudeX: 11.37330803,
        accommodationType: "Kro",
        companyStars: 2.0,
        lowestPrice: 80.00,
        rating: 1.9,
        noOfReviews: 2
    },
    {
        name: "Højby Kro og Hotel",
        address: "Højby Hovedgade 28",
        zip: "4573",
        city: "Højby",
        latitudeY: 55.9117284,
        longitudeX: 11.6046616,
        accommodationType: "Hotel",
        companyStars: 4.0,
        lowestPrice: 450.00,
        rating: 5.0,
        noOfReviews: 59
    },
    {
        name: "Skortskær B&B",
        address: "Skortskær 2",
        zip: "4591",
        city: "Havnsø",
        latitudeY: 55.74638265,
        longitudeX: 11.32501523,
        accommodationType: "Bed & Breakfast",
        companyStars: 2.0,
        lowestPrice: 100.00,
        rating: 3.4,
        noOfReviews: 20
    },
    {
        name: "HotelPandekagehuset",
        address: "Algade 37",
        zip: "4500",
        city: "Nykøbing Sjælland",
        latitudeY: 55.92291908,
        longitudeX: 11.67142551,
        accommodationType: "Hotel",
        companyStars: 3.0,
        lowestPrice: 210.00,
        rating: 2.4,
        noOfReviews: 14
    }];
var amenityData = [
    {
        name: "Pool udendørs"
    },
    {
        name: "Pool indendørs"
    },
    {
        name: "Vandrutsjebane"
    },
    {
        name: "Strandudlejning"
    },
    {
        name: "Poolbar"
    },
    {
        name: "Nudist Strand"
    },
    {
        name: "Badestrand"
    },
    {
        name: "Transportudlejning"
    },
    {
        name: "Morgenbuffet"
    },
    {
        name: "Frokostbuffet"
    },
    {
        name: "All Inclusive"
    },
    {
        name: "Fitness"
    },
    {
        name: "Minigolf"
    },
    {
        name: "Golf"
    },
    {
        name: "Tennis"
    },
    {
        name: "Legeplads 0+"
    },
    {
        name: "Legeplads 6+"
    },
    { 
        name: "Legeplads 12+"
    },
    {
        name: "Legeplads"
    },
    {
        name: "Vandreruter"
    },
    {
        name: "Skov"
    },
    { 
        name: "Trænings coach"
    },
    {
        name: "Hold træning"
    },
    {
        name: "Scene"
    },
    {
        name: "Underholdning"
    },
    {
        name: "Familievenligt"
    },
    {
        name: "Bar"
    }
];

exports.seed = (req, res) => {
    
    db.amenities.bulkCreate(amenityData);
    
    db.companies.bulkCreate(companyData)
        .then(company => {
            company[0].addAmenities([5, 6, 16, 20]);
            company[1].addAmenities([1, 6, 20, 22]);
            company[2].addAmenities([2, 4, 5, 9, 11]);
            company[3].addAmenities([2, 5, 11, 26]);
            company[4].addAmenities([4, 7, 13, 18]);
            company[5].addAmenities([5, 9, 14, 15]);
            company[6].addAmenities([7, 13, 16, 17]);
            company[7].addAmenities([1, 2, 3, 4, 6, 9, 10, 11]);
            company[8].addAmenities([5, 6, 16, 20]);
            company[9].addAmenities([1, 6, 20, 22]);
            company[10].addAmenities([2, 4, 5, 9, 11]);
            company[11].addAmenities([2, 5, 11, 26]);
            company[12].addAmenities([4, 7, 13, 18]);
            company[13].addAmenities([5, 9, 14, 15]);
            company[14].addAmenities([7, 13, 16, 17]);
            company[15].addAmenities([1, 2, 3, 4, 6, 9, 10, 11]);
            company[16].addAmenities([2, 4, 5, 9, 11]);
            company[17].addAmenities([2, 5, 11, 26]);
            company[18].addAmenities([4, 7, 13, 18]);
            company[19].addAmenities([2, 4, 5, 9, 11]);
        })
}
