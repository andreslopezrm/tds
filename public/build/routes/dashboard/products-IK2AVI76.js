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

// empty-module:~/utils/params.server
var require_params = __commonJS({
  "empty-module:~/utils/params.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard/products.tsx?browser
init_react();

// app/routes/dashboard/products.tsx
init_react();
init_esm();
var import_params = __toESM(require_params());
function Dashboard() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "products dash"), /* @__PURE__ */ React.createElement(Link, {
    to: "/dashboard/products?offset=2"
  }, "Next"));
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard/products-IK2AVI76.js.map
