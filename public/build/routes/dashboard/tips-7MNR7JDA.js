import {
  require_params
} from "/build/_shared/chunk-XY4ZCFMN.js";
import {
  DashHeader
} from "/build/_shared/chunk-7Q46JD7Y.js";
import "/build/_shared/chunk-FRO2JKJQ.js";
import {
  Link,
  React,
  __toESM,
  init_esm,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-47DFYYCO.js";

// browser-route-module:routes/dashboard/tips.tsx?browser
init_react();

// app/routes/dashboard/tips.tsx
init_react();
init_esm();
var import_params = __toESM(require_params());
function DashboardTipsRoute() {
  const { offset } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Tips"
  }), /* @__PURE__ */ React.createElement("h1", null, "products dash"), /* @__PURE__ */ React.createElement("p", null, "Offset: ", offset), /* @__PURE__ */ React.createElement(Link, {
    to: "/dashboard/tips?offset=2"
  }, "Next"));
}
export {
  DashboardTipsRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/tips-7MNR7JDA.js.map
