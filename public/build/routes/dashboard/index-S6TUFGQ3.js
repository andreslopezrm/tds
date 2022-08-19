import {
  require_ssr
} from "/build/_shared/chunk-TNUSZ5ZZ.js";
import {
  DashHeader
} from "/build/_shared/chunk-LOWEPNLN.js";
import "/build/_shared/chunk-AM76S2GN.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-BOJHJ2SB.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// empty-module:~/db/dashboard.server
var require_dashboard = __commonJS({
  "empty-module:~/db/dashboard.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard/index.tsx?browser
init_react();

// app/routes/dashboard/index.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_dashboard = __toESM(require_dashboard());
function DashboardIndexRoute() {
  const { totalCategories } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Home"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-4xl m-auto mt-6"
  }, "cat: ", totalCategories));
}
export {
  DashboardIndexRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/index-S6TUFGQ3.js.map
