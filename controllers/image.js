const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'acdf04c75aaa463fa77654d4d5650344'
   });
  

const handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res, db) => {}

module.exports = { 
    handleImage,
    handleApiCall
}