import {
  require_ssr
} from "/build/_shared/chunk-KI6VKGMH.js";
import {
  DashHeader
} from "/build/_shared/chunk-7DW34RNL.js";
import "/build/_shared/chunk-IPP4XDWJ.js";
import {
  Form,
  React,
  __commonJS,
  __toESM,
  init_esm,
  init_react,
  require_react,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-PQV6DCII.js";

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
var import_react2 = __toESM(require_react());

// app/components/category-list.tsx
init_react();

// app/components/category-item.tsx
init_react();
function CategoryItem({ category }) {
  const { name, slug } = category;
  return /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, name), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, slug), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, "-"));
}

// app/components/category-list.tsx
function CategoryList({ categories }) {
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
    key: category.entityId
  })))));
}

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

// app/routes/dashboard/categories.tsx
var import_category = __toESM(require_category());
function DashboardCategoryRoute() {
  const { categories, intent } = useLoaderData();
  const data = useActionData();
  const [showCreateModal, setShowCreateModal] = (0, import_react2.useState)(false);
  console.log(data);
  const handleOpenShowCreateModal = () => setShowCreateModal(true);
  const handleCloseShowCreateModal = () => setShowCreateModal(false);
  (0, import_react2.useEffect)(() => {
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: handleOpenShowCreateModal
  }, "New Category")), /* @__PURE__ */ React.createElement(CategoryList, {
    categories
  }), showCreateModal ? /* @__PURE__ */ React.createElement(Modal, {
    onClose: handleCloseShowCreateModal
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
    onClick: handleCloseShowCreateModal,
    className: "text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50"
  }, "Cancel"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "create",
    className: "text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
  }, "Acept")))) : null);
}
export {
  DashboardCategoryRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/categories-SEJALRV3.js.map
