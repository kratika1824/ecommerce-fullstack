# Full Stack E-commerce Website

A full-stack e-commerce web application currently in development, featuring user authentication, product catalog, cart, and checkout functionality.

> ⚠️ **Status: In Progress** — core features (auth, catalog, cart, checkout) are working; payment integration is not yet implemented.

## Tech Stack

**Frontend:** React.js, Tailwind CSS
**Backend:** Spring Boot, Spring Security (JWT authentication)
**Database:** MySQL

## Features

- User registration and login with JWT-based authentication
- Product catalog with categories and product details
- Shopping cart — add, update quantity, remove items
- Checkout flow
- Responsive UI across devices

## Project Structure

```
ecommerce-fullstack/
├── backend/     # Spring Boot REST API
├── frontend/    # React.js client
└── README.md
```

## Getting Started

### Prerequisites

- Java 17+
- Node.js and npm
- MySQL

### Backend Setup

```bash
cd backend
# Create src/main/resources/application.properties with your own MySQL credentials:
# spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
# spring.datasource.username=your_username
# spring.datasource.password=your_password

./mvnw spring-boot:run
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Roadmap

- [ ] Payment gateway integration
- [ ] Order history
- [ ] Admin dashboard improvements
