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

// empty-module:~/db/stats.server
var require_stats = __commonJS({
  "empty-module:~/db/stats.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard/stats.tsx?browser
init_react();

// app/routes/dashboard/stats.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_stats = __toESM(require_stats());
function DashboardStatsRoute() {
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Stats"
  }));
}
export {
  DashboardStatsRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/stats-R567MCCE.js.map
