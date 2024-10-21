# Test Cases for E-Commerce Web Application

## 1. **User Registration and Authentication**

| **Test Case ID** | **Test Case Description**                                          | **Test Steps**                                                                                                                                                 | **Expected Result**                                                        | **Status**  |
|------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------|
| TC-001           | Verify user registration with valid data                           | 1. Go to the registration page.<br>2. Enter valid username, email, and password.<br>3. Submit the form.                                                       | User account created successfully, confirmation email is sent.              | Open       |
| TC-002           | Verify user registration with invalid data                         | 1. Go to the registration page.<br>2. Enter invalid email.<br>3. Submit the form.                                                                              | Error message displayed (e.g., "Invalid email format").                     | Open       |
| TC-003           | Verify login with valid credentials                                | 1. Go to the login page.<br>2. Enter valid username and password.<br>3. Submit the form.                                                                       | User is successfully logged in and redirected to the dashboard.             | Open       |
| TC-004           | Verify login with invalid credentials                              | 1. Go to the login page.<br>2. Enter incorrect username or password.<br>3. Submit the form.                                                                    | Error message displayed (e.g., "Incorrect username or password").            | Open       |
| TC-005           | Verify "Forgot Password" functionality                             | 1. Click on "Forgot Password".<br>2. Enter registered email.<br>3. Submit the form.<br>4. Check email for reset link.                                          | Password reset email sent, user can reset password using the link.          | Open       |

---

## 2. **Product Catalog and Search**

| **Test Case ID** | **Test Case Description**                                          | **Test Steps**                                                                                                                                                 | **Expected Result**                                                        | **Status**  |
|------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------|
| TC-006           | Verify product search using valid keywords                         | 1. Enter a valid product name in the search bar.<br>2. Click "Search".                                                                                         | Relevant products matching the keyword are displayed.                       | Open       |
| TC-007           | Verify product search using invalid keywords                       | 1. Enter an invalid or misspelled product name in the search bar.<br>2. Click "Search".                                                                        | Error message displayed or no products found message shown.                 | Open       |
| TC-008           | Verify product filtering by category                               | 1. Select a category filter (e.g., Electronics).<br>2. Apply filter.<br>3. Verify displayed products.                                                          | Products in the selected category are displayed.                            | Open       |
| TC-009           | Verify product sorting by price (low to high)                      | 1. Select sorting by price "Low to High".<br>2. Apply sorting.<br>3. Verify displayed product order.                                                           | Products are sorted by price in ascending order.                            | Open       |
| TC-010           | Verify product pagination                                          | 1. Navigate to product search results.<br>2. Click on page 2 of the pagination.<br>3. Verify products on the second page.                                      | Products for the next page are displayed correctly.                         | Open       |

---

## 3. **Shopping Cart Management**

| **Test Case ID** | **Test Case Description**                                          | **Test Steps**                                                                                                                                                 | **Expected Result**                                                        | **Status**  |
|------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------|
| TC-011           | Verify adding a product to the cart                                | 1. Navigate to a product page.<br>2. Click "Add to Cart".                                                                                                      | Product is added to the shopping cart, and cart count is updated.           | Open       |
| TC-012           | Verify updating product quantity in the cart                       | 1. Add a product to the cart.<br>2. Open the shopping cart.<br>3. Update the quantity.<br>4. Verify total price.                                               | Total price is updated based on the new quantity.                           | Open       |
| TC-013           | Verify removing a product from the cart                            | 1. Add a product to the cart.<br>2. Open the shopping cart.<br>3. Click "Remove" next to the product.<br>4. Verify the cart is updated.                        | Product is removed from the cart, and the total price is updated.           | Open       |
| TC-014           | Verify shopping cart persists after logout                         | 1. Add products to the cart.<br>2. Logout.<br>3. Log back in.<br>4. Verify products are still in the cart.                                                     | The shopping cart retains products after logging out and back in.           | Open       |

---

## 4. **Checkout and Payment Process**

| **Test Case ID** | **Test Case Description**                                          | **Test Steps**                                                                                                                                                 | **Expected Result**                                                        | **Status**  |
|------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------|
| TC-015           | Verify checkout process with valid payment details                 | 1. Add products to the cart.<br>2. Proceed to checkout.<br>3. Enter valid payment details.<br>4. Confirm payment.                                              | Payment is successful, and order confirmation page is displayed.            | Open       |
| TC-016           | Verify checkout process with invalid payment details               | 1. Add products to the cart.<br>2. Proceed to checkout.<br>3. Enter invalid payment details.<br>4. Confirm payment.                                            | Payment fails, and an error message is displayed.                           | Open       |
| TC-017           | Verify applying discount code at checkout                          | 1. Add products to the cart.<br>2. Proceed to checkout.<br>3. Apply a valid discount code.<br>4. Verify the discount is applied.                               | Total price is updated with the discount applied.                           | Open       |
| TC-018           | Verify checkout without applying discount code                     | 1. Add products to the cart.<br>2. Proceed to checkout without applying any discount code.<br>3. Confirm the payment.                                          | The total price is calculated without any discount.                         | Open       |
| TC-019           | Verify email notification after successful payment                 | 1. Complete the checkout process.<br>2. Check email for order confirmation.                                                                                    | Order confirmation email is received with order details.                    | Open       |

---

## 5. **Order Management and Tracking**

| **Test Case ID** | **Test Case Description**                                          | **Test Steps**                                                                                                                                                 | **Expected Result**                                                        | **Status**  |
|------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------|
| TC-020           | Verify order history page                                          | 1. Log in.<br>2. Navigate to "My Orders" page.<br>3. Verify the order list.                                                                                     | All previously placed orders are displayed in order history.                | Open       |
| TC-021           | Verify order tracking for a completed order                        | 1. Place an order.<br>2. Go to "My Orders" page.<br>3. Select an order and check the order status.                                                             | The order status (e.g., "Shipped", "Delivered") is correctly displayed.      | Open       |

---

## 6. **Admin Features**

| **Test Case ID** | **Test Case Description**                                          | **Test Steps**                                                                                                                                                 | **Expected Result**                                                        | **Status**  |
|------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------|
| TC-022           | Verify adding a new product as admin                               | 1. Log in as admin.<br>2. Navigate to the "Add Product" page.<br>3. Enter product details.<br>4. Save the product.                                             | Product is successfully added and displayed in the product catalog.         | Open       |
| TC-023           | Verify editing an existing product as admin                        | 1. Log in as admin.<br>2. Navigate to the product list.<br>3. Select a product to edit.<br>4. Modify the product details.<br>5. Save the changes.              | Product details are successfully updated.                                   | Open       |
| TC-024           | Verify deleting a product as admin                                 | 1. Log in as admin.<br>2. Navigate to the product list.<br>3. Select a product to delete.<br>4. Confirm deletion.                                              | Product is successfully deleted from the catalog.                           | Open       |
| TC-025           | Verify user management (activation/deactivation)                   | 1. Log in as admin.<br>2. Navigate to the user management page.<br>3. Activate or deactivate a user.<br>4. Verify the user's status is updated.                | User's status is updated correctly (activated/deactivated).                 | Open       |

---

### Conclusion

This detailed list of **test cases** for an **e-commerce web application** covers major functionalities such as user authentication, product search, shopping cart management, checkout process, and admin features. Each test case includes the **test case description**, **test steps**, and the **expected result** to ensure comprehensive testing.
