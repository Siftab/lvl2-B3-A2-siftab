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
exports.productControllers = void 0;
const product_services_1 = require("./product.services");
const response_1 = require("../../app/hooks/response");
const product_zod_1 = require("./product.zod");
// creating product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodData = product_zod_1.zodProductSchema.parse(req.body);
        const result = yield product_services_1.productServices.createProduct(zodData);
        (0, response_1.ResponseHook)(res, true, "product created successfully ", result);
    }
    catch (error) {
        (0, response_1.ResponseHook)(res, false, "product failed to create", error);
    }
});
// get all product 
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        // if query attached then this will work o
        if (searchTerm) {
            const result = yield product_services_1.productServices.findByQuery(searchTerm);
            if (result.length > 0) {
                return (0, response_1.ResponseHook)(res, true, `Products matching search term '${searchTerm}' fetched successfully!`, result);
            }
            else {
                return (0, response_1.ResponseHook)(res, false, `Products not found with  '${searchTerm}'`);
            }
        }
        const result = yield product_services_1.productServices.getAllProduct();
        (0, response_1.ResponseHook)(res, true, "Products fetched successfully!", result);
    }
    catch (error) {
        (0, response_1.ResponseHook)(res, false, "failed to fetch all product");
    }
});
// Retrieve a Specific Product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_services_1.productServices.getProductById(req.params.productId);
        (0, response_1.ResponseHook)(res, true, "Product fetched successfully!", result);
    }
    catch (error) {
        (0, response_1.ResponseHook)(res, false, "failed to fetch product");
    }
});
// update 
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodData = product_zod_1.zodProductSchema.parse(req.body);
        const result = yield product_services_1.productServices.updateProduct(req.params.productId, zodData);
        (0, response_1.ResponseHook)(res, true, "Product updated successfully!", result);
    }
    catch (error) {
        (0, response_1.ResponseHook)(res, false, "failed to update product", error);
    }
});
// delete a product form DB
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.productServices.deleteProduct(productId);
        (0, response_1.ResponseHook)(res, true, "product deleted successfully ", result);
    }
    catch (error) {
        (0, response_1.ResponseHook)(res, false, "failed to delete product");
    }
});
// Search a product with query 
// exporting all the controllers 
exports.productControllers = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
