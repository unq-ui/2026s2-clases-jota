import express from 'express';
import initSystem from '@unq-ui/mercadolibre-model-js/dist/InitSystem.js';

import { CategoryBody } from './Schemas.js';
import TokenController from './Controllers/TokenController.js';

const mercadolibreService = initSystem();

const app = express() // Genera una instancia de Una API
app.use(express.json()); // Le dice que todo los bodies q reciva van a ser de tipo JSON.

const port = 3000

const tokenController = new TokenController(mercadolibreService);

const transformUser = ({ id, name, image }) => ({ id, name, image });

// Defino todos mis endpoint

app.get('/harcodedUser', (req, res) => {
  const user = mercadolibreService.users[0];
  const token = tokenController.generateToken(user.id);
  // Seteo el header con el token
  res.setHeader('pepito', token);
  res.json(transformUser(mercadolibreService.users[0]))
})

app.get('/users/:userIndex', (req, res) => {
  const { userIndex } = req.params
  res.json(transformUser(mercadolibreService.users[userIndex]))
})

app.post('/category', (req, res) => {
  const body = req.body;
  try {
    console.log(body)
    CategoryBody.parse(body)
    const newCategory = mercadolibreService.addCategory(body.name);
    res.status(201).json(newCategory);
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: 'Category name invalid'});
  }
})

// Como usar el middleware para validar el usuario
app.get('/users', tokenController.validateUser, (req, res) => {
  console.log(req.user);
  res.json({ name: '>???' })
});

// Fin definición de endpoints

// Con esta funcion el Servidor de la api se levanta realmente.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})