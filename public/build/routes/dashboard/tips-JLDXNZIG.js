import {
  ConfirmModalDelete,
  LoadMore,
  Modal,
  require_category,
  require_params
} from "/build/_shared/chunk-NUPH6IQX.js";
import {
  Toast
} from "/build/_shared/chunk-BQD37SUP.js";
import {
  require_ssr
} from "/build/_shared/chunk-TNUSZ5ZZ.js";
import {
  DashHeader
} from "/build/_shared/chunk-LOWEPNLN.js";
import "/build/_shared/chunk-AM76S2GN.js";
import {
  Form,
  init_esm,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-BOJHJ2SB.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-SPRLBSB7.js";

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
var import_react4 = __toESM(require_react());

// app/components/tip-list.tsx
init_react();

// app/components/tip-item.tsx
init_react();
function TipItem({ tip, onSelect, onDelete }) {
  const { entityId, description, category } = tip;
  return /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900"
  }, /* @__PURE__ */ React.createElement("p", null, description)), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, category == null ? void 0 : category.name), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex gap-2 text-black"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => onSelect(tip),
    className: "underline hover:opacity-80"
  }, "Edit"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => onDelete(entityId),
    className: "hover:opacity-80"
  }, "Delete"))));
}

// app/components/tip-list.tsx
function TipList({ tips, onSelect, onDelete }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative mt-6"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Description"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Category"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, tips.length > 0 ? tips.map((tip) => /* @__PURE__ */ React.createElement(TipItem, {
    tip,
    key: tip.entityId,
    onSelect,
    onDelete
  })) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 3
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mt-3"
  }, "Empty"))))));
}

// app/components/tip-modal-create.tsx
init_react();
init_esm();
function TipModalCreate({ isSubmiting, categories, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "categoryId",
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, "Category"), /* @__PURE__ */ React.createElement("select", {
    defaultValue: "",
    id: "categoryId",
    name: "categoryId",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    required: true
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "Choose a category"), categories.map(({ entityId, name }) => /* @__PURE__ */ React.createElement("option", {
    key: entityId,
    value: entityId
  }, name)))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description",
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, "Name"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    rows: 5,
    name: "description",
    maxLength: 245,
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end gap-2 mt-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    disabled: isSubmiting,
    onClick: () => onClose(),
    className: "text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50"
  }, "Cancel"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: isSubmiting,
    name: "intent",
    value: "create",
    className: "text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
  }, "Save ", isSubmiting ? "..." : ""))));
}

// app/components/tip-modal-edit.tsx
init_react();
init_esm();
function TipModalEdit({ tip, isSubmiting, categories, onClose }) {
  const { entityId, categoryId, description } = tip;
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "entityId",
    defaultValue: entityId
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "categoryId",
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, "Category"), /* @__PURE__ */ React.createElement("select", {
    defaultValue: categoryId,
    id: "categoryId",
    name: "categoryId",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    required: true
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "Choose a category"), categories.map(({ entityId: entityId2, name }) => /* @__PURE__ */ React.createElement("option", {
    key: entityId2,
    value: entityId2
  }, name)))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description",
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, "Name"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    rows: 5,
    name: "description",
    maxLength: 245,
    defaultValue: description,
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end gap-2 mt-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    disabled: isSubmiting,
    onClick: () => onClose(),
    className: "text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50"
  }, "Cancel"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: isSubmiting,
    name: "intent",
    value: "edit",
    className: "text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
  }, "Save ", isSubmiting ? "..." : ""))));
}

// app/routes/dashboard/tips.tsx
var import_category = __toESM(require_category());
var import_tip = __toESM(require_tip());
var import_params = __toESM(require_params());
function DashboardTipsRoute() {
  const { total, tips, categories, offset, perPage } = useLoaderData();
  const data = useActionData();
  const { state } = useTransition();
  const isSubmiting = state === "submitting";
  const [showCreateModal, setShowCreateModal] = (0, import_react4.useState)(false);
  const [message, setMessage] = (0, import_react4.useState)();
  const [tipEdit, setTipEdit] = (0, import_react4.useState)(null);
  const [tipDeleteId, setTipDeleteId] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
    if ((data == null ? void 0 : data.intent) === "create" && (data == null ? void 0 : data.tip)) {
      setShowCreateModal(false);
      setMessage("Create success");
    } else if ((data == null ? void 0 : data.intent) === "edit" && (data == null ? void 0 : data.tip)) {
      setTipEdit(null);
      setMessage("Update success");
    } else if ((data == null ? void 0 : data.intent) === "delete") {
      setTipDeleteId(null);
      setMessage("Delete success");
    }
  }, [data]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Tips"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setShowCreateModal(true),
    className: "text-sm font-bold underline"
  }, " + New tip ")), /* @__PURE__ */ React.createElement(TipList, {
    tips,
    onSelect: setTipEdit,
    onDelete: setTipDeleteId
  }), /* @__PURE__ */ React.createElement(LoadMore, {
    total,
    current: tips.length,
    path: "/dashboard/tips",
    offset,
    perPage
  }), showCreateModal ? /* @__PURE__ */ React.createElement(TipModalCreate, {
    isSubmiting,
    onClose: () => setShowCreateModal(false),
    categories
  }) : null, tipEdit ? /* @__PURE__ */ React.createElement(TipModalEdit, {
    isSubmiting,
    onClose: () => setTipEdit(null),
    tip: tipEdit,
    categories
  }) : null, tipDeleteId ? /* @__PURE__ */ React.createElement(ConfirmModalDelete, {
    entityId: tipDeleteId,
    isSubmiting,
    onClose: () => setTipDeleteId(null),
    message: "Are your sure delete this tip?"
  }) : null, message ? /* @__PURE__ */ React.createElement(Toast, {
    message,
    onClose: () => setMessage(null)
  }) : null);
}
export {
  DashboardTipsRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/tips-JLDXNZIG.js.map
