"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
// product creating 
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
// retrive all product
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
// retrive all product
const findByQuery = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({
        tags: {
            $regex: data,
            $options: "i"
        }
    });
    return result;
});
// get product by id
const getProductById = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(payLoad);
    return result;
});
// updating product  ---need clarification
const updateProduct = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    payLoad.inventory.quantity = payLoad.inventory.quantity - 1;
    const result = yield product_model_1.Product.findByIdAndUpdate(id, payLoad);
    // const result = await Product.findByIdAndUpdate(id, { $set: { "inventory.quantity": payLoad.inventory.quantity } })
    return result;
});
// delete a product 
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
exports.productServices = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    findByQuery
};
