module.exports = (sequelize, DataTypes) => {

    const Amenity = sequelize.define('Amenity', {
        name: {
            primaryKey: true,
            type: DataTypes.STRING
        },
        companyId: {
            type: DataTypes.INTEGER
        },
    }, {
        timestamps: false
    });
    return Amenity;
};