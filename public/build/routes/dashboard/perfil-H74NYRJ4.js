import {
  DashHeader
} from "/build/_shared/chunk-AUUDXCYK.js";
import {
  require_dist
} from "/build/_shared/chunk-AEXBR3RP.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-GZIBE3JS.js";

// browser-route-module:routes/dashboard/perfil.tsx?browser
init_react();

// app/routes/dashboard/perfil.tsx
init_react();
var import_remix = __toESM(require_dist());
function DashboardPerfilRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Perfil"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "auth auth-perfil mt-8"
  }, /* @__PURE__ */ React.createElement(import_remix.UserProfile, null)));
}
export {
  DashboardPerfilRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/perfil-H74NYRJ4.js.map
