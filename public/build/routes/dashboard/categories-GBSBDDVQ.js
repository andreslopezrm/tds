import {
  require_ssr
} from "/build/_shared/chunk-ZI376TGU.js";
import {
  DashHeader
} from "/build/_shared/chunk-JYLYC35L.js";
import "/build/_shared/chunk-5647L2W7.js";
import {
  React,
  __commonJS,
  __toESM,
  init_esm,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-27P3YZSQ.js";

// empty-module:~/db/category.server
var require_category = __commonJS({
  "empty-module:~/db/category.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard/categories.tsx?browser
init_react();

// app/routes/dashboard/categories.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_category = __toESM(require_category());
function DashboardCategoryRoute() {
  const { categories } = useLoaderData();
  console.log(categories);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }));
}
export {
  DashboardCategoryRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/categories-GBSBDDVQ.js.map
