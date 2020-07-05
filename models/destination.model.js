"use strict";
module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define("Destination", {
        name: { type: DataTypes.STRING, required: true, allowNull: false },
    });
    return Model;
}