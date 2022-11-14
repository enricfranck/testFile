const { Attachement } = require("../models/Attachement");

exports.saveFile = (req, res) => {
  const { ticketId, responseId } = req.body;
  console.log(req.file.filename);
  filepath = req.file.filename;
  if (ticketId) {
    Attachement.create({
      filepath: filepath,
      tickets_id: ticketId,
      response_id: 0,
    })
      .then((filetickets) => {
        res.status(200).json({
          data: filetickets,
          message: `Fichier pour le tickets ${ticketId} enregistré`,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: "Veuillez consultez le ,S'il vous plaît!",
        });
      });
  } else {
    Attachement.create({
      response_id: responseId,
      tickets_id: 0,
    })
      .then((filetickets) => {
        res.status(200).json({
          data: filetickets,
          message: `Fichier de la réponse du tickets enregistré`,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: "Veuillez consultez le technicien,S'il vous plaît!",
        });
      });
  }
};
