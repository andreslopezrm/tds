var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }), {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(new import_node.Response(body, {
          headers: responseHeaders,
          status: didError ? 500 : responseStatusCode
        })), pipe(body);
      },
      onShellError: (err) => {
        reject(err);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_remix2 = require("@clerk/remix");

// app/styles/app.css
var app_default = "/build/_assets/app-WPCSZFI6.css";

// app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Tip Land",
  viewport: "width=device-width,initial-scale=1"
}), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)(), loader = (args) => (0, import_ssr.rootAuthLoader)(args);
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
var root_default = (0, import_remix.ClerkApp)(App);

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardRoute,
  loader: () => loader2
});
var import_ssr2 = require("@clerk/remix/ssr.server"), import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/dash-navbar.tsx
var import_react3 = require("@remix-run/react");

// app/utils/menu.ts
var menuItems = [
  {
    id: "home",
    title: "Home",
    path: "",
    completePath: "/dashboard"
  },
  {
    id: "tip",
    title: "Tips",
    path: "tips",
    completePath: "/dashboard/tips"
  },
  {
    id: "cat",
    title: "Categories",
    path: "categories",
    completePath: "/dashboard/categories"
  },
  {
    id: "stats",
    title: "Stats",
    path: "stats",
    completePath: "/dashboard/stats"
  },
  {
    id: "dev",
    title: "Developer",
    path: "developer",
    completePath: "/dashboard/developer"
  },
  {
    id: "perfil",
    title: "Perfil",
    path: "perfil",
    completePath: "/dashboard/perfil"
  }
];

// app/components/dash-navbar.tsx
function DashNavbar() {
  let { pathname } = (0, import_react3.useLocation)();
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-gray-100 p-3 shadow md:w-56 md:px-6 md:py-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center md:gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "30"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "hidden uppercase font-extrabold md:block"
  }, "Tip Land")), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "hidden mt-3 font-bold px-2 md:block"
  }, "Menu"), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-3 w-full"
  }, menuItems.map(({ id, title, path, completePath }) => {
    let isSelected = pathname == completePath;
    return /* @__PURE__ */ React.createElement("li", {
      key: id,
      className: "mt-2 px-2 py-1 rounded hover:bg-gray-200"
    }, /* @__PURE__ */ React.createElement(import_react3.Link, {
      to: path,
      className: "flex items-center w-6 md:w-auto md:gap-2"
    }, /* @__PURE__ */ React.createElement("img", {
      src: `/images/${id}-${isSelected ? "fill" : "out"}.png`,
      alt: title,
      className: "w-6 h-6 md:w-4 md:h-4"
    }), /* @__PURE__ */ React.createElement("span", {
      className: `hidden text-sm ${isSelected ? "font-semibold" : "font-light"} md:block`
    }, title)));
  }), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "mt-6 px-2 py-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logout.png",
    alt: "Logout",
    className: "w-6 h-6 md:hidden md:w-4 md:h-4"
  })))));
}

// app/db/user.server.ts
var import_redis_om4 = require("redis-om");

// app/db/apikey.server.ts
var import_redis_om2 = require("redis-om"), import_uuidv4 = require("uuidv4");

// app/db/redis.server.ts
var import_redis_om = require("redis-om"), redisClient = new import_redis_om.Client(), redisConnect = async () => {
  redisClient.isOpen() || await redisClient.open(process.env.REDIS_URL);
};

// app/db/apikey.server.ts
var ApiKey = class extends import_redis_om2.Entity {
}, apiKeySchema = new import_redis_om2.Schema(ApiKey, {
  userId: { type: "string", indexed: !0 },
  value: { type: "string", indexed: !0 },
  updateAt: { type: "date" }
});
async function getApiKeyRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(apiKeySchema);
  return await repository.createIndex(), repository;
}
function generateApiKeyValue() {
  return `${(0, import_uuidv4.uuid)()}-api-key`;
}
async function getApiKeyByUser(userId) {
  return (await getApiKeyRepository()).search().where("userId").equals(userId).first();
}
async function createApiKey(userId) {
  let repository = await getApiKeyRepository(), value = generateApiKeyValue();
  return repository.createAndSave({ userId, value, updateAt: new Date() });
}
async function getUserIdByApiKey(apiKey) {
  let entity = await (await getApiKeyRepository()).search().where("value").equals(apiKey).first();
  return entity == null ? void 0 : entity.userId;
}

// app/db/category.server.ts
var import_slugify = __toESM(require("slugify")), import_redis_om3 = require("redis-om");
var Category = class extends import_redis_om3.Entity {
}, categorySchema = new import_redis_om3.Schema(Category, {
  name: { type: "string" },
  slug: { type: "string", indexed: !0 },
  userId: { type: "string", indexed: !0 },
  createAt: { type: "date", sortable: !0 }
});
async function getCategoryRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(categorySchema);
  return await repository.createIndex(), repository;
}
async function getCategorySlug({ userId, name }) {
  let slug = (0, import_slugify.default)(name);
  return await getCategoryByUserAndSlug({ userId, slug }) ? `${slug}-${+new Date()}` : slug;
}
async function createCategory({ userId, name }) {
  let repository = await getCategoryRepository(), slug = await getCategorySlug({ userId, name });
  return repository.createAndSave({ userId, name, slug, createAt: new Date() });
}
async function getAllCategoriesByUserPaging({ userId, offset = 0, perPage = 1 }) {
  return (await getCategoryRepository()).search().where("userId").equals(userId).sortDescending("createAt").return.page(offset, perPage);
}
async function getAllCategoriesByUser(userId) {
  return (await getCategoryRepository()).search().where("userId").equals(userId).sortDescending("createAt").all();
}
async function countAllCategoriesByUser(userId) {
  return (await getCategoryRepository()).search().where("userId").equals(userId).return.count();
}
async function getCategoryById(entityId) {
  return (await getCategoryRepository()).fetch(entityId);
}
async function getCategoryByUserAndSlug({ userId, slug }) {
  return (await getCategoryRepository()).search().where("slug").equals(slug).where("userId").equals(userId).first();
}
async function updateCategory({ entityId, userId, name }) {
  let repository = await getCategoryRepository(), category = await getCategoryById(entityId);
  if (!category)
    throw new Error("Category not found");
  let slug = await getCategorySlug({ userId, name });
  return category.name = name, category.slug = slug, await repository.save(category), category;
}
async function deleteCategory(entityId) {
  await (await getCategoryRepository()).remove(entityId);
}

// app/db/user.server.ts
var User = class extends import_redis_om4.Entity {
}, userSchema = new import_redis_om4.Schema(User, {
  clerkId: { type: "string" },
  provider: { type: "string" },
  active: { type: "boolean" },
  createAt: { type: "date" }
});
async function getUserRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(userSchema);
  return await repository.createIndex(), repository;
}
async function checkUser(userId) {
  let repository = await getUserRepository();
  await repository.search().where("clerkId").equals(userId).first() || (await repository.createAndSave({
    clerkId: userId,
    active: !0,
    createAt: new Date()
  }), await createCategory({ userId, name: "Default" }), await createApiKey(userId));
}

// app/routes/dashboard.tsx
async function loader2({ request }) {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  return userId ? (await checkUser(userId), (0, import_node2.json)({ userId })) : (0, import_node2.redirect)("/sign-up");
}
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-screen"
  }, /* @__PURE__ */ React.createElement(DashNavbar, null), /* @__PURE__ */ React.createElement("section", {
    className: "flex-1 px-4 py-4 md:px-6"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null))));
}

// app/routes/dashboard/categories.tsx
var categories_exports = {};
__export(categories_exports, {
  action: () => action,
  default: () => DashboardCategoryRoute,
  loader: () => loader3
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_node3 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/components/category-item.tsx
function CategoryItem({ category, onSelect, onDelete }) {
  let { entityId, name, slug } = category;
  return /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("p", null, name)), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("p", null, slug)), /* @__PURE__ */ React.createElement("td", {
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
var import_react5 = require("@remix-run/react");

// app/components/modal.tsx
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
  }, /* @__PURE__ */ React.createElement(import_react5.Form, {
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
    required: !0
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
var import_react6 = require("@remix-run/react");
function CategoryModalEdit({ category, isSubmiting, onClose }) {
  let { entityId, name } = category;
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(import_react6.Form, {
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
    required: !0
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
var import_react7 = require("@remix-run/react");
function ConfirmModalDelete({ entityId, isSubmiting, message, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(import_react7.Form, {
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

// app/components/dash-header.tsx
var import_react8 = require("react"), import_remix3 = require("@clerk/remix");
function DashHeader({ title }) {
  let { signOut } = (0, import_remix3.useClerk)(), [isDisabled, setIsDisabled] = (0, import_react8.useState)(!1);
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-extrabold md:text-3xl"
  }, title), /* @__PURE__ */ React.createElement("button", {
    disabled: isDisabled,
    type: "button",
    onClick: async () => {
      setIsDisabled(!0), await signOut(), setIsDisabled(!1), window.location.href = "/";
    },
    className: "text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden md:block disabled:opacity-50"
  }, "Logout"));
}

// app/components/load-more.tsx
var import_react9 = require("@remix-run/react");
function LoadMore({ total, current, path, offset, perPage }) {
  if (current >= total)
    return null;
  let nextPath = `${path}?offset=${offset}&per_page=${perPage += perPage}`;
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: nextPath,
    className: "text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
  }, "Load more"));
}

// app/components/toast.tsx
var import_react10 = require("react");
function Toast({ message, onClose, delay = !0 }) {
  return (0, import_react10.useEffect)(() => {
    delay && setTimeout(onClose, 2500);
  }, []), /* @__PURE__ */ React.createElement("div", {
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

// app/utils/params.server.ts
function getQueryIntParameter(request, name, defaultValue) {
  let url = new URL(request.url), param = parseInt(url.searchParams.get(name) ?? "", 10);
  return isNaN(param) ? defaultValue : param;
}
function getQueryStringParameter(request, name) {
  return new URL(request.url).searchParams.get(name);
}

// app/routes/dashboard/categories.tsx
async function loader3({ request }) {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node3.redirect)("/sign-up");
  let offset = getQueryIntParameter(request, "offset", 0), perPage = getQueryIntParameter(request, "per_page", 200), [total, categories] = await Promise.all([countAllCategoriesByUser(userId), getAllCategoriesByUserPaging({ userId, offset, perPage })]);
  return (0, import_node3.json)({ total, categories, offset, perPage });
}
async function action({ request }) {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node3.redirect)("/sign-up");
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "create") {
    let name = formData.get("name"), category = await createCategory({ userId, name });
    return (0, import_node3.json)({ intent, category });
  } else if (intent === "edit") {
    let name = formData.get("name"), entityId = formData.get("entityId"), category = await updateCategory({ entityId, userId, name });
    return (0, import_node3.json)({ intent, category });
  } else if (intent === "delete") {
    let entityId = formData.get("entityId");
    await deleteCategory(entityId);
  }
  return (0, import_node3.json)({ intent });
}
function DashboardCategoryRoute() {
  let { total, categories, offset, perPage } = (0, import_react11.useLoaderData)(), data = (0, import_react11.useActionData)(), { state } = (0, import_react11.useTransition)(), isSubmiting = state === "submitting", [showCreateModal, setShowCreateModal] = (0, import_react12.useState)(!1), [message, setMessage] = (0, import_react12.useState)(), [categoryEdit, setCategoryEdit] = (0, import_react12.useState)(null), [categoryDeleteId, setCategoryDeleteId] = (0, import_react12.useState)(null);
  return (0, import_react12.useEffect)(() => {
    (data == null ? void 0 : data.intent) === "create" && (data == null ? void 0 : data.category) ? (setShowCreateModal(!1), setMessage("Create success")) : (data == null ? void 0 : data.intent) === "edit" && (data == null ? void 0 : data.category) ? (setCategoryEdit(null), setMessage("Update success")) : (data == null ? void 0 : data.intent) === "delete" && (setCategoryDeleteId(null), setMessage("Delete success"));
  }, [data]), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setShowCreateModal(!0),
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
    onClose: () => setShowCreateModal(!1)
  }) : null, categoryEdit ? /* @__PURE__ */ React.createElement(CategoryModalEdit, {
    isSubmiting,
    onClose: () => setCategoryEdit(null),
    category: categoryEdit
  }) : null, categoryDeleteId ? /* @__PURE__ */ React.createElement(ConfirmModalDelete, {
    entityId: categoryDeleteId,
    isSubmiting,
    onClose: () => setCategoryDeleteId(null),
    message: "Are your sure delete this category?"
  }) : null, message ? /* @__PURE__ */ React.createElement(Toast, {
    message,
    onClose: () => setMessage(null)
  }) : null);
}

// app/routes/dashboard/developer.tsx
var developer_exports = {};
__export(developer_exports, {
  default: () => DashboardDeveloperRoute,
  loader: () => loader4
});
var import_ssr4 = require("@clerk/remix/ssr.server"), import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_react15 = require("react");

// app/components/developer-docs.tsx
var import_react13 = require("react");
function DeveloperDocs({ apiKeyShow, apiKeyHidden }) {
  let [baseUrl, setBaseUrl] = (0, import_react13.useState)(""), endpointUrlShow = `${baseUrl}/api/tips?api_key=${apiKeyShow}`, endpointUrlHidden = `${baseUrl}/api/tips?api_key=${apiKeyHidden}`;
  return (0, import_react13.useEffect)(() => {
    setBaseUrl(window.location.origin);
  }, []), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
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
  }, /* @__PURE__ */ React.createElement("p", null, "No")))))), /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold mt-8"
  }, "Usage example"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-100 p-2 mt-2 rounded"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "font-mono text-sm underline",
    href: endpointUrlShow,
    target: "_blank"
  }, endpointUrlHidden)));
}

// app/components/developer-list.tsx
function DeveloperList({ apiKey, visible, onToogleVisible }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative mt-6"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Api Key"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("p", null, apiKey)), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex gap-2 text-black"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: onToogleVisible,
    className: "underline hover:opacity-80"
  }, visible ? "Hidden" : "View"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
    },
    className: "hover:opacity-80"
  }, "Refresh")))))));
}

// app/routes/dashboard/developer.tsx
async function loader4({ request }) {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  if (!userId)
    return (0, import_node4.redirect)("/sign-up");
  let apiKey = await getApiKeyByUser(userId);
  return (0, import_node4.json)({ apiKey });
}
function DashboardDeveloperRoute() {
  let { apiKey } = (0, import_react14.useLoaderData)(), [showApiKey, setShowApiKey] = (0, import_react15.useState)(!1), apiKeyValue = showApiKey ? apiKey == null ? void 0 : apiKey.value : "******************";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Developer"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 font-light"
  }, "To use the api rest of the tip of the day, send the value of your Api Key as a query parameter in the request"), /* @__PURE__ */ React.createElement(DeveloperList, {
    apiKey: apiKeyValue,
    visible: showApiKey,
    onToogleVisible: () => setShowApiKey(!showApiKey)
  }), /* @__PURE__ */ React.createElement(DeveloperDocs, {
    apiKeyShow: apiKey == null ? void 0 : apiKey.value,
    apiKeyHidden: apiKeyValue
  }));
}

// app/routes/dashboard/perfil.tsx
var perfil_exports = {};
__export(perfil_exports, {
  default: () => DashboardPerfilRoute
});
var import_remix4 = require("@clerk/remix");
function DashboardPerfilRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Perfil"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "auth auth-perfil mt-8"
  }, /* @__PURE__ */ React.createElement(import_remix4.UserProfile, null)));
}

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => DashboardIndexRoute
});
function DashboardIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Home"
  }));
}

// app/routes/dashboard/stats.tsx
var stats_exports = {};
__export(stats_exports, {
  default: () => DashboardStatsRoute,
  loader: () => loader5
});
var import_ssr5 = require("@clerk/remix/ssr.server"), import_node5 = require("@remix-run/node"), import_react16 = require("@remix-run/react"), import_remix_utils = require("remix-utils");

// app/db/stats.server.ts
var import_redis_om5 = require("redis-om");
var Stat = class extends import_redis_om5.Entity {
}, statSchema = new import_redis_om5.Schema(Stat, {
  userId: { type: "string", indexed: !0 },
  createAt: { type: "date", indexed: !0 },
  count: { type: "number" }
});
async function getStatRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(statSchema);
  return await repository.createIndex(), repository;
}
async function createStat(userId) {
  let repository = await getStatRepository();
  new Date().setHours(0, 0, 0);
  let ids = await repository.search().allIds();
  await repository.remove(ids);
}
async function getStatsInWeek(userId) {
  let repository = await getStatRepository(), now = new Date();
  now.setHours(0, 0, 0);
  let sevenDaysAgo = new Date(+now - 5 * 864e5);
  return await repository.search().where("userId").equals(userId).where("createAt").between(sevenDaysAgo, now).all();
}

// app/routes/dashboard/stats.tsx
async function loader5({ request }) {
  let { userId } = await (0, import_ssr5.getAuth)(request);
  if (!userId)
    return (0, import_node5.redirect)("/sign-up");
  let stats = await getStatsInWeek(userId);
  return (0, import_remix_utils.json)({ stats });
}
function DashboardStatsRoute() {
  let data = (0, import_react16.useLoaderData)();
  return console.log(data), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Stats"
  }));
}

// app/routes/dashboard/tips.tsx
var tips_exports = {};
__export(tips_exports, {
  action: () => action2,
  default: () => DashboardTipsRoute,
  loader: () => loader6
});
var import_ssr6 = require("@clerk/remix/ssr.server"), import_node6 = require("@remix-run/node"), import_react19 = require("@remix-run/react"), import_react20 = require("react");

// app/components/tip-item.tsx
function TipItem({ tip, onSelect, onDelete }) {
  let { entityId, description, category } = tip;
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
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, tips.map((tip) => /* @__PURE__ */ React.createElement(TipItem, {
    tip,
    key: tip.entityId,
    onSelect,
    onDelete
  })))));
}

// app/components/tip-modal-create.tsx
var import_react17 = require("@remix-run/react");
function TipModalCreate({ isSubmiting, categories, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(import_react17.Form, {
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
    required: !0
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
    required: !0
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
var import_react18 = require("@remix-run/react");
function TipModalEdit({ tip, isSubmiting, categories, onClose }) {
  let { categoryId, description } = tip;
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(import_react18.Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "categoryId",
    className: "block mb-2 text-sm font-medium text-gray-900"
  }, "Category"), /* @__PURE__ */ React.createElement("select", {
    defaultValue: categoryId,
    id: "categoryId",
    name: "categoryId",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    required: !0
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
    defaultValue: description,
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5",
    required: !0
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

// app/db/tip.server.ts
var import_redis_om6 = require("redis-om");

// app/utils/ramdom.ts
function getRamdomItemFromArray(itemLists) {
  return itemLists[Math.floor(Math.random() * itemLists.length)] ?? null;
}

// app/db/tip.server.ts
var Tip = class extends import_redis_om6.Entity {
}, tipSchema = new import_redis_om6.Schema(Tip, {
  description: { type: "string" },
  categoryId: { type: "string", indexed: !0 },
  userId: { type: "string", indexed: !0 },
  createAt: { type: "date", sortable: !0 }
});
async function getTipRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(tipSchema);
  return await repository.createIndex(), repository;
}
async function getAllTipsByUser(userId) {
  return (await getTipRepository()).search().where("userId").equals(userId).all();
}
async function getAllTipsByUserAndCategory({ userId, categoryId }) {
  return (await getTipRepository()).search().where("userId").equals(userId).where("categoryId").equals(categoryId).all();
}
async function getAllTipsByUserPaging({ userId, offset = 0, perPage = 1 }) {
  return (await getTipRepository()).search().where("userId").equals(userId).sortDescending("createAt").return.page(offset, perPage);
}
async function countAllTipsByUser(userId) {
  return (await getTipRepository()).search().where("userId").equals(userId).return.count();
}
function getTipsWithCategory({ tips, categories }) {
  return tips.map(({ entityId, categoryId, description }) => ({
    entityId,
    description,
    categoryId,
    category: categories.find((category) => categoryId === category.entityId)
  }));
}
async function getTipById(entityId) {
  return (await getTipRepository()).fetch(entityId);
}
async function createTip({ userId, description, categoryId }) {
  return (await getTipRepository()).createAndSave({ userId, description, categoryId, createAt: new Date() });
}
async function updateTip({ entityId, description, categoryId }) {
  let repository = await getTipRepository(), tip = await getTipById(entityId);
  if (!tip)
    throw new Error("Tip not found");
  return tip.description = description, tip.categoryId = categoryId, await repository.save(tip), tip;
}
async function deleteTip(entityId) {
  await (await getTipRepository()).remove(entityId);
}
async function getRamdomTip({ userId, categorySlug }) {
  if (categorySlug) {
    let category = await getCategoryByUserAndSlug({ userId, slug: categorySlug });
    if (category) {
      let tips2 = await getAllTipsByUserAndCategory({ userId, categoryId: category.entityId }), tip = getRamdomItemFromArray(tips2);
    }
  }
  let tips = await getAllTipsByUser(userId);
  return getRamdomItemFromArray(tips);
}

// app/routes/dashboard/tips.tsx
async function loader6({ request }) {
  let { userId } = await (0, import_ssr6.getAuth)(request);
  if (!userId)
    return (0, import_node6.redirect)("/sign-up");
  let offset = getQueryIntParameter(request, "offset", 0), perPage = getQueryIntParameter(request, "per_page", 200), [total, plainTips, categories] = await Promise.all([
    countAllTipsByUser(userId),
    getAllTipsByUserPaging({ userId, offset, perPage }),
    getAllCategoriesByUser(userId)
  ]), tips = getTipsWithCategory({ tips: plainTips, categories });
  return (0, import_node6.json)({ total, tips, categories, offset, perPage });
}
async function action2({ request }) {
  let { userId } = await (0, import_ssr6.getAuth)(request);
  if (!userId)
    return (0, import_node6.redirect)("/sign-up");
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "create") {
    let description = formData.get("description"), categoryId = formData.get("categoryId"), tip = await createTip({ userId, categoryId, description });
    return (0, import_node6.json)({ intent, tip });
  } else if (intent === "edit") {
    let entityId = formData.get("entityId"), description = formData.get("description"), categoryId = formData.get("categoryId"), tip = await updateTip({ entityId, description, categoryId });
    return (0, import_node6.json)({ intent, tip });
  } else if (intent === "delete") {
    let entityId = formData.get("entityId");
    await deleteTip(entityId);
  }
  return (0, import_node6.json)({ intent });
}
function DashboardTipsRoute() {
  let { total, tips, categories, offset, perPage } = (0, import_react19.useLoaderData)(), data = (0, import_react19.useActionData)(), { state } = (0, import_react19.useTransition)(), isSubmiting = state === "submitting", [showCreateModal, setShowCreateModal] = (0, import_react20.useState)(!1), [message, setMessage] = (0, import_react20.useState)(), [tipEdit, setTipEdit] = (0, import_react20.useState)(null), [tipDeleteId, setTipDeleteId] = (0, import_react20.useState)(null);
  return (0, import_react20.useEffect)(() => {
    (data == null ? void 0 : data.intent) === "create" && (data == null ? void 0 : data.tip) ? (setShowCreateModal(!1), setMessage("Create success")) : (data == null ? void 0 : data.intent) === "edit" && (data == null ? void 0 : data.tip) ? (setTipEdit(null), setMessage("Update success")) : (data == null ? void 0 : data.intent) === "delete" && (setTipDeleteId(null), setMessage("Delete success"));
  }, [data]), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Tips"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setShowCreateModal(!0),
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
    onClose: () => setShowCreateModal(!1),
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

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_remix5 = require("@clerk/remix");
function SignInRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix5.SignIn, {
    routing: "path",
    path: "/sign-in"
  }));
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpRoute
});
var import_remix6 = require("@clerk/remix");
function SignUpRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix6.SignUp, {
    routing: "path",
    path: "/sign-up"
  }));
}

// app/routes/api/tips.ts
var tips_exports2 = {};
__export(tips_exports2, {
  loader: () => loader7
});
var import_node7 = require("@remix-run/node"), import_remix_utils2 = require("remix-utils");
async function loader7({ request }) {
  let apiKey = getQueryStringParameter(request, "api_key");
  if (!apiKey)
    return (0, import_remix_utils2.cors)(request, (0, import_node7.json)({ status: "forbidden", error: "Forbiden Access" }, { status: 403 }));
  let userId = await getUserIdByApiKey(apiKey);
  if (!userId)
    return (0, import_remix_utils2.cors)(request, (0, import_node7.json)({ status: "bad_request", error: "Bad Request", apiKey }, { status: 400 }));
  await createStat(userId);
  let categorySlug = getQueryStringParameter(request, "category_slug"), tip = await getRamdomTip({ userId, categorySlug });
  return (0, import_remix_utils2.cors)(request, (0, import_node7.json)({ status: "ok", tip: (tip == null ? void 0 : tip.description) ?? null }));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  loader: () => loader8
});
var import_ssr7 = require("@clerk/remix/ssr.server"), import_node8 = require("@remix-run/node"), import_react21 = require("@remix-run/react");
async function loader8({ request }) {
  let { userId } = await (0, import_ssr7.getAuth)(request);
  return userId ? (0, import_node8.redirect)("/dashboard") : null;
}
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Datos"), /* @__PURE__ */ React.createElement(import_react21.Link, {
    to: "/sign-in"
  }, "Sign In"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_react21.Link, {
    to: "/sign-up"
  }, "Sign Up"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d7b31ce8", entry: { module: "/build/entry.client-IZWJTQY7.js", imports: ["/build/_shared/chunk-BOJHJ2SB.js", "/build/_shared/chunk-SPRLBSB7.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SRS5XQGR.js", imports: ["/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/api/tips": { id: "routes/api/tips", parentId: "root", path: "api/tips", index: void 0, caseSensitive: void 0, module: "/build/routes/api/tips-WNGDHI5F.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-XICUXJ4O.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/categories": { id: "routes/dashboard/categories", parentId: "routes/dashboard", path: "categories", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/categories-CQFX7O7Y.js", imports: ["/build/_shared/chunk-LO5FD6MR.js", "/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/developer": { id: "routes/dashboard/developer", parentId: "routes/dashboard", path: "developer", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/developer-MDPXN4AS.js", imports: ["/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-2TMKXMKH.js", imports: ["/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/perfil": { id: "routes/dashboard/perfil", parentId: "routes/dashboard", path: "perfil", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/perfil-Y5MIICPF.js", imports: ["/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/stats": { id: "routes/dashboard/stats", parentId: "routes/dashboard", path: "stats", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/stats-U74Z2ML3.js", imports: ["/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/tips": { id: "routes/dashboard/tips", parentId: "routes/dashboard", path: "tips", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/tips-OGSN7MXX.js", imports: ["/build/_shared/chunk-LO5FD6MR.js", "/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-SMCRJUVE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-HQU7QUII.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-LEI64YOW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-D7B31CE8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/categories": {
    id: "routes/dashboard/categories",
    parentId: "routes/dashboard",
    path: "categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/dashboard/developer": {
    id: "routes/dashboard/developer",
    parentId: "routes/dashboard",
    path: "developer",
    index: void 0,
    caseSensitive: void 0,
    module: developer_exports
  },
  "routes/dashboard/perfil": {
    id: "routes/dashboard/perfil",
    parentId: "routes/dashboard",
    path: "perfil",
    index: void 0,
    caseSensitive: void 0,
    module: perfil_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/dashboard/stats": {
    id: "routes/dashboard/stats",
    parentId: "routes/dashboard",
    path: "stats",
    index: void 0,
    caseSensitive: void 0,
    module: stats_exports
  },
  "routes/dashboard/tips": {
    id: "routes/dashboard/tips",
    parentId: "routes/dashboard",
    path: "tips",
    index: void 0,
    caseSensitive: void 0,
    module: tips_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/api/tips": {
    id: "routes/api/tips",
    parentId: "root",
    path: "api/tips",
    index: void 0,
    caseSensitive: void 0,
    module: tips_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
