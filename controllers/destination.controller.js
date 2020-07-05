const { Destination }          = require('../models');
const { to, ReE, ReS }  = require('../services/util.service');


const create = async function(req, res){
    const body = req.body;

    if(!body.name){
        return ReE(res, 'Please enter a destination name.');
    }else{
        let err, destination;

        [err, destination] = await to(Destination.create(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new destination.', destination:destination }, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    let err, destination;
    [err, destination] = await to(Destination.findAll());

    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'All destinations fetched.', destination:destination }, 200); 
}
module.exports.get = get;

const getOne = async function(req, res){
    const params = req.params;

    if(!params.id) {
        return ReE(res, 'Please provide valid destination id.');
    }else {
        try {
            let err, destination;
        
            [err, destination] = await to(Destination.findById(params.id));
    
            if(err || destination === null) return ReE(res, err, 422);
            return ReS(res, {message: `destination fetched with ${params.id}.`, destination:destination.dataValues}, 200);
        } catch (error) {
            return ReE(res, 'No data found.', 400);   
        }
    }
}
module.exports.getOne = getOne;

const update = async function(req, res){
    const { body, params } = req;

    if(!params.id) {
        return ReE(res, 'Please provide valid destination id.');
    }else {
        try {
            let err, destination;

            [err, destination] = await to(Destination.update(body, { where: { id: params.id } }));
            if(err || destination == 0) return ReE(res, err, 422);
            return ReS(res, {message: `destination updated with ${params.id}.`, destination:destination}, 200);   
        } catch (error) {
            return ReE(res, 'No data found.', 400);   
        }
    }
}
module.exports.update = update;

const remove = async function(req, res){
    const params = req.params;

    if(!params.id) {
        return ReE(res, 'Please provide valid destination id.');
    }else {
        try {
            let err, destination;

            [err, destination] = await to(Destination.destroy({ where: { id : params.id }}));
            console.log(err, destination);
            if(err || destination === 0) return ReE(res, err, 422);
            return ReS(res, {message: `destination with ${params.id} removed.`, destination: destination}, 200);
        } catch (error) {
            return ReE(res, 'No data found.', 400);  
        }
    }
}
module.exports.remove = remove;