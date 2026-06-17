# Backend - Supplier Due Diligence

API desarrollada con **ASP.NET Core (.NET 9)** encargada de gestionar proveedores, ejecutar procesos de screening y centralizar la lógica de negocio de la plataforma de **Debida Diligencia (Due Diligence)**.

El servicio actúa como capa principal de orquestación entre el frontend, la base de datos y el servicio de análisis de entidades de riesgo, permitiendo automatizar la evaluación de proveedores contra fuentes de información externas.

## Valor para el negocio

Permite centralizar procesos críticos de gestión de proveedores, mejorar la trazabilidad de evaluaciones y reducir riesgos mediante validaciones automatizadas antes de iniciar relaciones comerciales.

## Aspectos técnicos destacados

- API REST desarrollada con ASP.NET Core (.NET 9).
- Arquitectura por capas orientada a dominio.
- Entity Framework Core con SQL Server.
- Autenticación mediante JWT con cookies HttpOnly y Secure.
- Comunicación segura entre servicios mediante autenticación interna.
- Integración con servicio externo de screening mediante APIs.
- Manejo global de excepciones y validaciones personalizadas.
- Migraciones de base de datos con Entity Framework Core.

## Código fuente

Proyecto open source disponible:

[🔗 Ver código fuente en GitHub](https://github.com/JexUgaz/SupplierDueDiligence-backend)
