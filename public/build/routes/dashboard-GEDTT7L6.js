import {
  require_ssr
} from "/build/_shared/chunk-TNUSZ5ZZ.js";
import {
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

// app/components/dash-navbar.tsx
init_react();
function DashNavbar() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-gray-100 p-2"
  }, /* @__PURE__ */ React.createElement("div", null, "Tip"));
}

// app/routes/dashboard.tsx
var import_user = __toESM(require_user());
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-8 min-h-screen"
  }, /* @__PURE__ */ React.createElement(DashNavbar, null), /* @__PURE__ */ React.createElement("section", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  DashboardRoute as default
};
//# sourceMappingURL=/build/routes/dashboard-GEDTT7L6.js.map
