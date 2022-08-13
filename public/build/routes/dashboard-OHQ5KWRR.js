import {
  Link,
  Outlet,
  React,
  init_esm,
  init_react
} from "/build/_shared/chunk-6KGKA7LL.js";

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
  }, "perfil")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  DashboardRoute as default
};
//# sourceMappingURL=/build/routes/dashboard-OHQ5KWRR.js.map
