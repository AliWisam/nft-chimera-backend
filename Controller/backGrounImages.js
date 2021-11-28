const upload = require("../middleware/fileUpload");
const Image = require("../models/backGroundImages")
const Tags = require("../models/Tags")

const URL = "http://localhost:5000/files/";
const fs = require("fs");

// upload background image
const firstImageUpload = async (req, res) => {
    try {
      await upload(req, res);
  
  
  
      if (req.file == undefined) {
        console.log('file----', req.file)
        return res.status(400).send({ message: "Choose a file to upload" });
      }  
      const image = new Image({
          image1 : "http://localhost:5000/uploads/"+req.file.originalname.toLowerCase().split(' ').join('-'),
    
        });
  

                 await image.save();
  
      console.log(req.body.tokenId);
  
      res.status(200).send({
        message: "File uploaded successfully: " + req.file.originalname,
        image
      });
    } catch (err) {
      console.log(err);
  
      if (err.code == "LIMIT_FILE_SIZE") {
        return res.status(500).send({
          message: "File size should be less than 500MB",
        });
      }
  
      res.status(500).send({
        message: `Error occured: ${err}`,
      });
    }
  };
  

//   upload 1st background image
  
const imageOneUpdation = async (req, res) => {
  try {
    await upload(req, res);

    if (req.file == undefined) {
      console.log('file----', req.file)
      return res.status(400).send({ message: "Choose a file to upload" });
    }

console.log('file----1', req.file)

    var image = await Image.findOneAndUpdate({_id : "60ca06b0c78a662b841b15cc"}, {

        image1 : "http://localhost:5000/uploads/"+req.file.originalname.toLowerCase().split(' ').join('-'),
})

              await image.save();

    console.log(req.body.tokenId);

    res.status(200).send({
      message: "File uploaded successfully: " + req.file.originalname,
      images
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size should be less than 500MB",
      });
    }

    res.status(500).send({
      message: `Error occured: ${err}`,
    });
  }
};

// upload 2nd backgroudn image

const imageTwoUpdation = async (req, res) => {
    try {
        await upload(req, res);
    
    
    
        if (req.file == undefined) {
          console.log('file----', req.file)
          return res.status(400).send({ message: "Choose a file to upload" });
        }
    
    console.log('file----1', req.file)
 
        var image = await Image.findOneAndUpdate({_id : "60ca06b0c78a662b841b15cc"}, {
    
            image2 : "http://localhost:5000/uploads/"+req.file.originalname.toLowerCase().split(' ').join('-'),
    })
    
                   await image.save();
    
        console.log(req.body.tokenId);
    
        res.status(200).send({
          message: "File uploaded successfully: " + req.file.originalname,
          image
        });
      } catch (err) {
        console.log(err);
    
        if (err.code == "LIMIT_FILE_SIZE") {
          return res.status(500).send({
            message: "File size should be less than 500MB",
          });
        }
    
        res.status(500).send({
          message: `Error occured: ${err}`,
        });
      }
  };

// upload 3rd backgroudn image

  const imageThreeUpdation = async (req, res) => {
    try {
        await upload(req, res);
    
    
    
        if (req.file == undefined) {
          console.log('file----', req.file)
          return res.status(400).send({ message: "Choose a file to upload" });
        }
    
  
        var image = await Image.findOneAndUpdate({_id : "60ca06b0c78a662b841b15cc"}, {
    
            image3 : "http://localhost:5000/uploads/"+req.file.originalname.toLowerCase().split(' ').join('-'),
    })
    
                   await image.save();
    
    
        res.status(200).send({
          message: "File uploaded successfully: " + req.file.originalname,
          image
        });
      } catch (err) {
        console.log(err);
    
        if (err.code == "LIMIT_FILE_SIZE") {
          return res.status(500).send({
            message: "File size should be less than 500MB",
          });
        }
    
        res.status(500).send({
          message: `Error occured: ${err}`,
        });
      }
  };
    

module.exports = { imageOneUpdation, imageTwoUpdation, imageThreeUpdation, firstImageUpload};