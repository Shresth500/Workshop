# Introduction to SDLC and V-Model

## Software Development Life Cycle (SDLC)

**Software Development Life Cycle (SDLC)** refers to a structured process that outlines the stages of creating a software product, from its inception to its deployment and maintenance. The goal of SDLC is to ensure that high-quality software is developed in a systematic, efficient, and cost-effective manner. It provides a clear path for developers, managers, and stakeholders to follow.

### Stages of SDLC:

1. **Requirement Gathering and Analysis**:
   - In this phase, the business requirements are gathered from stakeholders, customers, or end-users. The focus is on understanding what the software needs to accomplish.
   - **Output**: [Requirement Specification Document](./artifacts/01-requirements-specification-document.md).

2. **Feasibility Study**:
   - In this step, a thorough analysis of the technical, operational, and financial feasibility of the project is conducted.
   - **Output**: [Feasibility Report](./artifacts/02-feasibility-report.md).

3. **System Design**:
   - The system’s architecture and design are created based on the requirements. This includes the hardware and software platforms, database design, and system interfaces.
   - **Output**: Design Document ([High-Level Design (HLD)](./artifacts/03-hld.md) and [Low-Level Design (LLD)](./artifacts/04-lld.md)).

4. **Implementation (Coding)**:
   - Developers start writing code based on the designs. The software is built in small modules and later integrated.
   - **Output**: Working Code.

5. **Testing**:
   - After coding, the software is thoroughly tested to find and fix any defects or issues.
   - Types of testing: Unit Testing, Integration Testing, System Testing, User Acceptance Testing (UAT), etc.
   - **Output**: [Test Reports](./artifacts/05-unit-test-report.md) and Bug Fixes.

6. **Deployment**:
   - The software is deployed into a production environment where the end users start using it.
   - **Output**: Deployed Software.

7. **Maintenance**:
   - After deployment, any issues that arise or enhancements needed are addressed during maintenance.
   - Types: Corrective, Adaptive, Perfective, and Preventive Maintenance.

---

## V-Model (Verification and Validation Model)

The **V-Model** (Validation and Verification Model) is an extension of the traditional Waterfall Model, emphasizing a simultaneous process of development and testing. Unlike the linear nature of the Waterfall Model, the V-Model visualizes the development lifecycle as a "V," highlighting the importance of testing at each stage.

![Verification and Validation](https://media.geeksforgeeks.org/wp-content/uploads/20231030123258/software-Testing-Tutorial-SDLC-V-model.webp "A detailed illustration of the V-Model of Software Development Life Cycle (SDLC). The diagram should show a V-shape with two arms: the left side representing Verification phases and the right side representing Validation phases. The left side should include phases such as Requirement Analysis, System Design, and Architectural Design, while the right side should have phases like Coding, Unit Testing, Integration Testing, System Testing, and User Acceptance Testing. The connection between both arms should be clearly shown, with arrows and labels at each step. Source: Geeks for geeks")

### Key Concepts of the V-Model:

1. **Verification**:
   - This refers to the process of reviewing and validating the outputs of each development stage to ensure that the software is built correctly.
   - It is essentially checking if the system complies with requirements and design specifications.

2. **Validation**:
   - Validation is the process of evaluating the final product to ensure it meets user expectations and needs.
   - It answers the question, "Are we building the right product?"

### Stages of the V-Model:

The left side of the "V" corresponds to the **development phases** (Verification), and the right side corresponds to the **testing phases** (Validation).

1. **Requirement Analysis** → **Acceptance Testing**:
   - During requirement analysis, the business needs are gathered.
   - Acceptance Testing verifies if the final software meets the business needs and expectations.

2. **System Design** → **System Testing**:
   - The system design phase defines the overall system architecture.
   - System Testing ensures that the integrated system functions as a whole and meets system-level requirements.

3. **High-Level Design (HLD)** → **Integration Testing**:
   - HLD involves creating an architectural blueprint for the software.
   - Integration Testing focuses on verifying the interaction between different modules or subsystems.

4. **Low-Level Design (LLD)** → **Unit Testing**:
   - LLD involves detailing the specific internal logic and implementation of each module.
   - Unit Testing ensures that individual components or units of code function correctly.

5. **Implementation (Coding)**:
   - This is the actual coding phase where developers create the software.
   - This phase bridges the verification and validation sides of the "V."

### Advantages of the V-Model:
- **Early Defect Detection**: Testing is initiated early in the process, ensuring issues are identified and fixed early.
- **Clear, Structured Process**: The model offers a well-defined, disciplined approach.
- **Parallel Testing**: Each development stage has a corresponding testing phase, leading to fewer chances of defects in the final product.

### Disadvantages of the V-Model:
- **Rigid and Sequential**: Like the Waterfall Model, the V-Model does not allow flexibility between stages.
- **Not Suitable for Complex and Evolving Projects**: Changes are hard to incorporate once a stage is completed.
- **Requires Comprehensive Requirements**: As the process is highly dependent on early requirement gathering, any change in requirements during later stages can be costly.

---

## Summary

- **SDLC** is the comprehensive process for software development, covering stages from requirement gathering to maintenance.
- **V-Model** emphasizes a strict relationship between each stage of development and corresponding testing, ensuring thorough verification and validation throughout the SDLC.

Both concepts play crucial roles in guiding software development in a systematic, efficient, and high-quality manner.