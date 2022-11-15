const express = require('express');

const app =  express();
app.use((req, res) => {
    res.json({message: "Votre requete à été bien reçu !"})
});
module.exports = app;