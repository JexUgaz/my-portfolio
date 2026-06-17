# Backend - Supplier Due Diligence

API developed with **ASP.NET Core (.NET 9)** responsible for supplier management, screening processes, and business logic orchestration within the **Due Diligence** platform.

The service acts as the main orchestration layer between the frontend, database, and risk entity analysis service, enabling automated supplier evaluation against external risk information sources.

## Business Value

Enables organizations to centralize critical supplier management processes, improve evaluation traceability, and reduce risks through automated validations before establishing business relationships.

## Technical Highlights

- REST API developed with ASP.NET Core (.NET 9).
- Layered architecture focused on domain-driven design principles.
- Entity Framework Core with SQL Server.
- JWT authentication using HttpOnly and Secure cookies.
- Secure service-to-service communication through internal authentication.
- Integration with external screening services through APIs.
- Global exception handling and custom validations.
- Database migrations managed with Entity Framework Core.

## Source Code

Open-source project available:

[🔗 View source code on GitHub](https://github.com/JexUgaz/SupplierDueDiligence-backend)
