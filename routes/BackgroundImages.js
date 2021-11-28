const express = require("express");
const router = express.Router();

const controller = require("../controller/backGrounImages");

let routes = (app) => {
    router.post("/background/imageUpload", controller.firstImageUpload)

  router.post("/background/image1/:id", controller.imageOneUpdation)
  router.post("/background/image2/:id", controller.imageTwoUpdation)
  router.post("/background/image3/:id", controller.imageThreeUpdation)

  app.use(router);
};

module.exports = routes;