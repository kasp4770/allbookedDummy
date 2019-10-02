module.exports = (sequelize, DataTypes) => {

    const Company = sequelize.define('Company', {
        /*id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
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
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        longitudeX: {
            type: DataTypes.DOUBLE,
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
        noOfReviews: {
            type: DataTypes.INTEGER
        },
    }, {
        timestamps: false
    });
    return Company;
};