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
  const { totalCategories, totalTips, totalStats } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Welcome"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container m-auto mt-6"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "md:flex md:gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "font-semibold text-lg mb-3"
  }, "Total Categories"), /* @__PURE__ */ React.createElement("p", {
    className: "font-extrabold text-3xl"
  }, totalCategories)), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "font-semibold text-lg mb-3"
  }, "Total Tips"), /* @__PURE__ */ React.createElement("p", {
    className: "font-extrabold text-3xl"
  }, totalTips)), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "font-semibold text-lg mb-3"
  }, "Total Request Today"), /* @__PURE__ */ React.createElement("p", {
    className: "font-extrabold text-3xl"
  }, totalStats))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold mt-6 text-xl"
  }, "Endpoint"), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative mt-6"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Parameter"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Type"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Required"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("p", null, "api_key")), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("p", null, "string")), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("p", null, "Yes"))), /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("p", null, "category_slug")), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("p", null, "string")), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("p", null, "No")))))))));
}
export {
  DashboardIndexRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/index-OP2UYEOS.js.map
