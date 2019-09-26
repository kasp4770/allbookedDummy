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
        imagePath: "/images/testHotel.png"
    },
]




exports.index = (req, res) => {
    res.json(object);
}

exports.getAll = (req, res) => {
}

