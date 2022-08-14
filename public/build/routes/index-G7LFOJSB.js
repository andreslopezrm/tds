import {
  require_ssr
} from "/build/_shared/chunk-KI6VKGMH.js";
import {
  Link,
  React,
  __toESM,
  init_esm,
  init_react
} from "/build/_shared/chunk-PQV6DCII.js";

// browser-route-module:routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Datos"), /* @__PURE__ */ React.createElement(Link, {
    to: "/sign-in"
  }, "Sign In"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link, {
    to: "/sign-up"
  }, "Sign Up"));
}
export {
  IndexRoute as default
};
//# sourceMappingURL=/build/routes/index-G7LFOJSB.js.map
