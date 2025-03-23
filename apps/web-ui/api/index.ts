import { Hono } from "hono";

interface Env {
  ASSETS: Fetcher;
}

const app = new Hono<{ Bindings: Env }>();

app.post("/login", async function loginHandler(c) {
  const body = await c.req.text();
  const searchParams = new URLSearchParams(body);
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  // Validate inputs
  if (!email || !password) {
    return c.redirect("/login?error=MissingFields");
  }

  // TODO: Auth logic...
  const success = false; // placeholder
  if (!success) {
    return c.redirect("/login?error=InvalidCredentials");
  }

  // Success: redirect to app
  return c.redirect("/app");
});

app.all("*", (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
