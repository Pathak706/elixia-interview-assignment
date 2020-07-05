const { Excel } = require("../models");
const { to, ReE, ReS } = require("../services/util.service");
var XLSX = require('xlsx');
var df =  require('dateformat');

global.replacements = {
  "Delivery Number"   : "delivery_number",
  "Shipment Number"   : "shipment_number",
  "Source Code"       : "source_code",
  "Destination Code"  : "destination_code",
  "Vehicle Number"    : "vehicle_number",
  "Transporter Code"  : "transporter_code",
  "Start Date"        : "start_date",
  "End Date"          : "end_date",
  "Driver Name"       : "driver_name",
  "Driver Phone"      : "driver_phone",
}

const importExcel = async function (req, res) {
  try {
    var workbook = XLSX.readFile(`./upload/${req.file.filename}`);
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(async function(y) {
      var worksheet = workbook.Sheets[y];
      var headers = {};
      var data = [];
      for(z in worksheet) {
          if(z[0] === '!') continue;
          //parse out the column, row, and value
          var tt = 0;
          for (var i = 0; i < z.length; i++) {
              if (!isNaN(z[i])) {
                  tt = i;
                  break;
              }
          };
          var col = z.substring(0,tt);
          var row = parseInt(z.substring(tt));
          var value = worksheet[z].v;
  
          //store header names
          if(row == 1 && value) {
              headers[col] = value;
              continue;
          }
  
          if(!data[row]) data[row]={};
          data[row][headers[col]] = value;
      }
      //drop those first two rows which are empty
      data.shift();
      data.shift();
      const modelData = changeKeyObjects(data, replacements);
      
      let err, excel;

      [err, excel] = await to(Excel.bulkCreate(modelData, { updateOnDuplicate: [ "delivery_number" ] }));
      if(err) return ReE(res, err, 422);
      return ReS(res, { message: "excel bulk import done.", excel:modelData }, 201);
    });
  } catch (err) {
    return ReE(res, "Unknown Error Occured.", 500)
  }
};
module.exports.importExcel = importExcel;

const changeKeyObjects = (arr, replaceKeys) => {
  return arr.map(item => {
    const newItem = {};
    Object.keys(item).forEach(key => {
      newItem[replaceKeys[key]] = item[[key]];
    });
    return newItem;
  });
};