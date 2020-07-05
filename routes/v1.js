const express 			         = require('express');
const router 			           = express.Router();

const UserController 	       = require('../controllers/user.controller');
const SourceController       = require('../controllers/source.controller');
const DestinationController  = require('../controllers/destination.controller');
const TransporterController  = require('../controllers/transporter.controller');
const ExcelController        = require('../controllers/excel.controller');


const passport      	       = require('passport');
const path                   = require('path');

var multer = require("multer");
var upload = multer({ dest: "upload/" });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.post("/excel-upload", passport.authenticate('jwt', {session:false}), upload.single("recfile"), ExcelController.importExcel);

require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});


router.post(    '/users',           UserController.create);                                                           // C
router.get(     '/users',           passport.authenticate('jwt', {session:false}), UserController.get);               // R
router.put(     '/users',           passport.authenticate('jwt', {session:false}), UserController.update);            // U
router.delete(  '/users',           passport.authenticate('jwt', {session:false}), UserController.remove);            // D
router.post(    '/users/login',     UserController.login);

router.post(    '/sources',         passport.authenticate('jwt', {session:false}), SourceController.create);          // C
router.get(     '/sources',         passport.authenticate('jwt', {session:false}), SourceController.get);             // R
router.get(     '/sources/:id',     passport.authenticate('jwt', {session:false}), SourceController.getOne);          // R
router.put(     '/sources/:id',     passport.authenticate('jwt', {session:false}), SourceController.update);          // U
router.delete(  '/sources/:id',     passport.authenticate('jwt', {session:false}), SourceController.remove);          // D


router.post(    '/destinations',    passport.authenticate('jwt', {session:false}), DestinationController.create);     // C
router.get(     '/destinations',    passport.authenticate('jwt', {session:false}), DestinationController.get);        // R
router.get(     '/destinations/:id',passport.authenticate('jwt', {session:false}), DestinationController.getOne);     // R
router.put(     '/destinations/:id',passport.authenticate('jwt', {session:false}), DestinationController.update);     // U
router.delete(  '/destinations/:id',passport.authenticate('jwt', {session:false}), DestinationController.remove);     // D



router.post(    '/transporters',    passport.authenticate('jwt', {session:false}), TransporterController.create);     // C
router.get(     '/transporters',    passport.authenticate('jwt', {session:false}), TransporterController.get);        // R
router.get(     '/transporters/:id',passport.authenticate('jwt', {session:false}), TransporterController.getOne);     // R
router.put(     '/transporters/:id',passport.authenticate('jwt', {session:false}), TransporterController.update);     // U
router.delete(  '/transporters/:id',passport.authenticate('jwt', {session:false}), TransporterController.remove);     // D

//********* API DOCUMENTATION **********
// need to update as the json used there is not accroding to our api 
// router.use('/docs/api.json',            express.static(path.join(__dirname, '/../public/v1/documentation/api.json')));
// router.use('/docs',                     express.static(path.join(__dirname, '/../public/v1/documentation/dist')));
module.exports = router;
