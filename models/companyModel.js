module.exports = (sequelize, DataTypes) => {

    const Company = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latitudeY: {
            type: DataTypes.DECIMAL(9, 6),
            allowNull: false
        },
        longitudeX: {
            type: DataTypes.DECIMAL(9, 6),
            allowNull: false
        },
        accommodationType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyStars: {
            type: DataTypes.DOUBLE
        },
        companyImage: {
            type: DataTypes.STRING
        },
        lowestPrice: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        amenitiesId: {
            type: DataTypes.INTEGER
        },
        reviews: {
            type: DataTypes.STRING
        },
    }, {
        timestamps: false
    });
    return Company;
};