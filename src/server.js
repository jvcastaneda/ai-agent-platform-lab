import http from "node:http";

export function handler(req, res) {
  if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ status: "ok", version: "0.1.0" }));
  }
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ service: "ai-agent-platform-lab", version: "0.1.0" }));
  }
  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
}

if (process.env.NODE_ENV !== "test") {
  http.createServer(handler).listen(Number(process.env.PORT || 3000), "0.0.0.0");
}
