# Static Testing vs Dynamic Testing

---

## 1. **What is Static Testing?**

### Overview
**Static Testing** is a type of software testing where the code, design documents, or other artifacts are **reviewed without executing the code**. It aims to identify **defects early** in the development lifecycle, such as coding errors, design flaws, or requirement ambiguities.

Static testing can involve **manual reviews** or **automated analysis** (like static code analysis tools). It focuses on ensuring that the deliverables meet the predefined standards and guidelines.

### Types of Static Testing:
1. **Reviews**:
   - **Walkthroughs**: Informal meeting where the author of a document explains it to stakeholders.
   - **Peer Reviews/Code Reviews**: A team member reviews the code written by another developer to ensure quality.
   - **Technical Reviews**: A formal review involving developers, testers, and project stakeholders.

2. **Static Code Analysis**:
   - Performed using tools to analyze the code for **syntax errors, coding standards violations, and vulnerabilities**.
   - **Examples**: SonarQube, Checkmarx, PMD.

3. **Requirement and Design Review**:
   - Validates the **completeness, correctness, and consistency** of requirements and design documents before development begins.

### Benefits of Static Testing:
- **Early Defect Detection**: Finds defects in design or requirements before coding starts, reducing rework.
- **Saves Time and Cost**: Fixing issues early is less expensive than identifying them in later phases.
- **Improves Code Quality**: Enforces coding standards and best practices.

### Limitations of Static Testing:
- Cannot identify **runtime issues** like memory leaks or performance bottlenecks.
- Requires skilled reviewers to identify subtle issues in code or documentation.

---

## 2. **What is Dynamic Testing?**

### Overview
**Dynamic Testing** involves **executing the software** to validate that the application behaves as expected during runtime. It focuses on testing **functional and non-functional aspects** by interacting with the software, feeding inputs, and observing outputs.

Dynamic testing ensures that the system meets **business requirements** and works correctly under different conditions. This type of testing includes **functional, performance, security, and usability tests**.

### Types of Dynamic Testing:
1. **Functional Testing**:
   - Verifies that the application behaves as expected based on business requirements.
   - **Examples**: Unit testing, integration testing, system testing, user acceptance testing (UAT).

2. **Non-Functional Testing**:
   - Evaluates aspects like **performance, security, and usability**.
   - **Examples**: Load testing, stress testing, security testing.

3. **Regression Testing**:
   - Ensures that new changes or bug fixes do not break existing functionality.

4. **Exploratory Testing**:
   - Testers explore the application without predefined test cases, identifying issues through **ad-hoc testing**.

### Benefits of Dynamic Testing:
- Detects **runtime defects** that cannot be identified through static testing.
- Validates that the system meets functional and non-functional requirements.
- Ensures that the software works correctly under real-world scenarios.

### Limitations of Dynamic Testing:
- **Time-Consuming**: Requires setting up environments and executing test cases.
- **Expensive**: Involves more resources and time than static testing.
- Defects detected in later stages can be **costlier to fix**.

---

## 3. **Comparison: Static Testing vs Dynamic Testing**

| **Aspect**              | **Static Testing**                        | **Dynamic Testing**                        |
|-------------------------|-------------------------------------------|-------------------------------------------|
| **Definition**           | Testing without executing the code.       | Testing by executing the code.            |
| **Purpose**              | Identifies defects early in requirements or design. | Validates functionality and performance during runtime. |
| **When Performed**       | Early in the development lifecycle.       | After the code is written and deployed.   |
| **Types**                | Code review, design review, static analysis. | Functional, performance, security, and usability testing. |
| **Cost of Fixing Issues**| Low (as issues are caught early).         | High (if defects are found late).         |
| **Tools**                | SonarQube, PMD, Checkmarx.                | Selenium, JMeter, Appium.                 |
| **Detects Runtime Issues**| No                                        | Yes                                       |

---

## 4. **Conclusion**

Both **Static Testing** and **Dynamic Testing** play crucial roles in ensuring software quality. 

- **Static Testing** is helpful in the early stages, identifying design flaws and coding errors without executing the code. 
- **Dynamic Testing** ensures that the application behaves correctly in real-world scenarios by executing it and checking functional and non-functional requirements.

Using a **combination of static and dynamic testing** ensures a **comprehensive testing strategy**, improving software quality and minimizing risks.
