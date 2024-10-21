# What is a Driver in Bottom-Up Integration Testing?

### Overview

In **Bottom-Up Integration Testing**, testing starts with the **lower-level modules** (usually utility or foundational modules) and gradually moves upwards toward the **higher-level modules** (such as user interfaces or controllers). A **driver** is a piece of code or a test harness that simulates the behavior of **higher-level modules** that are not yet integrated or developed. 

Drivers are used to call and test lower-level modules during the integration testing process when the higher-level components are not available.

### Definition of a Driver:
- A **driver** is a **temporary piece of code** that mimics or simulates the higher-level modules that are yet to be integrated in bottom-up integration testing.
- It is used to **call lower-level modules** and pass the necessary inputs to test their functionality.
- Once higher-level modules are developed and integrated, the driver is no longer needed and can be removed.

---

## Example of a Driver in Bottom-Up Integration Testing: E-commerce Application

Consider an **e-commerce application** with several modules, such as:

1. **Product Catalog Module** (low-level)
2. **Shopping Cart Module** (low-level)
3. **Order Processing Module** (high-level)
4. **Payment Gateway Integration Module** (high-level)
5. **User Interface Module** (high-level)

### Scenario: Testing the **Shopping Cart Module** (Low-Level Module)

In **bottom-up integration testing**, the **Shopping Cart Module** needs to be tested first, as it is one of the lower-level modules. However, the higher-level **Order Processing Module** and **User Interface Module**, which would typically interact with the Shopping Cart Module, are not yet developed.

#### Solution: Using a Driver

A **driver** is created to simulate the functionality of the higher-level modules (like the Order Processing or User Interface modules) to **test the Shopping Cart Module**.

### How the Driver Works:

1. **Driver Simulates High-Level Module Behavior**:
   - The driver simulates the behavior of the **Order Processing Module** by calling the Shopping Cart functions (e.g., adding items to the cart, removing items, calculating the total).
   - It sends the required **input data** (such as product ID, quantity, discount codes) to the Shopping Cart module as a higher-level module would do in a fully integrated system.

2. **Driver Captures and Validates Output**:
   - The driver also **validates the output** by comparing the actual results (e.g., cart total, number of items) with the expected results.
   - For example, if the driver adds a product to the cart, it will check whether the item was correctly added and if the cart total is updated accordingly.

3. **Facilitates Independent Testing**:
   - Since the **Order Processing Module** is not yet developed, the driver allows the Shopping Cart Module to be **tested in isolation** without waiting for the entire system to be completed.
   - The driver mimics the calls and inputs that the higher-level modules would provide in a fully functional system.

# Bottom-Up Integration Testing Example: E-commerce Application

### Scenario: Testing Shopping Cart with Driver for Order Processing Module

- **Shopping Cart Module** (Lower-level): Handles product selection, cart management, and total calculation.
- **Payment Gateway Module** (Lower-level): Processes payments.
- **Order Processing Module** (Higher-level): Manages order confirmation and payment integration, not yet developed.

In bottom-up integration testing, since the **Order Processing Module** is not yet developed, a **driver** will simulate its functionality to integrate and test the lower-level modules (Shopping Cart and Payment Gateway).

---

### Example Driver for Bottom-Up Integration Testing in Python

```python
# Example: Driver to test integration between Shopping Cart and Payment Gateway Module

class OrderProcessingDriver:
    def __init__(self):
        # Initialize the lower-level modules: Shopping Cart and Payment Gateway
        self.cart = ShoppingCart()
        self.payment_gateway = PaymentGateway()
    
    def simulate_order_processing(self):
        # Simulating Order Processing Module behavior in the driver
        
        # Step 1: Add items to the shopping cart
        product1 = Product(id=101, name="Laptop", price=1000.00)
        product2 = Product(id=102, name="Headphones", price=200.00)
        self.cart.add_item(product1, quantity=1)
        self.cart.add_item(product2, quantity=2)
        
        # Step 2: Calculate the total cost in the Shopping Cart
        total_amount = self.cart.calculate_total()
        print(f"Total cart value: ${total_amount}")
        
        # Step 3: Simulate payment processing (without actual Order Processing)
        payment_status = self.payment_gateway.process_payment(total_amount)
        
        # Step 4: Simulate Order Confirmation (done by Order Processing Module)
        if payment_status == "Success":
            print("Order processed successfully!")
        else:
            print("Order failed due to payment error.")

# Define the lower-level Shopping Cart and Payment Gateway modules

class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add_item(self, product, quantity):
        self.items.append((product, quantity))
    
    def calculate_total(self):
        return sum(product.price * quantity for product, quantity in self.items)

class PaymentGateway:
    def process_payment(self, amount):
        # Simulating payment processing logic (e.g., calling external API)
        print(f"Processing payment for ${amount}...")
        # Simulating success response from the payment gateway
        return "Success"

# Define Product class for simplicity
class Product:
    def __init__(self, id, name, price):
        self.id = id
        self.name = name
        self.price = price

# Driver instantiation and testing
driver = OrderProcessingDriver()
driver.simulate_order_processing()
