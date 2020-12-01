const express = require('express');
const router = express.Router();

const User = require('../models/User');

const faker = require('faker');


/**
 * Liste des utilisateurs
 */
router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json({users});
})

/**
 * Création d'un nouvel utilisateur
 */
router.get('/api/users/create', async (req, res) => {
    for (let i = 0; i < 50; i++) {
         await User.create({
             firstName: faker.name.firstName(),
             lastName: faker.name.lastName(),
             avatar: faker.image.avatar(),
         })
    }
    res.json({message: 'Users created'});
});

module.exports = router;