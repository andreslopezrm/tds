import {
  require_ssr
} from "/build/_shared/chunk-KI6VKGMH.js";
import {
  require_dist
} from "/build/_shared/chunk-IPP4XDWJ.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  __toESM,
  init_esm,
  init_react
} from "/build/_shared/chunk-PQV6DCII.js";

// browser-route-module:root.tsx?browser
init_react();

// app/root.tsx
init_react();
init_esm();
var import_ssr = __toESM(require_ssr());
var import_remix = __toESM(require_dist());
var import_remix2 = __toESM(require_dist());

// app/styles/app.css
var app_default = "/build/_assets/app-XZFIQKEF.css";

// app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Tip Land",
  viewport: "width=device-width,initial-scale=1"
});
var CatchBoundary = (0, import_remix2.ClerkCatchBoundary)();
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
var root_default = (0, import_remix.ClerkApp)(App);
export {
  CatchBoundary,
  root_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-MF7DU2GA.js.map
