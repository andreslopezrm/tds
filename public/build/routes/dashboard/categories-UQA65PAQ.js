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

// app/routes/dashboard/categories.tsx
var import_category = __toESM(require_category());
function DashboardCategoryRoute() {
  const { categories } = useLoaderData();
  const data = useActionData();
  console.log({ data });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button"
  }, "New Category")), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    name: "name"
  }), /* @__PURE__ */ React.createElement("input", {
    name: "slug"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    name: "intent",
    value: "add"
  })), /* @__PURE__ */ React.createElement(CategoryList, {
    categories
  }));
}
export {
  DashboardCategoryRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/categories-UQA65PAQ.js.map
