const pool = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/submit-lost", async (req, res) => {
  try {
    const {
      user_id,
      item_name,
      description,
      category,
      color,
      date_lost,
      location_id,
      contact_info
    } = req.body;

    await pool.query(
      `INSERT INTO lost_reports 
      (user_id, item_name, description, category, color, date_lost, location_id, contact_info, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        user_id,
        item_name,
        description,
        category,
        color,
        date_lost,
        location_id,
        contact_info,
        "Open"
      ]
    );

    res.send(`
      <h1>Lost Item Report Saved</h1>
      <p>Your lost item report was saved into the database successfully.</p>
      <a href="/submit-lost.html">Submit Another Report</a><br>
      <a href="/dashboard.html">Go to Dashboard</a>
    `);
  } catch (error) {
    console.error(error);
    res.send(`
      <h1>Error Saving Report</h1>
      <p>Something went wrong while saving the report.</p>
      <pre>${error.message}</pre>
      <a href="/submit-lost.html">Try Again</a>
    `);
  }
});
app.get("/api/lost-reports", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        lost_report_id,
        user_id,
        item_name,
        description,
        category,
        color,
        date_lost,
        location_id,
        contact_info,
        status,
        created_at
      FROM lost_reports
      ORDER BY lost_report_id DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch lost reports" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});