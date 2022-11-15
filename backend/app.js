const express = require('express');

const app =  express();

app.use((req, res, next) => {
    console.log('Requete reçue !');
    next();
});

app.use((req, res, next) => {
    res.stauts(201);
    next();
});

app.use((req, res) => {
    res.json({message: "Votre requete à été bien reçu !"});
});
app.use((req, res , next) => {
    console.log('Réponse envoyée avec succès !');
});
module.exports = app;