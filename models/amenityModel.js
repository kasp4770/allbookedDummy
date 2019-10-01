module.exports = (sequelize, DataTypes) => {

    const Amenity = sequelize.define('Amenity', {
        /*id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },*/
        name: {
            type: DataTypes.STRING
        },
    }, {
        timestamps: false
    });
    return Amenity;
};