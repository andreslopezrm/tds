import {
  Link,
  Outlet,
  init_esm
} from "/build/_shared/chunk-6WBNZMUB.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// browser-route-module:routes/dashboard.tsx?browser
init_react();

// app/routes/dashboard.tsx
init_react();
init_esm();
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "Dashboard"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "stats"
  }, "stadistics"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link, {
    to: "products"
  }, "products"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link, {
    to: "perfil"
  }, "perfil")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  DashboardRoute as default
};
//# sourceMappingURL=/build/routes/dashboard-ARKKX6NR.js.map
