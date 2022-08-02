import { Application } from "https://deno.land/x/oak/mod.ts";
import { connect } from "./db.js";
import router from "./router.js";

connect();

const app = new Application();

app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE"
  );
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await next();
});

app.use(router.routes());
// app.use(router.allowedMethods());

console.log("http://localhost:3000/");
await app.listen({ port: 3000 });