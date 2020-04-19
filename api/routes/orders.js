const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders are feched",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Order was created",
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Order details",
      id: id,
    });
  }
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted order",
  });
});

module.exports = router;
