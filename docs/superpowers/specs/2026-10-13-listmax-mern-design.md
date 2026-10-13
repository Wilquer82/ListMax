# ListMax MERN integration design

## Purpose and existing context

Unify the existing ListMax marketing site with an organizer application and a public guest experience, backed by a real API. The current repository already contains a React 18/Vite application with the public marketing page and routes for account and event-related screens. Preserve and extend that frontend rather than replacing it with Next.js.

The dashboard reference is a frontend-only preview. Its visual structure and described features are design input, not an existing backend contract. This project will own its data and business rules.

## Recommended approach

Use a single repository with the existing React/Vite frontend and a new `server/` application:

- Frontend: React 18, Vite, existing React Router routes and components.
- Backend: Node.js, Express, REST API under `/api/v1`, Mongoose models.
- Database: MongoDB, configurable through `MONGODB_URI`; local development and MongoDB Atlas are supported by configuration, not hard-coded assumptions.
- Authentication: email/password, password hashing, short-lived access JWTs and refresh tokens stored in secure, HTTP-only cookies. Protected organizer routes authorize by event ownership.
- Session persistence: refresh tokens are random, rotated on use, stored only as hashes in a `Session` collection, and revocable on logout.
- Realtime: Socket.IO attached to the Express HTTP server; authenticated organizer rooms and guest access scoped to a validated event invitation token.
- Uploads: an isolated storage adapter so local development and a production object-storage provider can be configured without changing event/photo business logic.

The browser consumes the API through a small frontend service layer configured by `VITE_API_URL`. Production secrets remain server-side. CORS is restricted to configured frontend origins.

## Product areas and data flow

1. **Marketing and account entry:** keep the existing public landing and routes. Login and registration submit to the Express API. Successful authentication leads to the organizer area.
2. **Organizer workspace:** authenticated API calls create and list events and manage their guests. The API derives the organizer identity from the session and rejects cross-owner access.
3. **Guest experience:** each event has a non-guessable public code. Personal invitation URLs include a random guest token in the URL fragment; only a hash is stored. The browser sends the token in an `X-Invitation-Token` header for public event lookup and in the RSVP request body. Public guest endpoints permit only guest actions such as RSVP. Organizer-only edits remain authenticated.
4. **Realtime and media, in later phases:** chat and notifications are persisted before Socket.IO events are emitted. Photo uploads use the storage adapter and moderation state; public clients can only see approved media.
5. **Check-in, in a later phase:** QR codes contain opaque guest invitation credentials, not personal details. The API validates them and records an auditable check-in method and timestamp.

## Initial delivery scope

The first implementation milestone is the smallest end-to-end vertical slice that joins the existing UI to real persistence:

- Express server configuration, health endpoint, validation, centralized error responses, and MongoDB connection.
- User registration/login/logout/session refresh and authorization middleware.
- Event create/list/read/update with owner checks and stable public event codes.
- Guest create/list/update/remove and RSVP status support, scoped to the owning event.
- A minimal public event/invitation page and RSVP action using a guest-specific invitation token.
- Connect existing account screens and add only the organizer event/guest screens needed to exercise the flow.
- Automated API tests for auth, ownership isolation, event CRUD, guest CRUD, and RSVP.

The milestone is complete when a user can register, sign in, create an event, add a guest, and see that guest's RSVP reflected in the organizer view using MongoDB-backed data.

## Subsequent phases

After the initial milestone, implement the remaining product areas as separate increments:

1. Complete organizer dashboard navigation, event setup, suppliers, gifts, and notifications.
2. Guest event page, personal invitation links, and RSVP experience.
3. Photo album, upload moderation, and storage-provider configuration.
4. Event chat and realtime notifications using Socket.IO.
5. QR check-in and installable PWA behavior.
6. Deployment configuration, seed data, operational documentation, and end-to-end verification.

Facial recognition is explicitly excluded from the initial product and remains an opt-in future feature requiring a separate privacy, consent, retention, and security review. QR check-in is the supported check-in method for the planned implementation.

## Core data model

- `User`: normalized unique email, password hash, display name, optional phone, timestamps.
- `Session`: user reference, refresh-token hash, expiration, revocation and rotation timestamps.
- `Event`: owner reference, name, type, date/time, location, cover image reference, unique public code, feature settings, timestamps.
- `Guest`: event reference, name, contact fields, group, party-size limit, RSVP status, attending count, check-in state, invitation-token hash, invitation expiry, timestamps.
- Later collections: `Supplier`, `Gift`, `Photo`, `ChatMessage`, `Notification`, and `CheckinLog`, each referencing its owning event and enforcing event-level authorization.

Use MongoDB indexes for normalized unique user email, unique public event code, event-scoped guest lookup, and hashed invitation token lookup. Store money as integer minor units (centavos) to avoid floating-point totals. Validate request bodies at the API boundary and use Mongoose schema constraints as a second layer.

## API and failure behavior

The initial API includes:

- `POST /api/v1/auth/register`, `/login`, `/logout`, and `/refresh`.
- `GET /api/v1/auth/me`.
- `GET/POST /api/v1/events`; `GET/PATCH/DELETE /api/v1/events/:eventId`.
- `GET/POST /api/v1/events/:eventId/guests`; `PATCH/DELETE /api/v1/events/:eventId/guests/:guestId`.
- `GET /api/v1/public/events/:publicCode` with `X-Invitation-Token` and `POST /api/v1/public/rsvp`, scoped to the event code and invitation token in the request body. The invitation token expires one day after the event start.
- `GET /api/v1/health` for process and database readiness.

Return consistent JSON errors with appropriate HTTP status codes. Validation errors are explicit; unauthorized and forbidden requests are distinguishable without revealing whether unrelated records exist. Do not silently substitute demo data when the API or database is unavailable. The frontend presents a visible error and retry path.

## Security and privacy

- Hash user passwords with a suitable password-hashing algorithm and invitation tokens before persistence.
- Keep JWT signing keys and database credentials in server environment variables; never expose them through Vite-prefixed variables.
- Use secure, HTTP-only, same-site cookies for access and refresh credentials; rotate and revoke refresh sessions; require origin checks and CSRF protection for cookie-authenticated mutations; rate-limit authentication and public RSVP routes; and strictly validate input.
- In production, serve the frontend and API from the same site (for example, sibling subdomains under the ListMax domain) so same-site session cookies work; configure the exact frontend origin for credentialed CORS.
- Enforce event ownership in server-side query paths, not only in the UI.
- Limit guest endpoints to the minimum fields and actions needed for invitation, RSVP, and event participation.
- Do not store face embeddings or enable face recognition in this scope.

## Verification

- Backend unit/integration tests use an isolated test database and cover valid and rejected requests, ownership boundaries, and RSVP transitions.
- Frontend lint and production build remain passing.
- A local smoke test exercises register -> login -> create event -> add guest -> RSVP -> updated guest status.
- Realtime, uploads, PWA installability, and deployment receive focused tests in their respective later phases.

## Assumptions and trade-offs

- Preserve the current Vite application and migrate incrementally; no framework rewrite.
- Use a separate backend process and same-repository `server/` folder to keep API dependencies and server secrets out of the browser bundle.
- Treat account authentication and organizer event ownership as required; guest access is limited to scoped invitation credentials.
- Use MongoDB as the requested source of persistence; no hosted-service-specific auth or realtime database is introduced.
- Complete all areas described in the existing full-stack briefing in phases, rather than claiming frontend preview data is already backed by an API.
