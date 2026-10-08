# AI Agent Platform Lab — Phase 1
A minimal Node.js service with a `/health` endpoint for readiness checks.

## Local
Requires Node.js 22+.
```sh
npm install
npm test
npm run lint
npm start
```
Visit http://localhost:3000/ . `GET /health` returns HTTP 200 with JSON `{"status":"ok","version":"0.1.0"}`.

## First agent issue
**Goal:** Add `GET /health` for ECS/ALB readiness checks.

**Acceptance criteria:**
1. `GET /health` returns HTTP 200 with JSON `{"status":"ok","version":"0.1.0"}`.
2. It returns `Content-Type: application/json`.
3. Automated tests verify the route and response.
4. Existing root and unknown-route behavior remains unchanged.
5. `npm test` and `npm run lint` pass.

**Out of scope:** AWS resources, authentication, GitHub workflows, unrelated refactors.

Assign this issue to Codex using the supported Codex/GitHub integration, and review its PR.

## Before merge
In GitHub repository settings, protect `main`: require PRs, one human review, and the `test` status check. Enable the checks only after the first run reports their exact names.

## Later phases
Terraform ECS/Fargate/ALB/ECR; OIDC-based GitHub Actions deployment; CloudWatch alarms; rollback; isolated agent runner. None are provisioned in this starter.
