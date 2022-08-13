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

// app/components/dash-navbar.tsx
init_react();
init_esm();
function DashNavbar() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-gray-100 p-3 shadow md:px-5 md:py-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center md:gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "30"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "hidden uppercase font-extrabold md:block"
  }, "Tip Land")), /* @__PURE__ */ React.createElement("hr", {
    className: "hidden md:block mt-3"
  }), /* @__PURE__ */ React.createElement("div", null, "Menu"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "tips"
  }, "Tips")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "tips"
  }, "Stats")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "tips"
  }, "Developer")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "tips"
  }, "Perfil")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "tips"
  }, "Logout"))));
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
//# sourceMappingURL=/build/routes/dashboard-R4Y76HU5.js.map
