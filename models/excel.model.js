"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define(
    "Excel",
    {
      delivery_number: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      shipment_number: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
      },
      source_code: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      destination_code: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      vehicle_number: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        validate: {
          is: /(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})/g
        }
      },
      transporter_code: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        get: function () {
          return ExcelDateToJSDate(dataValues.start_date);
        },
      },
      end_date: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        get: function () {
          return ExcelDateToJSDate(dataValues.start_date);
        },
      },
      driver_name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 50]
        }
      },
      driver_phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/gm
        }
      },
    },
    {
      // TODO: date validation 
      
      validate: {
        checkStartEndDate() {
          if(this.end_date < this.start_date) {
            throw new Error("Invalid End Date");
          }
        }
      },
      
      hooks: {
        beforeValidate: (rows, option) => {
          rows.forEach(row => {
            const { dataValues } = row;
            console.log(dataValues);
            if(dataValues.end_date > dataValues.start_date) {
              console.log(dataValues.start_date, ExcelDateToJSDate(dataValues.start_date));
              dataValues.start_date = ExcelDateToJSDate(dataValues.start_date);
              dataValues.end_date   = ExcelDateToJSDate(dataValues.end_date);
            }
          });
        },
      },
    }
  );

  return Model;
};

// convert excel date into date formate
function ExcelDateToJSDate(serial) {
  var utc_days = Math.floor(serial - 25569);
  var utc_value = utc_days * 86400;
  var date_info = new Date(utc_value * 1000);

  var fractional_day = serial - Math.floor(serial) + 0.0000001;

  var total_seconds = Math.floor(86400 * fractional_day);

  var seconds = total_seconds % 60;

  total_seconds -= seconds;

  var hours = Math.floor(total_seconds / (60 * 60));
  var minutes = Math.floor(total_seconds / 60) % 60;

  return new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds
  );
}
