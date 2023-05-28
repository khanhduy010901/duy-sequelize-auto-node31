import { errorCode, successCode } from '../config/Response.js';
// import Food from '../models/food.js';
import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';

const models = initModels(sequelize);

const getUser = (req, res) => {

    res.send("get User");

}

const createUser = (req, res) => {

    res.send("create User");

}

const updateUser = (req, res) => {

    res.send("update User");

}

const removeUser = (req, res) => {

    res.send("remove User");

}


//xử lí like nhà hàng
const createUserLike = async (req, res) => {
    try {
        let { user_id, res_id, date_like} = req.body;
        let model = { user_id, res_id, date_like};

        await models.like_res.create(model);

        // res.status(200).send("Thêm thành công");
        successCode(res, model, "Thêm thành công");

    } catch(err){
        // res.status(500).send("Lỗi BE");
        errorCode(res, `Lỗi BE: ${err}`);
       
    }
}

//xử lí rate nhà hàng
const createUserRate = async (req, res) => {
    try {
        let { user_id, res_id, date_res, amount} = req.body;
        let model = { user_id, res_id, date_res, amount};

        await models.rate_res.create(model);

        // res.status(200).send("Thêm thành công");
        successCode(res, model, "Thêm thành công");

    } catch(err){
        // res.status(500).send("Lỗi BE");
        errorCode(res, `Lỗi BE: ${err}`);
       
    }
}


//thêm order
const createUserOder = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id} = req.body;
        let model = { user_id, food_id, amount, code, arr_sub_id};

        await models.order.create(model);

        // res.status(200).send("Thêm thành công");
        successCode(res, model, "Thêm thành công");

    } catch(err){
        // res.status(500).send("Lỗi BE");
        errorCode(res, `Lỗi BE: ${err}`);
       
    }
}

export {
    getUser,
    createUser,
    updateUser,
    removeUser,

    createUserLike,
    createUserRate,
    createUserOder

}