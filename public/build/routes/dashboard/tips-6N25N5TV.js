import {
  require_category,
  require_params
} from "/build/_shared/chunk-HNRZBEJ4.js";
import {
  require_ssr
} from "/build/_shared/chunk-NEJG427H.js";
import {
  DashHeader
} from "/build/_shared/chunk-7Q46JD7Y.js";
import "/build/_shared/chunk-FRO2JKJQ.js";
import {
  React,
  __commonJS,
  __toESM,
  init_esm,
  init_react,
  require_react,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-47DFYYCO.js";

// empty-module:~/db/tip.server
var require_tip = __commonJS({
  "empty-module:~/db/tip.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard/tips.tsx?browser
init_react();

// app/routes/dashboard/tips.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_react2 = __toESM(require_react());
var import_category = __toESM(require_category());
var import_tip = __toESM(require_tip());
var import_params = __toESM(require_params());
function DashboardTipsRoute() {
  const { total, tips, categories, offset, perPage } = useLoaderData();
  const data = useActionData();
  const { state } = useTransition();
  const isSubmiting = state === "submitting";
  const [showCreateModal, setShowCreateModal] = (0, import_react2.useState)(false);
  console.log({ total, tips, categories, offset, perPage });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Tips"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setShowCreateModal(true),
    className: "text-sm font-bold underline"
  }, " + New tip ")));
}
export {
  DashboardTipsRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/tips-6N25N5TV.js.map
