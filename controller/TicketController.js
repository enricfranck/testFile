const { Attachement } = require("../models/Attachement");
const { Response } = require("../models/Response");
const { Tickets } = require("../models/Tickets");
const { User } = require("../models/User");

exports.findAllTickets = (req, res) => {
  Tickets.findAll({
    include: [
      { model: User },
      { model: Attachement, attributes: ["id", "filepath"] },
      { model: Response, attributes: ["id", "text", "user_id"] },
    ],
  })

    .then((tickets) => {
      res.status(200).json({ tickets: tickets });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.findAllTicketsByUser = (req, res) => {
  Tickets.findAll({
    include: [
      { model: User },
      { model: Attachement, attributes: ["id", "filepath"] },
    ],
    where: { user_id: req.params.userid },
  })
    .then((ticket) => {
      res.status(200).json({ tickets: ticket });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.findTicketById = (req, res) => {
  Tickets.findAll({
    include: [
      { model: User },
      { model: Attachement, attributes: ["id", "filepath"] },
    ],
    where: { id: req.params.id },
  })
    .then((ticket) => {
      res.status(200).json({ ticket: ticket });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.createTickets = (req, res) => {
  const { description, userId } = req.body;
  Tickets.create({ description: description, user_id: userId })
    .then((tickets) => {
      res
        .status(200)
        .json({ ticketId: tickets.id, message: "Tickets created!" });
    })
    .catch((error) => {
      console.error(error);
    });
};
exports.closeTicket = (req, res) => {
  if (req.params.id) {
    const ticket = Tickets.find({ where: { id: req.params.id } });
    console.log(ticket);
    if (ticket) {
      Tickets.update({ close: true }, { where: { id: req.params.id } }).then(
        (result) => {
          res
            .status(200)
            .json({ message: `Ticket ID ${req.params.ticketId} Closed!` });
        }
      );
    } else {
      res.json({ message: "Ticket not found" });
    }
  } else {
    res.status(500).json({ message: "Bad parameter" });
  }
};
