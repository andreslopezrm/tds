import {
  require_ssr
} from "/build/_shared/chunk-TNUSZ5ZZ.js";
import {
  Link,
  Outlet,
  init_esm
} from "/build/_shared/chunk-6WBNZMUB.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// empty-module:~/db/user.server
var require_user = __commonJS({
  "empty-module:~/db/user.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard.tsx?browser
init_react();

// app/routes/dashboard.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_user = __toESM(require_user());
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-8"
  }, /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement(Link, {
    to: "stats"
  }, "stadistics"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link, {
    to: "products"
  }, "products"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link, {
    to: "perfil"
  }, "perfil")), /* @__PURE__ */ React.createElement("section", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  DashboardRoute as default
};
//# sourceMappingURL=/build/routes/dashboard-T4JFEKVS.js.map
