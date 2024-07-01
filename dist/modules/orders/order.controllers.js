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
exports.orderControllers = void 0;
const response_1 = require("../../app/hooks/response");
const order_servicesl_1 = require("./order.servicesl");
const order_zod_validation_1 = require("./order.zod.validation");
//creating order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodData = order_zod_validation_1.zodOrderSchema.parse(req.body);
        const result = yield order_servicesl_1.orderServices.createOrder(zodData);
        (0, response_1.ResponseHook)(res, true, "Order created successfully!", result);
    }
    catch (error) {
        (0, response_1.ResponseHook)(res, false, "failed to create order ", error);
    }
});
// fetching all orders 
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (email) {
            const result = yield order_servicesl_1.orderServices.queryOrders(email);
            if (result.length > 0) {
                return (0, response_1.ResponseHook)(res, true, `Orders fetched successfully for ${email} email!`, result);
            }
            else {
                return (0, response_1.ResponseHook)(res, false, "no orders found with this email");
            }
        }
        const result = yield order_servicesl_1.orderServices.getAllOrder();
        (0, response_1.ResponseHook)(res, true, "fetched all orders succesfully", result);
    }
    catch (error) {
        (0, response_1.ResponseHook)(res, false, "failed to fetch orders");
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrder
};
