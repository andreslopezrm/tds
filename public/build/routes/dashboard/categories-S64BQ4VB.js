import {
  require_ssr
} from "/build/_shared/chunk-NEJG427H.js";
import {
  DashHeader
} from "/build/_shared/chunk-7Q46JD7Y.js";
import "/build/_shared/chunk-FRO2JKJQ.js";
import {
  Form,
  Link,
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
var import_react7 = __toESM(require_react());

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
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => onSelect(category)
  }, "Edit"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => onDelete(entityId)
  }, "Delete")));
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

// app/components/modal.tsx
init_react();
function Modal({ children, onClose }) {
  return /* @__PURE__ */ React.createElement("div", {
    id: "modal",
    "aria-hidden": "true",
    className: " bg-white bg-opacity-80 flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-10 w-full md:inset-0 h-modal md:h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-2xl m-8 relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative p-8 transition-all ease-in duration-75 bg-white rounded-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 flex justify-between"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold text-xl"
  }, "Tip Land"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => onClose()
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/close.png",
    width: "20"
  }))), /* @__PURE__ */ React.createElement("div", null, children))));
}

// app/components/category-modal-create.tsx
function CategoryModalCreate({ isSubmiting, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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

// app/components/load-more.tsx
init_react();
init_esm();
function LoadMore({ total, current, path, perPage: perPage2 }) {
  return /* @__PURE__ */ React.createElement(Link, {
    to: "/dashboard/categories"
  }, "Load more");
}

// app/components/toast.tsx
init_react();
var import_react5 = __toESM(require_react());
function Toast({ message, onClose, delay = true }) {
  (0, import_react5.useEffect)(() => {
    if (delay) {
      setTimeout(onClose, 2500);
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    id: "toast",
    className: "fixed right-4 bottom-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center p-4 mb-4 w-full max-w-xs rounded-lg shadow text-white bg-black gap-3",
    role: "alert"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ml-3 text-sm font-normal"
  }, message), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => onClose(),
    className: "ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 text-gray-500 hover:text-white bg-gray-100 hover:bg-gray-200",
    "data-dismiss-target": "#toast",
    "aria-label": "Close"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Close"), /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    className: "w-5 h-5",
    fill: "#000",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))));
}

// app/routes/dashboard/categories.tsx
var import_category = __toESM(require_category());
var perPage = 1;
function DashboardCategoryRoute() {
  const { total, categories } = useLoaderData();
  const data = useActionData();
  const { state } = useTransition();
  const isSubmiting = state === "submitting";
  const [showCreateModal, setShowCreateModal] = (0, import_react7.useState)(false);
  const [message, setMessage] = (0, import_react7.useState)();
  const [categoryEdit, setCategoryEdit] = (0, import_react7.useState)(null);
  const [categoryDelelteId, setCategoryDeleteId] = (0, import_react7.useState)(null);
  (0, import_react7.useEffect)(() => {
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
//# sourceMappingURL=/build/routes/dashboard/categories-S64BQ4VB.js.map
