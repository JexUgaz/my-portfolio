# Arquitectura de la solución

La plataforma está compuesta por tres servicios independientes:

- **Frontend SPA:** capa de interacción con el usuario.
- **Backend API:** núcleo de negocio y orquestación.
- **Risk Entity Scraper:** servicio especializado en extracción de información externa.

```mermaid
flowchart TD

    User([Usuario])

    Frontend[Frontend SPA<br/>React + TypeScript]

    Backend[Backend API<br/>ASP.NET Core]

    Database[(SQL Server)]

    Scraper[Risk Entity Scraper<br/>TypeScript + Puppeteer]

    Browser[Chromium]

    Sources[(Risk Sources)]

    User --> Frontend
    Frontend --> Backend
    Backend --> Database
    Backend --> Scraper
    Scraper --> Browser
    Browser --> Sources
```

# Comunicación entre servicios

## Frontend → Backend

La comunicación entre la aplicación web y la API se realiza mediante HTTPS.

Características principales:

- El acceso está restringido mediante **CORS** configurado por dominios permitidos.
- La autenticación utiliza **JWT almacenado en cookies HttpOnly y Secure**.
- La comunicación está preparada para ejecutarse únicamente sobre HTTPS.

```mermaid
sequenceDiagram

    actor User
    participant Frontend
    participant API as Backend API

    User->>Frontend: Accede a la aplicación
    Frontend->>API: Request HTTPS + JWT Cookie
    API-->>Frontend: Response autorizada
    Frontend-->>User: Muestra información
```

---

## Backend → Risk Entity Scraper

## La comunicación interna entre Backend y Scraper está protegida mediante autenticación de servicio.

```mermaid
flowchart LR

    API[Backend API]

    Auth[Internal Token]

    Scraper[Scraper Service]

    API --> Auth
    Auth --> Scraper
```

Esto permite que:

- El scraper no sea expuesto públicamente.
- Solo servicios autorizados puedan ejecutar búsquedas.
- La lógica de extracción permanezca desacoplada del backend principal.

## Flujo de screening

El backend no realiza scraping directamente.

La responsabilidad de extracción está aislada en un servicio independiente.

El flujo es:

1. Usuario ejecuta una búsqueda de screening.
2. Frontend envía la solicitud al backend.
3. Backend valida la solicitud y consume el servicio scraper.
4. El scraper ejecuta la búsqueda en fuentes externas.
5. Los resultados retornan al backend y finalmente al usuario.

```mermaid
sequenceDiagram

    participant UI as Frontend
    participant API as Backend
    participant Scraper
    participant Web as External Sources

    UI->>API: Screening Request
    API->>Scraper: /internal/screening
    Scraper->>Web: Web Scraping
    Web-->>Scraper: Entity Results
    Scraper-->>API: Screening Response
    API-->>UI: Risk Results
```
