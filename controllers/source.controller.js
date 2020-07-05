const { Source }        = require('../models');
const { to, ReE, ReS }  = require('../services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.name){
        return ReE(res, 'Please enter a source name.');
    }else{
        let err, source;

        [err, source] = await to(Source.create(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new source.', source:source }, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    let err, source;
    [err, source] = await to(Source.findAll());

    if(err) return ReE(res, err, 422);
    return ReS(res, {message:'All sources fetched.', source:source }, 200); 
}
module.exports.get = get;

const getOne = async function(req, res){
    const params = req.params;

    if(!params.id) {
        return ReE(res, 'Please provide valid source id.');
    }else {
        try {
            let err, source;
        
            [err, source] = await to(Source.findById(params.id));
    
            if(err || source === null) return ReE(res, err, 422);
            return ReS(res, {message: `Source fetched with ${params.id}.`, source:source.dataValues}, 200);
        } catch (error) {
            return ReE(res, 'No data found.', 400);   
        }
    }
}
module.exports.getOne = getOne;

const update = async function(req, res){
    const { body, params } = req;

    if(!params.id) {
        return ReE(res, 'Please provide valid source id.');
    }else {
        try {
            let err, source;

            [err, source] = await to(Source.update(body, { where: { id: params.id } }));
            if(err || source == 0) return ReE(res, err, 422);
            return ReS(res, {message: `Source updated with ${params.id}.`, source:source}, 200);   
        } catch (error) {
            return ReE(res, 'No data found.', 400);   
        }
    }
}
module.exports.update = update;

const remove = async function(req, res){
    const params = req.params;

    if(!params.id) {
        return ReE(res, 'Please provide valid source id.');
    }else {
        try {
            let err, source;

            [err, source] = await to(Source.destroy({ where: { id : params.id }}));
            console.log(err, source);
            if(err || source === 0) return ReE(res, err, 422);
            return ReS(res, {message: `Source with ${params.id} removed.`, source: source}, 200);
        } catch (error) {
            return ReE(res, 'No data found.', 400);  
        }
    }
}
module.exports.remove = remove;