# Arquitectura de la Solución

La plataforma está compuesta por tres servicios independientes:

- Frontend SPA: Capa de interacción con el usuario.
- Backend API: Núcleo de negocio y orquestación.
- Risk Entity Scraper: Servicio especializado para la extracción de información desde fuentes externas.

```mermaid
sequenceDiagram

    actor Usuario
    participant Frontend
    participant API as Backend API

    Usuario->>Frontend: Accede a la aplicación
    Frontend->>API: Solicitud HTTPS + Cookie JWT
    API-->>Frontend: Respuesta autorizada
    Frontend-->>Usuario: Muestra información
```

# Comunicación entre Servicios

## Frontend -> Backend

La comunicación entre la aplicación web y la API se realiza mediante HTTPS.

Características principales:

- El acceso está restringido mediante CORS configurado con dominios permitidos.
- La autenticación utiliza JWT almacenado en cookies HttpOnly y Secure.
- La comunicación está configurada para ejecutarse exclusivamente sobre HTTPS.

```mermaid
sequenceDiagram

    participant Frontend
    participant API as Backend API

    Frontend->>API: Solicitud HTTPS con JWT
    Note over Frontend,API: Autenticación mediante cookie HttpOnly y Secure
    API-->>Frontend: Respuesta autenticada
```
---

## Backend -> Risk Entity Scraper

La comunicación interna entre el Backend y el Scraper está protegida mediante autenticación entre servicios.

```mermaid
flowchart LR

    API[Backend API]

    Auth[Token Interno]

    Scraper[Servicio Scraper]

    API --> Auth
    Auth --> Scraper
```

Esto garantiza que:

- El scraper no está expuesto públicamente.
- Solo los servicios autorizados pueden ejecutar búsquedas.
- La lógica de extracción permanece desacoplada del backend principal.

## Flujo de Screening

El backend no realiza scraping directamente.

La responsabilidad de extracción está aislada en un servicio independiente.

El flujo es el siguiente:

1. El usuario ejecuta una búsqueda de screening.
2. El Frontend envía la solicitud al Backend.
3. El Backend valida la solicitud y consume el servicio Scraper.
4. El Scraper ejecuta la búsqueda contra fuentes externas.
5. Los resultados regresan al Backend y finalmente al usuario.

```mermaid
sequenceDiagram

    participant UI as Frontend
    participant API as Backend
    participant Scraper
    participant Web as Fuentes Externas

    UI->>API: Solicitud de Screening
    API->>Scraper: /internal/screening
    Scraper->>Web: Web Scraping
    Web-->>Scraper: Resultados de Entidades
    Scraper-->>API: Respuesta de Screening
    API-->>UI: Resultados de Riesgo
```
