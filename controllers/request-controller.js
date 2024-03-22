const knex = require('knex')(require('../knexfile'));

const getRequests = async (_req, res) => {
  try {
    const data = await knex('consultation_request');
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(`Error retrieving requests: ${err}`)
  }
}

const deleteRequests = async (req, res) => {
    try {
      const rowsDeleted = await knex("consultation_request")
        .where({ id: req.params.id })
        .delete();
  
      if (rowsDeleted === 0) {
        return res
          .status(404)
          .json({ message: `Request with ID ${req.params.id} not found` });
      }
  
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({
        message: `Unable to delete request: ${error}`
      });
    }
  };

  const addRequests = async (req, res) => {
    const { name, city, phone, email, message } = req.body;
 //validation logic later
    try {
      const [newRequest] = await knex('consultation_request').insert({
        name,
        city,
        phone,
        email,
        message
      }, '*');
  
      res.status(201).json(newRequest);
    } catch (error) {
      console.error('Error adding request:', error);
      res.status(500).json({
        message: `Error adding request: ${error}`
      });
    }
  };
  

module.exports = {
    getRequests,
    deleteRequests,
    addRequests
}