"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./modules/product/product.route");
const order_route_1 = require("./modules/orders/order.route");
// parser
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
// linking routes 
exports.app.use("/api/products", product_route_1.productRouter);
exports.app.use("/api/orders", order_route_1.orderRouter);
exports.app.get('/', (req, res) => {
    res.send('Hello World! server hitted');
});
