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
- GitHub Actions
- DockerHub
- Render Cloud Hosting
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
├── .github/workflows/
└── README.md
```

---

# Local Setup Instructions

## Step 1 – Clone Repository

```bash
git clone <repository-url>
```

---

## Step 2 – Install Docker Desktop

Download Docker Desktop:

https://www.docker.com/products/docker-desktop/

Ensure Docker Desktop is running before continuing.

---

## Step 3 – Start Application Containers

From the main project folder:

```bash
docker compose up --build
```

This starts:
- PostgreSQL database container
- Node.js application container

---

## Step 4 – Open the Application

Open browser:

```text
http://localhost:3000
```

---

# Cloud Deployment (Render)

The application is deployed using:
- DockerHub
- Render Cloud Hosting
- PostgreSQL Render Database

Docker images are automatically built and pushed using GitHub Actions CI/CD workflows.

---

# Docker Information

## DockerHub Repository

https://hub.docker.com/r/wzhang4umbc/umbc-lost-found

## Docker Pull Command

```bash
docker pull wzhang4umbc/umbc-lost-found:latest
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

# Team Information

## Team Name
UMBC Lost & Found Team

---

## Project Contact Person

### Wilson Zhang
Email: wzhang4@umbc.edu

---

# Team Members, Contact Info, and Short Bios

## Wilson Zhang – Project Manager
Email: wzhang4@umbc.edu

Responsible for overall project coordination, timeline management, and communication between stakeholders. Oversees requirements alignment and ensures deliverables meet course and project objectives.

---

## Michael Thomas – Quality Assurance
Email: ae10330@umbc.edu

Focuses on system testing, validation, and quality assurance. Ensures system functionality meets requirements and identifies defects prior to deployment.

---

## Mete Gorgulu – Software Engineer
Email: meteg1@umbc.edu

Responsible for backend development, system logic, and API integrations. Supports implementation of automated matching and authentication features.

---

## Therisa Phan – UI/UX Designer
Email: tphan7@umbc.edu

Designs user interfaces and user experience workflows to ensure the system is intuitive and accessible for both students and staff.

---

## Justin Medina – Systems Analyst
Email: jmedina5@umbc.edu

Analyzes business requirements, documents system specifications, and assists in translating stakeholder needs into technical solutions.

---

# Team Meeting Schedule

The project team plans to meet once per week for approximately 1–2 hours outside of class, typically on Fridays, with additional meetings scheduled as needed during major project milestones.

---

# Course Information

## Course
IS 436 – Structured System Analysis and Design

## Deliverable
Deliverable 5 – Closing: User Interface Design, Program Design, and System Implementation
