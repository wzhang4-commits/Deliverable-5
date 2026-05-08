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
app.post("/submit-found", async (req, res) => {
  try {
    const {
      logged_by_user_id,
      item_name,
      description,
      category,
      color,
      date_found,
      location_id
    } = req.body;

    await pool.query(
      `INSERT INTO found_items
      (logged_by_user_id, item_name, description, category, color, date_found, location_id, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        logged_by_user_id,
        item_name,
        description,
        category,
        color,
        date_found,
        location_id,
        "Available"
      ]
    );
await pool.query(
  `UPDATE lost_reports
   SET status = 'Matched'
   WHERE LOWER(item_name) = LOWER($1)
   AND LOWER(category) = LOWER($2)
   AND LOWER(color) = LOWER($3)
   AND status = 'Open'`,
  [item_name, category, color]
);
    res.send(`
      <h1>Found Item Saved</h1>
      <p>The found item was saved into the database successfully.</p>
      <a href="/found-items.html">Log Another Found Item</a><br>
      <a href="/dashboard.html">Go to Dashboard</a>
    `);
  } catch (error) {
    console.error(error);
    res.send(`
      <h1>Error Saving Found Item</h1>
      <p>Something went wrong while saving the found item.</p>
      <pre>${error.message}</pre>
      <a href="/found-items.html">Try Again</a>
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
app.get("/api/found-items", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        found_item_id,
        logged_by_user_id,
        item_name,
        description,
        category,
        color,
        date_found,
        location_id,
        status,
        created_at
      FROM found_items
      ORDER BY found_item_id DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch found items" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});