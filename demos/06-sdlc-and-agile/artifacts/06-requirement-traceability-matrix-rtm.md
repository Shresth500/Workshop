# Requirement Traceability Matrix (RTM)

### Overview

A **Requirement Traceability Matrix (RTM)** is used to ensure that all requirements defined for a system are tested and covered by test cases. It maps **test cases** to **requirements** to track coverage and to verify that each requirement has been tested.

---

## Sample RTM for E-Commerce Web Application

| **Requirement ID** | **Requirement Description**                     | **Test Case ID** | **Test Case Description**                                         | **Test Status** |
|--------------------|--------------------------------------------------|------------------|-------------------------------------------------------------------|-----------------|
| REQ-001            | User should be able to register for an account   | TC-001           | Test user registration with valid and invalid data                | Passed          |
| REQ-002            | User should be able to log in                    | TC-002           | Test user login with valid and invalid credentials                | Passed          |
|                    |                                                  | TC-003           | Test "Forgot Password" functionality                              | Passed          |
| REQ-003            | User should be able to search for products       | TC-004           | Test product search with keywords and filters                     | Passed          |
|                    |                                                  | TC-005           | Test search results pagination and sorting options                | Passed          |
| REQ-004            | User should be able to add products to the cart  | TC-006           | Test adding products to the shopping cart                         | Passed          |
|                    |                                                  | TC-007           | Test cart update functionality (quantity, remove items)           | Passed          |
| REQ-005            | User should be able to apply discount codes      | TC-008           | Test applying valid and invalid discount codes                    | Failed          |
| REQ-006            | User should be able to checkout and place orders | TC-009           | Test checkout process with valid payment details                  | Passed          |
|                    |                                                  | TC-010           | Test invalid payment scenarios                                    | Passed          |
|                    |                                                  | TC-011           | Test order confirmation and email notification                    | Passed          |
| REQ-007            | User should be able to track their orders        | TC-012           | Test order tracking functionality                                 | Passed          |
| REQ-008            | Admin should be able to manage products          | TC-013           | Test product addition, editing, and deletion by admin             | Passed          |
|                    |                                                  | TC-014           | Test product category management by admin                         | Passed          |
| REQ-009            | Admin should be able to manage users             | TC-015           | Test user management (activation, deactivation) by admin          | Passed          |
|                    |                                                  | TC-016           | Test role assignment and permissions by admin                     | Passed          |

---

### Key Points:
- **Requirement ID**: A unique identifier for each requirement (e.g., REQ-001, REQ-002).
- **Requirement Description**: A detailed description of the requirement.
- **Test Case ID**: The unique identifier for each test case that corresponds to the requirement.
- **Test Case Description**: A detailed description of the test case that verifies the requirement.
- **Test Status**: Indicates whether the test case has **Passed**, **Failed**, or is **Pending**.

---

### Conclusion

This **sample RTM** for an e-commerce web application demonstrates how requirements are mapped to test cases, ensuring that all features and functionalities are covered and tested. The RTM helps track the progress of testing and identifies any gaps or failed tests that need attention.
