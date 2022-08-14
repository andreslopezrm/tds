import {
  LoadMore,
  Modal,
  Toast,
  require_category,
  require_params
} from "/build/_shared/chunk-B2FWGL4D.js";
import {
  require_ssr
} from "/build/_shared/chunk-NEJG427H.js";
import {
  DashHeader
} from "/build/_shared/chunk-7Q46JD7Y.js";
import "/build/_shared/chunk-FRO2JKJQ.js";
import {
  Form,
  React,
  __toESM,
  init_esm,
  init_react,
  require_react,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-47DFYYCO.js";

// browser-route-module:routes/dashboard/categories.tsx?browser
init_react();

// app/routes/dashboard/categories.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_react5 = __toESM(require_react());

// app/components/category-list.tsx
init_react();

// app/components/category-item.tsx
init_react();
function CategoryItem({ category, onSelect, onDelete }) {
  const { entityId, name, slug } = category;
  return /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, name), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, slug), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex gap-2 text-black"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => onSelect(category),
    className: "underline hover:opacity-80"
  }, "Edit"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => onDelete(entityId),
    className: "hover:opacity-80"
  }, "Delete"))));
}

// app/components/category-list.tsx
function CategoryList({ categories, onSelect, onDelete }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative mt-6"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Slug"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, categories.map((category) => /* @__PURE__ */ React.createElement(CategoryItem, {
    category,
    key: category.entityId,
    onSelect,
    onDelete
  })))));
}

// app/components/category-modal-create.tsx
init_react();
init_esm();
function CategoryModalCreate({ isSubmiting, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
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

// app/components/category-modal-edit.tsx
init_react();
init_esm();
function CategoryModalEdit({ category, isSubmiting, onClose }) {
  const { entityId, name } = category;
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "entityId",
    value: entityId
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    defaultValue: name,
    name: "name",
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

// app/components/confirm-modal-delete.tsx
init_react();
init_esm();
function ConfirmModalDelete({ entityId, isSubmiting, message, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "entityId",
    value: entityId
  }), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("div", {
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
    value: "delete",
    className: "text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
  }, "Delete ", isSubmiting ? "..." : ""))));
}

// app/routes/dashboard/categories.tsx
var import_category = __toESM(require_category());
var import_params = __toESM(require_params());
function DashboardCategoryRoute() {
  const { total, categories, offset, perPage } = useLoaderData();
  const data = useActionData();
  const { state } = useTransition();
  const isSubmiting = state === "submitting";
  const [showCreateModal, setShowCreateModal] = (0, import_react5.useState)(false);
  const [message, setMessage] = (0, import_react5.useState)();
  const [categoryEdit, setCategoryEdit] = (0, import_react5.useState)(null);
  const [categoryDelelteId, setCategoryDeleteId] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    if ((data == null ? void 0 : data.intent) === "create" && (data == null ? void 0 : data.category)) {
      setShowCreateModal(false);
      setMessage("Create success");
    } else if ((data == null ? void 0 : data.intent) === "edit" && (data == null ? void 0 : data.category)) {
      setCategoryEdit(null);
      setMessage("Update success");
    } else if ((data == null ? void 0 : data.intent) === "delete") {
      setCategoryDeleteId(null);
      setMessage("Delete success");
    }
  }, [data]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setShowCreateModal(true),
    className: "text-sm font-bold underline"
  }, " + New category ")), /* @__PURE__ */ React.createElement(CategoryList, {
    categories,
    onSelect: setCategoryEdit,
    onDelete: setCategoryDeleteId
  }), /* @__PURE__ */ React.createElement(LoadMore, {
    total,
    current: categories.length,
    path: "/dashboard/categories",
    offset,
    perPage
  }), showCreateModal ? /* @__PURE__ */ React.createElement(CategoryModalCreate, {
    isSubmiting,
    onClose: () => setShowCreateModal(false)
  }) : null, categoryEdit ? /* @__PURE__ */ React.createElement(CategoryModalEdit, {
    isSubmiting,
    onClose: () => setCategoryEdit(null),
    category: categoryEdit
  }) : null, categoryDelelteId ? /* @__PURE__ */ React.createElement(ConfirmModalDelete, {
    entityId: categoryDelelteId,
    isSubmiting,
    onClose: () => setCategoryDeleteId(null),
    message: "Are your sure delete this category?"
  }) : null, message ? /* @__PURE__ */ React.createElement(Toast, {
    message,
    onClose: () => setMessage(null)
  }) : null);
}
export {
  DashboardCategoryRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/categories-ZM7N7OZC.js.map
