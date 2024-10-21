# Unit Test Report for Online Store Web Application

**Test Framework**: xUnit  
**Test Coverage Tool**: Coverlet

---

## Summary

| **Total Tests** | **Passed** | **Failed** | **Skipped** | **Coverage** |
|:---------------:|:----------:|:----------:|:-----------:|:------------:|
| 50              | 47         | 2          | 1           | 85%          |

---

## Test Results

### 1. User Management Tests

| **Test Case**                           | **Status** | **Details**                                                                 |
|-----------------------------------------|------------|------------------------------------------------------------------------------|
| `RegisterUser_ValidData_ShouldSucceed`  | Passed     | User registration with valid data succeeded.                                 |
| `RegisterUser_DuplicateEmail_ShouldFail`| Passed     | Attempted registration with a duplicate email failed as expected.            |
| `Login_ValidCredentials_ShouldSucceed`  | Passed     | User login with correct credentials succeeded.                               |
| `Login_InvalidPassword_ShouldFail`      | Passed     | Login failed as expected with an incorrect password.                         |
| `UpdateUserProfile_ValidData_ShouldSucceed` | Passed  | User profile update succeeded with valid data.                               |
| `UpdateUserProfile_InvalidEmail_ShouldFail` | Failed   | Profile update failed as expected with an invalid email format.              |

---

### 2. Product Management Tests

| **Test Case**                                  | **Status** | **Details**                                                                 |
|------------------------------------------------|------------|------------------------------------------------------------------------------|
| `AddProduct_ValidData_ShouldSucceed`           | Passed     | New product added successfully with valid data.                              |
| `AddProduct_MissingName_ShouldFail`            | Passed     | Product addition failed due to missing required field (name).                |
| `GetProductById_ExistingProduct_ShouldSucceed` | Passed     | Retrieved existing product by ID successfully.                               |
| `GetProductById_NonExistentProduct_ShouldFail` | Passed     | Failed to retrieve a product with an invalid/non-existent ID as expected.    |
| `UpdateProduct_ValidData_ShouldSucceed`        | Passed     | Product update with valid data succeeded.                                    |
| `DeleteProduct_ExistingProduct_ShouldSucceed`  | Passed     | Successfully deleted an existing product.                                    |

---

### 3. Cart Management Tests

| **Test Case**                                 | **Status** | **Details**                                                                  |
|-----------------------------------------------|------------|-------------------------------------------------------------------------------|
| `AddToCart_ValidProduct_ShouldSucceed`        | Passed     | Product added to cart successfully.                                           |
| `AddToCart_ProductOutOfStock_ShouldFail`      | Passed     | Adding product to cart failed as expected due to insufficient stock.          |
| `RemoveFromCart_ValidItem_ShouldSucceed`      | Passed     | Item removed from cart successfully.                                          |
| `GetCartItems_ValidUser_ShouldReturnItems`    | Passed     | Cart items retrieved for valid user.                                          |
| `UpdateCartItemQuantity_ValidItem_ShouldSucceed` | Passed   | Updated item quantity in the cart successfully.                               |

---

### 4. Order Management Tests

| **Test Case**                                | **Status** | **Details**                                                                 |
|----------------------------------------------|------------|------------------------------------------------------------------------------|
| `PlaceOrder_ValidCart_ShouldSucceed`         | Passed     | Order placed successfully with a valid cart.                                 |
| `PlaceOrder_EmptyCart_ShouldFail`            | Passed     | Order placement failed due to empty cart.                                    |
| `GetOrderDetails_ValidOrderId_ShouldSucceed` | Passed     | Successfully retrieved order details for a valid order ID.                   |
| `GetOrderDetails_InvalidOrderId_ShouldFail`  | Passed     | Failed to retrieve order details for an invalid order ID as expected.        |
| `CancelOrder_ValidOrderId_ShouldSucceed`     | Skipped    | Test skipped due to temporary deactivation of cancellation functionality.    |

---

### 5. Payment Management Tests

| **Test Case**                                   | **Status** | **Details**                                                                 |
|-------------------------------------------------|------------|------------------------------------------------------------------------------|
| `ProcessPayment_ValidOrder_ShouldSucceed`       | Passed     | Payment processed successfully for a valid order.                            |
| `ProcessPayment_InvalidPaymentDetails_ShouldFail`| Failed     | Payment processing failed due to invalid payment details.                    |
| `RefundPayment_ValidOrder_ShouldSucceed`        | Passed     | Payment refund processed successfully for a valid order.                     |
| `RefundPayment_InvalidOrderId_ShouldFail`       | Passed     | Refund failed for an invalid order ID as expected.                           |

---

## Failed Tests Analysis

- **Test Case**: `UpdateUserProfile_InvalidEmail_ShouldFail`
  - **Reason**: The validation for email format in the user profile update was not triggered correctly.
  - **Fix**: Investigate and update email validation logic in `UpdateProfile()` method.

- **Test Case**: `ProcessPayment_InvalidPaymentDetails_ShouldFail`
  - **Reason**: The payment gateway mock service returned an unexpected response format, leading to test failure.
  - **Fix**: Update the mock service response to match expected API format.

---

## Skipped Tests

- **Test Case**: `CancelOrder_ValidOrderId_ShouldSucceed`
  - **Reason**: The order cancellation feature is temporarily disabled for further testing with the shipping module.
  - **Resolution**: The test will be re-enabled once the shipping module integration is complete.

---

## Test Coverage Summary

- **User Management**: 95%
- **Product Management**: 90%
- **Cart Management**: 85%
- **Order Management**: 80%
- **Payment Management**: 78%

---

## Conclusion

- The majority of the unit tests passed, ensuring core functionalities like user management, product listing, and cart operations are stable.
- Two tests failed and require fixes related to user profile validation and payment processing.
- One test was skipped due to temporarily disabled functionality, which will be tested in the next phase.
- The overall test coverage stands at **85%**, with some areas requiring more extensive test coverage, particularly in payment and order management.
