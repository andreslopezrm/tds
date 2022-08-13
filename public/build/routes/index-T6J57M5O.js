import {
  require_ssr
} from "/build/_shared/chunk-TNUSZ5ZZ.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-6WBNZMUB.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// empty-module:~/db/product.server
var require_product = __commonJS({
  "empty-module:~/db/product.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_product = __toESM(require_product());
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
//# sourceMappingURL=/build/routes/index-T6J57M5O.js.map
