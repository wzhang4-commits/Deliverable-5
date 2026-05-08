# UMBC Lost & Found System – Deliverable 5

## Project Overview
The UMBC Lost & Found System is a centralized web application designed to help students and staff report lost items, log found items, automatically identify possible matches, and assist with claim verification.

This project was developed for IS 436 – Structured System Analysis and Design.

---

# Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Docker
- Docker Compose
- HTML
- CSS
- JavaScript

---

# Features

## Submit Lost Item
Users can submit lost item reports which are stored in the PostgreSQL database.

## Log Found Item
Staff members can log found items into the system.

## Automatic Matching
When a found item is submitted, the system compares:
- item name
- category
- color

If a match is found, the lost report status is updated to:
- Matched

## Dashboard Reports
The dashboard displays:
- Lost Reports
- Found Items
- Match Status

## Claim Verification Prototype
The system includes a prototype claim verification interface for staff review.

---

# Project Structure

```text
Deliverable-5/
├── app/
│   ├── public/
│   │   ├── index.html
│   │   ├── submit-lost.html
│   │   ├── found-items.html
│   │   ├── dashboard.html
│   │   ├── claims.html
│   │   └── styles.css
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

# How to Run the System

## Step 1 – Clone Repository

```bash
git clone <repository-url>
```

---

## Step 2 – Start Docker Containers

```bash
docker compose up --build
```

---

## Step 3 – Open the Application

Open browser:

```text
http://localhost:3000
```

---

# Main Screens

- Home
- Submit Lost Item
- Log Found Item
- Dashboard
- Claim Verification

---

# Example Demo Flow

1. Submit a lost item report
2. View lost report on dashboard
3. Log a found item with matching details
4. Dashboard status updates to "Matched"

---

# Docker Information

## Build Docker Image

```bash
docker build -t umbc-lost-found .
```

## Run Docker Container

```bash
docker run -p 3000:3000 umbc-lost-found
```

---

# Team Information

## Team Name
UMBC Lost & Found Team

## Course
IS 436 – Structured System Analysis and Design

## Deliverable
Deliverable 5 – Closing: User Interface Design, Program Design, and System Implementation
