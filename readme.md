# Inventory Management System

A full-stack **Inventory Management System** built with **C# ASP.NET Core** and **React.js** to manage, organize, and track products, suppliers, and orders efficiently. This project demonstrates CRUD operations, data validation, and integration of backend and frontend technologies.

---

## Features

1. **Product Management**:
   - Add, edit, delete, and search for products.
   - Assign categories, prices, and stock quantities.

2. **Supplier Management**:
   - Manage supplier information, including contact details.

3. **Stock Tracking**:
   - Update stock levels dynamically based on sales or restocks.
   - Generate alerts for low-stock items.

4. **Reporting**:
   - Summary reports on total stock value, product categories, and recent orders.
   - Visualize reports with interactive charts.

---

## Tech Stack

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: C# ASP.NET Core Web API
- **Database**: MySQL for persistence
- **Build Tools**: npm/yarn for React, Visual Studio for .NET
- **UI Libraries (Optional)**: Material-UI, Bootstrap, or Tailwind CSS for styling

---

## Setup and Installation

### Prerequisites

- **Node.js** (for the React frontend)
- **MySQL Database**
- **.NET SDK** (ASP.NET Core 6.0 or above)
- **Visual Studio** or **Visual Studio Code**

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/inventory-management-system.git
   cd inventory-management-system
   ```

2. **Setup the Backend**:
   - Open the backend folder in Visual Studio.
   - Configure the database connection in `appsettings.json`:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=inventory_management;User Id=your-username;Password=your-password;"
     }
     ```
   - Apply migrations to create the database schema:
     ```bash
     dotnet ef database update
     ```
   - Run the backend server:
     ```bash
     dotnet run
     ```

3. **Setup the Frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Access the Application**:
   - The backend will run on `http://localhost:5000`.
   - The frontend will run on `http://localhost:3000`.

---

## API Endpoints

### Product Management

| HTTP Method | Endpoint            | Description              |
|-------------|---------------------|--------------------------|
| **GET**     | `/api/products`     | Fetch all products       |
| **POST**    | `/api/products`     | Add a new product        |
| **PUT**     | `/api/products/{id}`| Update an existing product |
| **DELETE**  | `/api/products/{id}`| Delete a product         |

### Supplier Management

| HTTP Method | Endpoint             | Description              |
|-------------|----------------------|--------------------------|
| **GET**     | `/api/suppliers`     | Fetch all suppliers      |
| **POST**    | `/api/suppliers`     | Add a new supplier       |
| **PUT**     | `/api/suppliers/{id}`| Update an existing supplier |
| **DELETE**  | `/api/suppliers/{id}`| Delete a supplier        |

### Reporting

| HTTP Method | Endpoint            | Description               |
|-------------|---------------------|---------------------------|
| **GET**     | `/api/reports/low-stock` | Fetch low-stock products |
| **GET**     | `/api/reports/stock-value`| Fetch total stock value |

---

## Future Enhancements

- Add authentication and role-based access control for admin users.
- Integrate barcode scanning for product management.
- Export inventory data to CSV or Excel format.
- Add notification alerts for stock replenishment.

---

## License

This project is open-source and available under the [MIT License](./LICENSE).

---

## Contact

For questions or suggestions, feel free to reach out:

- **Name**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

