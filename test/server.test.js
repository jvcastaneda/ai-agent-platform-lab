import test from "node:test";
import assert from "node:assert/strict";
import { handler } from "../src/server.js";

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
