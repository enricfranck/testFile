const { Response } = require("../models/Response");
const { User } = require("../models/User");

exports.replyTickets = (req, res) => {
  const { text, userId, ticketsId } = req.body;
  Response.create({ text: text, user_id: userId, tickets_id: ticketsId })
    .then((response) => {
      res.status(200).json({ response: response, message: "Réponse réçu!" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Reponse réfusé", error: error });
    });
};
exports.retrieveResponse = (req, res) => {
  Response.findAll({ include: User })
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error, message: "Erreur survenue" });
    });
};
