import {
  require_ssr
} from "/build/_shared/chunk-RWIXQJTD.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-X5FEU4FX.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-UYFT55SY.js";

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
//# sourceMappingURL=/build/routes/index-BFWI4HOG.js.map
