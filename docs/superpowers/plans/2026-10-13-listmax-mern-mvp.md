# ListMax MERN MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a MongoDB-backed account, event, guest invitation, and RSVP flow integrated with the existing ListMax React/Vite application.

**Architecture:** Keep the existing SPA and add a separately runnable Express API under `server/`. Mongoose persists users, revocable sessions, events, and guests; the frontend calls the API with same-site HTTP-only cookies through a small service layer. The first milestone includes a minimal public invitation/RSVP page, but defers realtime, photo storage, suppliers, gifts, PWA, QR check-in, and deployment-specific services.

**Tech Stack:** Existing React 18, Vite, React Router, Ant Design; Node.js, Express, MongoDB, Mongoose, Zod, bcryptjs, jsonwebtoken, Vitest, Supertest, mongodb-memory-server.

**Spec:** [2026-10-13-listmax-mern-design.md](../specs/2026-10-13-listmax-mern-design.md)

## Global Constraints

- Preserve the current Vite application and migrate incrementally; no framework rewrite.
- Use a separate backend process and same-repository `server/` folder to keep API dependencies and server secrets out of the browser bundle.
- Use MongoDB as the requested source of persistence; no hosted-service-specific auth or realtime database is introduced.
- The browser consumes the API through a small frontend service layer configured by `VITE_API_URL`.
- Keep JWT signing keys and database credentials in server environment variables; never expose them through Vite-prefixed variables.
- Enforce event ownership in server-side query paths, not only in the UI.
- Do not store face embeddings or enable face recognition in this scope.
- Return consistent JSON errors; do not silently substitute demo data when the API or database is unavailable.

## Review Focus

- Duplicate email differing only by letter case must be rejected without creating a second account.
- Refresh token replay after rotation or logout must not restore a revoked session.
- One organizer must not read or mutate another organizer's event or guests, even with valid object IDs.
- Invalid, expired, or cross-event invitation tokens must not disclose guest data or change RSVP state.
- Disconnected MongoDB or API failures must show a visible error in the UI instead of demo/success-shaped data.

---

## File Structure

- `server/package.json`: backend scripts and production/test dependencies.
- `server/.env.example`: backend-only environment variable names and safe local defaults.
- `server/src/app.js`: Express middleware and route composition, export `createApp()`.
- `server/src/server.js`: environment loading, MongoDB connection, and HTTP listener lifecycle.
- `server/src/config/env.js`: validated server configuration.
- `server/src/db/connect.js`: MongoDB connection helper.
- `server/src/middleware/`: authentication, CSRF, validation, rate limiting, and JSON error handling.
- `server/src/models/`: Mongoose `User`, `Session`, `Event`, and `Guest` schemas.
- `server/src/routes/`: health, auth, events, guests, and public invitation endpoints.
- `server/src/services/`: auth/session, event, guest, and invitation business logic.
- `server/tests/`: isolated MongoDB-backed API tests using Vitest and Supertest.
- `.env.example`: frontend API URL for local development; no credentials.
- `src/lib/api.js`: credentialed API request helper, CSRF handling, and normalized errors.
- `src/auth/AuthProvider.jsx`: current-user loading, login, registration, logout, and refresh behavior.
- `src/pages/login.jsx`, `src/pages/register.jsx`: connect existing account forms to the API.
- `src/pages/dashboard.jsx`: organizer event list and create-event form.
- `src/pages/eventGuests.jsx`: event guest list/add/update/remove and invitation-link copy.
- `src/pages/publicInvitation.jsx`: public event summary and guest RSVP.
- `src/components/ProtectedRoute.jsx`: guard organizer-only routes.
- `src/main.jsx`: add new routes and wrap the app in `AuthProvider`.
- `src/test/`: frontend tests and setup if needed.
- `package.json`: frontend test script and root convenience scripts for running both apps.
- `README.md`: local MERN startup, environment setup, and MVP flow.
- `.eslintrc.cjs`: Node globals for `server/**/*.js`, while preserving browser lint settings for React source.

## Task 1: Create the Express server and database health boundary

**Files:**
- Create: `server/package.json`
- Create: `server/.env.example`
- Create: `server/src/config/env.js`
- Create: `server/src/db/connect.js`
- Create: `server/src/app.js`
- Create: `server/src/server.js`
- Create: `server/src/routes/health.js`
- Create: `server/src/middleware/errorHandler.js`
- Create: `server/tests/health.test.js`
- Create: `server/tests/testDatabase.js`
- Create: `server/vitest.config.js`

**Interfaces:**
- Produces: `createApp() -> ExpressApplication`, `connectDatabase(uri) -> Promise<void>`, and `GET /api/v1/health -> { status, database }`.
- Health returns HTTP 200 and `{ "status": "ok", "database": "connected" }` only when Mongoose is connected; otherwise it returns HTTP 503 with a non-sensitive `{ "status": "unavailable", "database": "disconnected" }`.
- `server/package.json` is ESM (`"type": "module"`), with `dev: node --watch src/server.js`, `start: node src/server.js`, and `test: vitest`. Runtime packages: `express`, `mongoose`, `dotenv`, `cors`, `helmet`, `cookie-parser`, `express-rate-limit`, and `zod`; test packages: `vitest`, `supertest`, and `mongodb-memory-server`.

- [ ] **Step 1: Write health endpoint tests**

Add tests named `returns_ready_when_mongodb_is_connected` and `returns_unavailable_when_mongodb_is_disconnected`. Assert the exact status codes and JSON response shapes defined above.

- [ ] **Step 2: Run tests and verify they fail**

Run: `npm --prefix server test -- --run tests/health.test.js`
Expected: FAIL because the server package and health route do not exist yet.

- [ ] **Step 3: Add the server package, validated configuration, app factory, database connection, and health route**

Use `MONGODB_URI`, `CLIENT_ORIGIN`, `JWT_ACCESS_SECRET`, and `NODE_ENV`; fail startup with a clear configuration error if required secrets are missing. Configure Helmet, explicit-origin credentialed CORS, JSON body size limit, `/api/v1` route mounting, and centralized errors shaped as `{ "error": { "code": "…", "message": "…" } }`. Export `createApp()` without listening so Supertest can use it.

- [ ] **Step 4: Run backend tests**

Run: `npm --prefix server test -- --run tests/health.test.js`
Expected: PASS for both connected and disconnected health states.

- [ ] **Step 5: Commit**

```bash
git add server
git commit -m "feat: add ListMax Express API foundation"
```

## Task 2: Implement account authentication and revocable sessions

**Files:**
- Create: `server/src/models/User.js`
- Create: `server/src/models/Session.js`
- Create: `server/src/services/authService.js`
- Create: `server/src/routes/auth.js`
- Create: `server/src/middleware/requireAuth.js`
- Create: `server/src/middleware/requireCsrf.js`
- Create: `server/tests/auth.test.js`
- Modify: `server/src/app.js`
- Modify: `server/src/config/env.js`
- Modify: `server/.env.example`

**Interfaces:**
- Consumes: `createApp()` and Mongo connection from Task 1.
- Produces: `POST /api/v1/auth/register`, `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, `POST /api/v1/auth/logout`, `GET /api/v1/auth/me`, and `GET /api/v1/auth/csrf`.
- Registration body: `{ name, email, password, phone? }`; login body: `{ email, password }`; current-user response: `{ user: { id, name, email, phone? } }`.
- Add `bcryptjs` and `jsonwebtoken` as runtime dependencies; use Node's built-in `crypto` for opaque refresh tokens and hashes.
- Access JWT expires in 15 minutes; refresh sessions expire in 7 days. Store only a hash of each opaque refresh token in `Session`; rotate it on every refresh and revoke it on logout.
- Cookie names are `listmax_access`, `listmax_refresh`, and `listmax_csrf`. Access and refresh cookies are HTTP-only, `SameSite=Lax`, and `Secure` in production. Cookie-authenticated mutations require matching `listmax_csrf` and `X-CSRF-Token` values and an allowed `Origin`.

- [ ] **Step 1: Write auth tests**

Add tests named `registers_user_with_normalized_email_and_hashed_password`, `rejects_duplicate_email_case_insensitively`, `rejects_invalid_credentials`, `rotates_refresh_session_and_rejects_replay`, `logout_revokes_refresh_session`, `requires_csrf_for_cookie_mutations`, and `returns_only_safe_current_user_fields`.

- [ ] **Step 2: Run auth tests and verify they fail**

Run: `npm --prefix server test -- --run tests/auth.test.js`
Expected: FAIL because auth models, routes, and services do not exist yet.

- [ ] **Step 3: Implement user/session schemas, authentication service, and cookie middleware**

Normalize email to lowercase and trim it; require passwords of at least 12 characters and at most 72 UTF-8 bytes; hash passwords with bcryptjs cost 12; use random refresh tokens and store their SHA-256 hashes with user, expiry, and revocation state. Sign access JWTs with `JWT_ACCESS_SECRET`; validate request bodies with Zod; rate-limit login to 10 attempts per IP in 15 minutes and registration to 5 per IP per hour. The CSRF endpoint sets a random readable same-site CSRF cookie and returns its value. Never return password or token hashes.

- [ ] **Step 4: Run auth tests**

Run: `npm --prefix server test -- --run tests/auth.test.js`
Expected: PASS, including duplicate-email, token-rotation, logout, CSRF, and safe-user response cases.

- [ ] **Step 5: Commit**

```bash
git add server
git commit -m "feat: add secure ListMax account sessions"
```

## Task 3: Add owner-scoped event and organizer guest APIs

**Files:**
- Create: `server/src/models/Event.js`
- Create: `server/src/models/Guest.js`
- Create: `server/src/services/eventService.js`
- Create: `server/src/services/guestService.js`
- Create: `server/src/routes/events.js`
- Create: `server/src/routes/guests.js`
- Create: `server/tests/events.test.js`
- Create: `server/tests/guests.test.js`
- Modify: `server/src/app.js`

**Interfaces:**
- Consumes: `requireAuth` from Task 2; authenticated request identity is `req.auth.userId`.
- Produces: event and owner-scoped guest endpoints listed in the spec.
- Event create body: `{ name, type, startsAt, location }`; Guest create body: `{ name, email?, phone?, group?, partySizeLimit }`; `partySizeLimit` is a positive integer, the initial RSVP status is `pending`, and attending count is 0.
- Guest creation returns `{ guest, invitationUrl }` exactly once; build the URL as `${CLIENT_ORIGIN}/e/${publicCode}#token=${rawToken}` and persist only the hash of the random invitation token. RSVP state is one of `pending`, `confirmed`, or `declined`; check-in defaults to false.
- Store all money in integer minor units (centavos); no prices are introduced in this milestone.

- [ ] **Step 1: Write event and guest authorization tests**

Add tests named `creates_event_for_authenticated_owner`, `gets_event_by_id`, `lists_only_owners_events`, `updates_event`, `deletes_event_and_guests`, `rejects_cross_owner_event_read_and_mutation`, `creates_guest_with_one_time_invitation_url`, `gets_guest`, `lists_guests_for_owner_event`, `updates_guest_contact_fields`, `deletes_guest`, `rejects_cross_owner_guest_read_and_mutation`, and `rejects_guest_when_event_id_does_not_match`.

- [ ] **Step 2: Run tests and verify they fail**

Run: `npm --prefix server test -- --run tests/events.test.js tests/guests.test.js`
Expected: FAIL because the event/guest models and routes do not exist yet.

- [ ] **Step 3: Implement indexed schemas and owner-scoped services/routes**

Generate a non-guessable unique public event code and guest invitation token with Node `crypto`. Hash invitation tokens before storage. Query/update guests by both `_id` and `event` and events by both `_id` and `owner`; return 404 for records outside the current owner's scope. Validate ObjectIds and request bodies before querying MongoDB.

- [ ] **Step 4: Run event and guest tests**

Run: `npm --prefix server test -- --run tests/events.test.js tests/guests.test.js`
Expected: PASS, including attempts with valid IDs belonging to another owner and mismatched event IDs.

- [ ] **Step 5: Commit**

```bash
git add server
git commit -m "feat: add owner-scoped event and guest APIs"
```

## Task 4: Implement public event lookup and invitation-token RSVP

**Files:**
- Create: `server/src/routes/publicEvents.js`
- Create: `server/src/services/invitationService.js`
- Create: `server/tests/publicEvents.test.js`
- Modify: `server/src/app.js`
- Modify: `server/src/models/Guest.js`

**Interfaces:**
- Consumes: event/guest models and invitation-token hashes from Task 3.
- Produces: `GET /api/v1/public/events/:publicCode` with `X-Invitation-Token` and `POST /api/v1/public/rsvp`.
- Public event response contains only `{ event: { name, type, startsAt, location }, guest: { name, partySizeLimit, attendingCount, rsvpStatus } }` after guest-token verification. The GET token is sent in a header rather than a query string; RSVP body is `{ eventCode, invitationToken, status, attendingCount }`.
- The RSVP endpoint accepts `confirmed` or `declined`, validates attending count against `partySizeLimit`, and returns the updated safe guest RSVP fields. Invitation tokens expire one day after the event start.

- [ ] **Step 1: Write public invitation and RSVP tests**

Add tests named `returns_public_event_only_for_matching_invitation_token`, `rejects_invalid_and_expired_invitation_tokens`, `rejects_invitation_token_from_another_event`, `updates_rsvp_for_valid_invitation`, `rejects_attending_count_outside_invitation_limit`, and `does_not_return_contact_or_token_fields`.

- [ ] **Step 2: Run public tests and verify they fail**

Run: `npm --prefix server test -- --run tests/publicEvents.test.js`
Expected: FAIL because public invitation routes do not exist yet.

- [ ] **Step 3: Implement minimal public event and RSVP services**

Hash the presented token and match it with the guest and event code in the same query. Rate-limit RSVP to 10 attempts per IP in 15 minutes, validate all fields with Zod, and return safe projections only. Do not disclose whether a token belongs to a different event. Set the invitation expiry to one day after the event starts and reject invitations after that instant.

- [ ] **Step 4: Run public tests**

Run: `npm --prefix server test -- --run tests/publicEvents.test.js`
Expected: PASS for valid RSVP and all invalid, expired, mismatched, and over-limit token cases.

- [ ] **Step 5: Commit**

```bash
git add server
git commit -m "feat: add private guest invitation and RSVP flow"
```

## Task 5: Connect existing account forms to the MERN API

**Files:**
- Create: `src/lib/api.js`
- Create: `src/auth/AuthProvider.jsx`
- Create: `src/components/ProtectedRoute.jsx`
- Create: `src/test/setup.js`
- Create: `src/auth/AuthProvider.test.jsx`
- Modify: `src/pages/login.jsx`
- Modify: `src/pages/register.jsx`
- Modify: `src/main.jsx`
- Modify: `vite.config.js`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `.eslintrc.cjs`

**Interfaces:**
- Consumes: Task 2 auth endpoints.
- Produces: `apiRequest(path, options) -> Promise<JSON>`, `AuthProvider`, and `useAuth() -> { user, loading, login, register, logout, refresh }`.
- Requests use `credentials: "include"`; mutating requests first obtain the CSRF value and send `X-CSRF-Token`. API failures reject with `{ status, code, message }` and are rendered in the form.
- Registration joins the existing first/last-name inputs into `name`, submits optional phone, and validates matching email/password confirmation on the client. Remove the email-verification modal and third-party login buttons because no email/social provider is part of this milestone; do not claim verification or social login works.
- Remove the nonfunctional forgot-password action from the login form until password reset is implemented.
- Test runner uses Vitest, jsdom, React Testing Library, user-event, and jest-dom; define `npm test` in this task so the focused tests can run before Task 7 adds convenience scripts.

- [ ] **Step 1: Add frontend test infrastructure and failing auth-provider/form tests**

Add `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/user-event`, and `@testing-library/jest-dom`; configure the Vite test environment and setup file; add tests named `loads_current_user_from_api`, `keeps_logged_out_state_when_api_returns_401`, `submits_login_and_renders_api_error`, and `submits_registration_and_routes_to_dashboard`. Define `npm test` as `vitest` and set ESLint's Node environment only for `server/**/*.js`.

- [ ] **Step 2: Run frontend tests and verify they fail**

Run: `npm test -- --run src/auth/AuthProvider.test.jsx`
Expected: FAIL because the API client, auth context, and connected forms do not exist.

- [ ] **Step 3: Implement API client, auth provider, and controlled account forms**

Obtain CSRF state from `/api/v1/auth/csrf`, send cookies on same-origin API requests, validate required fields on the client for clear UX, and display server validation/auth errors. Remove direct DOM reads and navigation links that report successful login without an API response.

- [ ] **Step 4: Protect organizer routes and run frontend tests**

On provider mount, request `/auth/me`; if it returns 401, attempt one refresh and retry `/auth/me` once before showing a logged-out state. Use `ProtectedRoute` to redirect unauthenticated users to `/login`; add the provider to `src/main.jsx`; keep `/previa2024`, `/login`, and `/register` working.

Run: `npm test -- --run src/auth/AuthProvider.test.jsx`; expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src
git commit -m "feat: connect ListMax account screens to API"
```

## Task 6: Build the first organizer and guest RSVP screens

**Files:**
- Create: `src/pages/dashboard.jsx`
- Create: `src/pages/eventGuests.jsx`
- Create: `src/pages/publicInvitation.jsx`
- Create: `src/pages/dashboard.test.jsx`
- Create: `src/pages/eventGuests.test.jsx`
- Create: `src/pages/publicInvitation.test.jsx`
- Modify: `src/main.jsx`
- Modify: `src/components/navbar.jsx` only if needed to expose the authenticated dashboard entry point.

**Interfaces:**
- Consumes: `useAuth()` and `apiRequest()` from Task 5; event and guest APIs from Tasks 3-4.
- Produces: `/dashboard`, `/dashboard/events/:eventId/guests`, and `/e/:publicCode` React Router pages. The guest route reads the invitation token from the URL fragment `#token=...`, keeps it only in component memory, sends it in `X-Invitation-Token` for lookup, and in the RSVP body when responding.
- Event creation fields are `name`, `type`, `startsAt`, and `location`; guest add fields are `name`, optional email/phone/group, and `partySizeLimit`. RSVP submits `attendingCount` no greater than that limit.
- After creating a guest, show the one-time `invitationUrl` with a copy action; after navigation/refresh, do not claim the raw token can be retrieved again.

- [ ] **Step 1: Write failing screen tests**

Add tests named `shows_api_error_instead_of_demo_events`, `creates_event_and_opens_guest_management`, `creates_guest_and_exposes_one_time_invitation_link`, `loads_public_invitation_with_fragment_token`, `submits_rsvp_and_shows_updated_status`, and `does_not_render_invitation_details_for_invalid_token`.

- [ ] **Step 2: Run screen tests and verify they fail**

Run: `npm test -- --run src/pages/dashboard.test.jsx src/pages/eventGuests.test.jsx src/pages/publicInvitation.test.jsx`
Expected: FAIL because these screens and routes do not exist yet.

- [ ] **Step 3: Implement organizer event and guest management pages**

Use loading, empty, and visible error states. The event list is loaded from MongoDB-backed APIs; do not display hard-coded reference preview metrics or sample records. Guest list actions must use the event-scoped endpoints.

- [ ] **Step 4: Implement the public event invitation and RSVP page**

Load the event and guest context using the event code and invitation token. Render only the safe public event/guest fields, offer confirm/decline actions, and show the resulting RSVP status or an explicit error.

- [ ] **Step 5: Run screen tests**

Run: `npm test -- --run src/pages/dashboard.test.jsx src/pages/eventGuests.test.jsx src/pages/publicInvitation.test.jsx`
Expected: PASS for loading, empty, success, error, unauthorized, and invalid-invitation states.

- [ ] **Step 6: Commit**

```bash
git add src
git commit -m "feat: add organizer and guest RSVP screens"
```

## Task 7: Add end-to-end local setup and verify the vertical slice

**Files:**
- Create: `server/tests/flow.test.js`
- Create: `.env.example`
- Modify: `package.json`
- Modify: `README.md`
- Modify: `server/.env.example`

**Interfaces:**
- Consumes: complete API and UI from Tasks 1-6.
- Produces: root scripts `dev`, `dev:server`, `test`, and `test:server`; documented setup for separate frontend/backend terminals; smoke-tested register -> login -> create event -> add guest -> invitation RSVP -> updated organizer guest status.

- [ ] **Step 1: Write the full API flow test**

Add `completes_register_event_guest_invitation_rsvp_flow` using an isolated test database and assert the guest RSVP status becomes `confirmed` in the owner-scoped event guest list. Use `server/tests/testDatabase.js` to create and stop an in-memory MongoDB instance; each test suite must clean its collections and close Mongoose after completion.

- [ ] **Step 2: Run the flow test and verify it fails**

Run: `npm --prefix server test -- --run tests/flow.test.js`
Expected: FAIL only until route integration and session handling are complete; do not accept failures caused by external network access or shared persistent data.

- [ ] **Step 3: Add root scripts and update the README**

Document installing frontend and backend dependencies, setting `server/.env` from `server/.env.example` and root `.env` from `.env.example`, starting MongoDB locally or supplying a MongoDB Atlas URI, running both dev servers, the frontend API URL, and the exact local flow. Explain that production auth cookies require the frontend and API to share a site and that `CLIENT_ORIGIN` must be the exact frontend origin. Do not add real secrets or commit `.env`.

- [ ] **Step 4: Run targeted tests, lint, and production build**

Run:

```powershell
npm --prefix server test -- --run
npm test -- --run
npm run lint
npm run build
```

Expected: all backend/frontend tests pass, ESLint exits 0, and Vite prints a successful production build.

Manually smoke-test with a browser against both local processes: register an account, create an event, add a guest, open the copied invitation link in a private window, submit RSVP, then confirm the new status in the organizer guest list. Expected: no demo data is shown and invalid invitation/API failures are visible.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json README.md server src
git commit -m "test: verify ListMax MERN MVP flow"
```

## Scope after this plan

This plan does not implement suppliers, gifts, persisted notifications, photo uploads/moderation, Socket.IO chat, QR check-in, PWA support, facial recognition, social login, email/WhatsApp delivery, or production deployment. Each independent area requires its own scoped design and implementation plan before work begins.
