const router = require("express").Router();
const pdfService = require("./pdf-service");

router.get("/invoice", (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/json",
    "Content-Disposition": "attachment;filename=invoice.pdf",
  });

  pdfService.buildPdf(
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});

module.exports = router;
