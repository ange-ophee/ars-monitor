const db = require("../config/db");
const certificationModel = require("../models/certificationModel");

exports.getAllCertificates = async (req, res) => {

  res.json([
    {
      id: 1,
      farmer: "John Doe",
      farm: "Green Farm",
      status: "Certified"
    }
  ]);

};

exports.autoCertifyFarm = async (req, res) => {

  try {

    const farmId = req.params.farmId;

    // 1. Get latest evaluation
    const [evaluation] = await db.query(
      `
      SELECT *
      FROM evaluations
      WHERE farm_id = ?
      ORDER BY evaluation_date DESC
      LIMIT 1
      `,
      [farmId]
    );

    if (!evaluation[0]) {
      return res.status(404).json({
        message: "No evaluation found"
      });
    }

    const evalData = evaluation[0];

    // 2. Check traceability existence
    const [trace] = await db.query(
      `
      SELECT COUNT(*) AS total
      FROM traceability_records tr
      JOIN cocoa_batches cb ON tr.batch_id = cb.id
      JOIN harvests h ON cb.harvest_id = h.id
      WHERE h.farm_id = ?
      `,
      [farmId]
    );

    const hasTraceability =
      trace[0].total > 0;

    // 3. Decision logic
    if (
      evalData.compliance_score < 75 ||
      !hasTraceability
    ) {
      return res.status(400).json({
        message:
          "Farm not eligible for certification"
      });
    }

    let status = "Certified";

    // 4. Generate certificate number
    const certNumber =
      `ARS-${farmId}-${Date.now()}`;

    const issueDate = new Date();

    const expiryDate = new Date();
    expiryDate.setFullYear(
      expiryDate.getFullYear() + 1
    );

    // 5. Create certificate
    const result =
      await certificationModel
      .createCertificate({
        farm_id: farmId,
        evaluation_id: evalData.id,
        certificate_number: certNumber,
        issue_date: issueDate,
        expiry_date: expiryDate,
        certification_status: status,
        ars_standard: evalData.ars_standard || "ARS1000"
      });

    // 6. Update farm status
    await db.query(
      `
      UPDATE farms
      SET certification_status = 'Certified'
      WHERE id = ?
      `,
      [farmId]
    );

    res.status(201).json({
      message: "Farm certified successfully",
      certificateNumber: certNumber,
      certificationId: result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getCertificate = async (req, res) => {

  try {

    const cert =
      await certificationModel
      .getCertificateByFarm(
        req.params.farmId
      );

    if (!cert) {
      return res.status(404).json({
        message: "No certificate found"
      });
    }

    res.status(200).json(cert);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};