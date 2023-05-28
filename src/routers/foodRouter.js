import express from 'express';
import { createFood, deleteFood, getFood, getFoodPage, updateFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

// khởi tạo API
// localhost:8080/api/food/get-food
foodRouter.get("/get-food", getFood);
foodRouter.post("/create-food", createFood);
foodRouter.put("/update-food/:food_id", updateFood);
foodRouter.delete("/delete-food/:food_id", deleteFood);

foodRouter.get("/get-food-page/:page/:pageSize", getFoodPage);


export default foodRouter;