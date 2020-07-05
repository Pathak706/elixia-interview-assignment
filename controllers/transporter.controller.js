const { Transporter }          = require('../models');
const { to, ReE, ReS }  = require('../services/util.service');


const create = async function(req, res){
    const body = req.body;

    if(!body.name){
        return ReE(res, 'Please enter a transporter name.');
    }else{
        let err, transporter;

        [err, transporter] = await to(Transporter.create(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new transporter.', transporter:transporter }, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    let err, transporter;
    [err, transporter] = await to(Transporter.findAll());

    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'All transporters fetched.', transporter:transporter }, 200); 
}
module.exports.get = get;

const getOne = async function(req, res){
    const params = req.params;

    if(!params.id) {
        return ReE(res, 'Please provide valid transporter id.');
    }else {
        try {
            let err, transporter;
        
            [err, transporter] = await to(Transporter.findById(params.id));
    
            if(err || transporter === null) return ReE(res, err, 422);
            return ReS(res, {message: `transporter fetched with ${params.id}.`, transporter:transporter.dataValues}, 200);
        } catch (error) {
            return ReE(res, 'No data found.', 400);   
        }
    }
}
module.exports.getOne = getOne;

const update = async function(req, res){
    const { body, params } = req;

    if(!params.id) {
        return ReE(res, 'Please provide valid transporter id.');
    }else {
        try {
            let err, transporter;

            [err, transporter] = await to(Transporter.update(body, { where: { id: params.id } }));
            if(err || transporter == 0) return ReE(res, err, 422);
            return ReS(res, {message: `transporter updated with ${params.id}.`, transporter:transporter}, 200);   
        } catch (error) {
            return ReE(res, 'No data found.', 400);   
        }
    }
}
module.exports.update = update;

const remove = async function(req, res){
    const params = req.params;

    if(!params.id) {
        return ReE(res, 'Please provide valid transporter id.');
    }else {
        try {
            let err, transporter;

            [err, transporter] = await to(Transporter.destroy({ where: { id : params.id }}));
            console.log(err, transporter);
            if(err || transporter === 0) return ReE(res, err, 422);
            return ReS(res, {message: `transporter with ${params.id} removed.`, transporter: transporter}, 200);
        } catch (error) {
            return ReE(res, 'No data found.', 400);  
        }
    }
}
module.exports.remove = remove;