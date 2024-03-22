const requestData = require('../seed-data/consultation_request');

exports.seed = async function(knex) {
  await knex('consultation_request').del()
  await knex('consultation_request').insert(requestData);
};
