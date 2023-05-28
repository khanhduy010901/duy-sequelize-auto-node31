import { errorCode, successCode } from '../config/Response.js';
// import Food from '../models/food.js';
import initModels from '../models/init-models.js';
import sequelize from '../models/index.js';

const models = initModels(sequelize);

const getFood = async (req, res) => {
    try {

        // SELECT * FROM food WHERE food_id = 3 ; 
        // .findAll() => list object 
        // .findOne() => object

        // SELECT FROM JOIN
        let data = await models.user.findAll({
            include: ["food_id_foods"]
        });

        // res.status(200).send(data);
        successCode(res, data, "Lấy food thành công");
    } catch {
        // res.status(500).send("Lỗi BE")
        errorCode(res, "Lỗi BE");
    }
}
// Create
const createFood = async (req, res) => {
    try {
        let { food_name, image, price, desc, type_id } = req.body;
        let model = { food_name, image, price, desc, type_id };

        await models.food.create(model);

        // res.status(200).send("Thêm thành công");
        successCode(res, model, "Thêm thành công");

    } catch {
        // res.status(500).send("Lỗi BE");
        errorCode(res, "Lỗi BE");

    }
}

// Update
const updateFood = (req, res) => {
    let { food_id } = req.params;
    // Food.update(model, {where: food_id: food_id})
}
// Delete
const deleteFood = (req, res) => {
    // Food.destroy({where: food_id: food_id});
}

const getFoodPage = async (req, res) => {

    let { page, pageSize } = req.params;

    let index = (page - 1) * pageSize;

    // công thức 
    //page -> index 
    // 1 -> 0
    // 2 -> 3
    // 3 -> 6
    // 4 -> 9

    // SELECT * FROM food LIMIT 0 , 3
    let data = await models.food.findAll({
        offset: index,
        limit: Number(pageSize)
    })

    // tổng số trang = tổng số dòng / pageSize => làm tròn lên
    //   11 / 3 = 3,. => 4
    res.send(data);
}

export {

    getFood,
    createFood,
    updateFood,
    deleteFood,
    getFoodPage
}