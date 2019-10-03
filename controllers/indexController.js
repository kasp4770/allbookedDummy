const geolib = require('geolib');
var distance = geolib.getDistance(
    { latitude: 52.759684, longitude: 11.457875 },
    { latitude: 52.551586, longitude: 11.555555 }
);

var object = [
    {
        name: "Test",
        type: "Hotel",
        rating: "5.0",
        amenities: ["Føntørrer", "tekøkken", "pool", "træningsrum", "pengeskab"],
        reviews: ["haha, til grin", "Shit hotel, fuck det er grimt", "JEG ELSKER DET!"],
        price: "$$$$",
        imagePath: "/images/testHotel.png"
    },
    {
        name: "TestTest",
        type: "Camping",
        rating: "1.5",
        amenities: ["Føntørrer", "tekøkken", "pool", "træningsrum", "pengeskab"],
        reviews: ["haha, til grin", "Shit hotel, fuck det er grimt", "JEG ELSKER DET!"],
        price: "$$",
        imagePath: "/images/testHotel.png",
        geolibTest: distance
    },
]




exports.index = (req, res) => {
    res.render('index', {title: 'indexView', headline: "Fun with Handlebars", obj: object});
}

exports.getSearch = (req, res) => {

    var newX = req.params.X - 0.1;
    var newY = req.params.Y - 0.1;

    console.log(req.params.Y + " " + req.params.X);
    console.log(newY + " " + newX);
}

