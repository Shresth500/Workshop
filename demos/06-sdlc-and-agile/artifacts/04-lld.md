# Low-Level Design (LLD) for Online Store Web Application

## 1. Classes and Object Model

### 1.1 Class Diagram

- **User**
  - Properties: `UserId`, `Name`, `Email`, `PasswordHash`, `Role`, `Address`
  - Methods:
    - `Register()`: Registers a new user.
    - `Login()`: Authenticates the user and returns a token.
    - `UpdateProfile()`: Allows users to update their profile details.

- **Product**
  - Properties: `ProductId`, `Name`, `Description`, `Price`, `Category`, `StockQuantity`, `Images`
  - Methods:
    - `GetProductById()`: Retrieves product details.
    - `GetAllProducts()`: Retrieves all products from the database.
    - `AddProduct()`: Adds a new product (Admin).
    - `UpdateProduct()`: Updates product information (Admin).
    - `DeleteProduct()`: Deletes a product (Admin).

- **Cart**
  - Properties: `CartId`, `UserId`, `CartItems` (List of `CartItem`)
  - Methods:
    - `AddToCart()`: Adds a product to the cart.
    - `RemoveFromCart()`: Removes a product from the cart.
    - `GetCartTotal()`: Calculates the total price of all items in the cart.

- **CartItem**
  - Properties: `CartItemId`, `ProductId`, `Quantity`
  - Methods:
    - `UpdateQuantity()`: Updates the quantity of the cart item.

- **Order**
  - Properties: `OrderId`, `UserId`, `OrderItems` (List of `OrderItem`), `TotalAmount`, `OrderStatus`, `PaymentStatus`, `ShippingAddress`, `OrderDate`
  - Methods:
    - `PlaceOrder()`: Places an order.
    - `GetOrderDetails()`: Retrieves order details.
    - `UpdateOrderStatus()`: Updates the status of an order (Admin).
  
- **OrderItem**
  - Properties: `OrderItemId`, `ProductId`, `Quantity`, `Price`

- **Payment**
  - Properties: `PaymentId`, `OrderId`, `PaymentMethod`, `PaymentStatus`, `PaymentDate`
  - Methods:
    - `ProcessPayment()`: Processes a payment using a payment gateway (Stripe, PayPal).
    - `VerifyPayment()`: Verifies the payment status.

- **Shipping**
  - Properties: `ShippingId`, `OrderId`, `Carrier`, `TrackingNumber`, `ShippingDate`, `DeliveryDate`
  - Methods:
    - `GenerateTrackingNumber()`: Generates a shipping tracking number.
    - `TrackShipment()`: Allows users to track their shipment.

---

## 2. Database Design (Relational Model)

### 2.1 Tables

- **Users**
  - Columns: `UserId (PK)`, `Name`, `Email`, `PasswordHash`, `Role`, `Address`

- **Products**
  - Columns: `ProductId (PK)`, `Name`, `Description`, `Price`, `Category`, `StockQuantity`, `Images`

- **CartItems**
  - Columns: `CartItemId (PK)`, `CartId (FK)`, `ProductId (FK)`, `Quantity`

- **Orders**
  - Columns: `OrderId (PK)`, `UserId (FK)`, `TotalAmount`, `OrderStatus`, `PaymentStatus`, `ShippingAddress`, `OrderDate`

- **OrderItems**
  - Columns: `OrderItemId (PK)`, `OrderId (FK)`, `ProductId (FK)`, `Quantity`, `Price`

- **Payments**
  - Columns: `PaymentId (PK)`, `OrderId (FK)`, `PaymentMethod`, `PaymentStatus`, `PaymentDate`

- **Shipping**
  - Columns: `ShippingId (PK)`, `OrderId (FK)`, `Carrier`, `TrackingNumber`, `ShippingDate`, `DeliveryDate`

---

## 3. API Design

### 3.1 User APIs

- `POST /api/users/register`
  - Registers a new user.
  - Request Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
  - Response: `201 Created`, `{ "message": "User registered successfully" }`

- `POST /api/users/login`
  - Authenticates the user and returns a JWT token.
  - Request Body: `{ "email": "john@example.com", "password": "password123" }`
  - Response: `200 OK`, `{ "token": "JWT token", "user": { "userId": 1, "name": "John Doe" } }`

- `PUT /api/users/update-profile`
  - Updates the user's profile.
  - Request Body: `{ "name": "John Doe Updated", "address": "123 Main St" }`
  - Response: `200 OK`, `{ "message": "Profile updated successfully" }`

### 3.2 Product APIs

- `GET /api/products`
  - Fetches all products.
  - Response: `200 OK`, `[ { "productId": 1, "name": "Product A", ... }, { "productId": 2, "name": "Product B", ... } ]`

- `GET /api/products/{id}`
  - Fetches a product by ID.
  - Response: `200 OK`, `{ "productId": 1, "name": "Product A", ... }`

- `POST /api/products` (Admin)
  - Adds a new product.
  - Request Body: `{ "name": "Product A", "price": 29.99, "category": "Electronics", ... }`
  - Response: `201 Created`, `{ "message": "Product added successfully" }`

- `PUT /api/products/{id}` (Admin)
  - Updates a product by ID.
  - Request Body: `{ "name": "Updated Product A", "price": 25.99, ... }`
  - Response: `200 OK`, `{ "message": "Product updated successfully" }`

- `DELETE /api/products/{id}` (Admin)
  - Deletes a product by ID.
  - Response: `200 OK`, `{ "message": "Product deleted successfully" }`

### 3.3 Cart APIs

- `POST /api/cart`
  - Adds a product to the cart.
  - Request Body: `{ "productId": 1, "quantity": 2 }`
  - Response: `201 Created`, `{ "message": "Item added to cart" }`

- `GET /api/cart`
  - Fetches the current user's cart items.
  - Response: `200 OK`, `[ { "cartItemId": 1, "productId": 1, "quantity": 2, ... } ]`

- `DELETE /api/cart/{cartItemId}`
  - Removes an item from the cart.
  - Response: `200 OK`, `{ "message": "Item removed from cart" }`

### 3.4 Order APIs

- `POST /api/orders`
  - Places a new order.
  - Request Body: `{ "cartId": 1, "shippingAddress": "123 Main St", "paymentMethod": "CreditCard" }`
  - Response: `201 Created`, `{ "message": "Order placed successfully", "orderId": 123 }`

- `GET /api/orders/{orderId}`
  - Fetches the details of an order.
  - Response: `200 OK`, `{ "orderId": 123, "status": "Processing", "items": [ ... ] }`

### 3.5 Payment APIs

- `POST /api/payments`
  - Processes a payment.
  - Request Body: `{ "orderId": 123, "paymentMethod": "CreditCard" }`
  - Response: `200 OK`, `{ "message": "Payment processed successfully" }`

---

## 4. Security Considerations

- **Authentication**: JWT-based authentication for all secured routes.
- **Authorization**: Role-based access control (RBAC) for admin and users.
- **Password Hashing**: Use `bcrypt` for storing hashed passwords.
- **Sensitive Data**: Use HTTPS for encrypting sensitive data like payment details.

---

## 5. Error Handling & Logging

- **Global Exception Handling**: Implement a global exception handler using middleware to catch and handle all errors.
- **Logging**: Use `Serilog` or `NLog` to log errors, warnings, and information to a file or external monitoring system.

---

## 6. Caching & Performance Optimization

- **Caching**: Use in-memory caching (e.g., `MemoryCache` or `Redis`) for frequently accessed product data.
- **Database Optimization**: 
  - Index frequently queried columns (e.g., `ProductId`, `UserId`).
  - Use pagination for large datasets to avoid loading everything into memory at once.

---

## 7. Deployment & Monitoring

- **Deployment**: Deploy on Azure App Service or AWS using Docker or direct deployments from CI/CD pipelines (e.g., GitHub Actions).
- **Monitoring**: Use Application Insights (for Azure) or CloudWatch (for AWS) to monitor application performance and errors.
