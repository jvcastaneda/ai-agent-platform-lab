import test from "node:test";
import assert from "node:assert/strict";
import { handler } from "../src/server.js";

test("GET /health returns readiness status as JSON", () => {
  let status;
  let headers;
  let body;
  const res = {
    writeHead(code, responseHeaders) { status = code; headers = responseHeaders; },
    end(text) { body = text; }
  };
  handler({ url: "/health", method: "GET" }, res);
  assert.equal(status, 200);
  assert.equal(headers["content-type"], "application/json");
  assert.deepEqual(JSON.parse(body), { status: "ok", version: "0.1.0" });
});

test("GET / returns the existing service information", () => {
  let status;
  let headers;
  let body;
  const res = {
    writeHead(code, responseHeaders) { status = code; headers = responseHeaders; },
    end(text) { body = text; }
  };
  handler({ url: "/", method: "GET" }, res);
  assert.equal(status, 200);
  assert.equal(headers["content-type"], "application/json");
  assert.deepEqual(JSON.parse(body), { service: "ai-agent-platform-lab", version: "0.1.0" });
});

test("POST /health returns 404", () => {
  let status;
  let body;
  const res = {
    writeHead(code) { status = code; },
    end(text) { body = text; }
  };
  handler({ url: "/health", method: "POST" }, res);
  assert.equal(status, 404);
  assert.deepEqual(JSON.parse(body), { error: "not found" });
});

test("unknown route returns 404", () => {
  let status;
  let body = "";
  const res = {
    writeHead(code) { status = code; },
    end(text) { body = text; }
  };
  handler({ url: "/unknown", method: "GET" }, res);
  assert.equal(status, 404);
  assert.deepEqual(JSON.parse(body), { error: "not found" });
});
