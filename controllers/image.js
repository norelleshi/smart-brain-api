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
        .catch(err => res.status(400).json('Unable to work with API'))
}

const handleImage = (req, res, db) => {
    db('users').where('id', '=', '')
    .increment('accumulation', 1)
    .returning('accumulation')
    .then(accumulation => {
        res.json(accumulation[0]);
    })
    .catch(err => res.status(400).json('Unable to get accumulations'))
}

module.exports = { 
    handleImage,
    handleApiCall
}