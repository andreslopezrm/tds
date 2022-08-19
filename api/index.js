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
var app_default = "/build/_assets/app-ALZEKTMU.css";

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

// app/utils/clerk.ts
async function getClerkUser(userId) {
  return await (await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
    headers: new Headers({
      Authorization: `Bearer ${process.env.CLERK_API_KEY}`
    })
  })).json();
}
async function getProviderClerkUser(userId) {
  var _a, _b;
  try {
    return ((_b = (_a = (await getClerkUser(userId)).email_addresses[0]) == null ? void 0 : _a.verification) == null ? void 0 : _b.strategy) ?? "email_code";
  } catch {
    return null;
  }
}

// app/db/apikey.server.ts
var import_redis_om2 = require("redis-om"), import_uuidv4 = require("uuidv4");

// app/db/redis.server.ts
var import_redis_om = require("redis-om"), redisClient = new import_redis_om.Client();
async function redisConnect() {
  redisClient.isOpen() || await redisClient.open(process.env.REDIS_URL);
}

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
async function updateApiKey(userId) {
  let repository = await getApiKeyRepository(), apiKey = await getApiKeyByUser(userId);
  if (apiKey)
    return apiKey.value = generateApiKeyValue(), await repository.save(apiKey), apiKey;
  let value = generateApiKeyValue();
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
  return await getCategoryByUserAndSlug({ userId, slug }) ? `${slug}-${+new Date()}` : slug.toLowerCase();
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
async function getTotalCategoriesByUser(userId) {
  return (await getCategoryRepository()).search().where("userId").equals(userId).count();
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
  if (!await repository.search().where("clerkId").equals(userId).first()) {
    let provider = await getProviderClerkUser(userId);
    await repository.createAndSave({
      clerkId: userId,
      active: !0,
      provider,
      createAt: new Date()
    }), await createCategory({ userId, name: "Default" }), await createApiKey(userId);
  }
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
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, categories.length > 0 ? categories.map((category) => /* @__PURE__ */ React.createElement(CategoryItem, {
    category,
    key: category.entityId,
    onSelect,
    onDelete
  })) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 3
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-center"
  }, "Empty"))))));
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
  action: () => action2,
  default: () => DashboardDeveloperRoute,
  loader: () => loader4
});
var import_ssr4 = require("@clerk/remix/ssr.server"), import_node4 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react");

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
var import_react14 = require("@remix-run/react");
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
  }, visible ? "Hidden" : "View"), /* @__PURE__ */ React.createElement(import_react14.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "hover:opacity-80"
  }, "Refresh"))))))));
}

// app/routes/dashboard/developer.tsx
async function loader4({ request }) {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  if (!userId)
    return (0, import_node4.redirect)("/sign-up");
  let apiKey = await getApiKeyByUser(userId);
  return (0, import_node4.json)({ apiKey });
}
async function action2({ request }) {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  return userId ? (await updateApiKey(userId), (0, import_node4.json)({ updated: !0 })) : (0, import_node4.redirect)("/sign-up");
}
function DashboardDeveloperRoute() {
  let { apiKey } = (0, import_react15.useLoaderData)(), data = (0, import_react15.useActionData)(), [showApiKey, setShowApiKey] = (0, import_react16.useState)(!1), [message, setMessage] = (0, import_react16.useState)();
  (0, import_react16.useEffect)(() => {
    (data == null ? void 0 : data.updated) && setMessage("Update success");
  }, [data]);
  let apiKeyValue = showApiKey ? apiKey == null ? void 0 : apiKey.value : "******************";
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
  }), message ? /* @__PURE__ */ React.createElement(Toast, {
    message,
    onClose: () => setMessage(null)
  }) : null);
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
  default: () => DashboardIndexRoute,
  loader: () => loader5
});
var import_ssr5 = require("@clerk/remix/ssr.server"), import_node5 = require("@remix-run/node"), import_react17 = require("@remix-run/react");

// app/components/dash-tips.tsx
function DashTips({ tips }) {
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold mt-6 text-xl"
  }, "Last tips"), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative mt-6"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Description"))), /* @__PURE__ */ React.createElement("tbody", null, tips.length > 0 ? tips.map(({ entityId, description }) => /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b",
    key: entityId
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, description))) : /* @__PURE__ */ React.createElement("tr", {
    className: "text-center text-gray-800 mt-3"
  }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("p", {
    className: "mt-3"
  }, "Empty")))))));
}

// app/components/dash-totals.tsx
function DashTotals({ totalCategories, totalTips, totalStats }) {
  return /* @__PURE__ */ React.createElement("section", {
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
  }, totalStats)));
}

// app/db/stats.server.ts
var import_redis_om5 = require("redis-om"), import_dayjs = __toESM(require("dayjs"));
var FORMAT = "DD-MM-YYYY", Stat = class extends import_redis_om5.Entity {
}, statSchema = new import_redis_om5.Schema(Stat, {
  userId: { type: "string", indexed: !0 },
  createAt: { type: "string", indexed: !0 },
  count: { type: "number" }
});
async function getStatRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(statSchema);
  return await repository.createIndex(), repository;
}
async function createStat(userId) {
  let repository = await getStatRepository(), createAt = (0, import_dayjs.default)().format(FORMAT), existToday = await repository.search().where("userId").equal(userId).where("createAt").equals(createAt).first();
  return existToday ? (existToday.count = existToday.count === void 0 || existToday.count === null ? 0 : existToday.count + 1, repository.save(existToday), existToday) : await repository.createAndSave({ userId, createAt, count: 1 });
}
async function getStatsInWeek(userId) {
  let repository = await getStatRepository(), now = (0, import_dayjs.default)(), oneDaysAgo = now.subtract(1, "day"), twoDaysAgo = now.subtract(2, "day"), threeDaysAgo = now.subtract(3, "day"), fourDaysAgo = now.subtract(4, "day"), fiveDaysAgo = now.subtract(5, "day"), nowFormat = now.format(FORMAT), oneDaysAgoFormat = oneDaysAgo.format(FORMAT), twoDaysAgoFormat = twoDaysAgo.format(FORMAT), threeDaysAgoFormat = threeDaysAgo.format(FORMAT), fourDaysAgoFormat = fourDaysAgo.format(FORMAT), fiveDaysAgoFormat = fiveDaysAgo.format(FORMAT), dates = [nowFormat, oneDaysAgoFormat, twoDaysAgoFormat, threeDaysAgoFormat, fourDaysAgoFormat, fiveDaysAgoFormat].reverse(), queries = dates.map((date) => repository.search().where("userId").equal(userId).where("createAt").equal(date).first()), stats = await Promise.all(queries);
  return dates.map((date) => {
    var _a;
    return {
      date,
      count: ((_a = stats.find((stat) => (stat == null ? void 0 : stat.createAt) == date)) == null ? void 0 : _a.count) ?? 0
    };
  });
}
async function getStatsToday(userId) {
  let repository = await getStatRepository(), nowFormat = (0, import_dayjs.default)().format(FORMAT), stat = await repository.search().where("userId").equals(userId).where("createAt").equals(nowFormat).first();
  return (stat == null ? void 0 : stat.count) ?? 0;
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
async function getTotalTipsByUser(userId) {
  return (await getTipRepository()).search().where("userId").equals(userId).count();
}

// app/db/dashboard.server.ts
async function getTotalDashboard(userId) {
  let [
    totalCategories,
    totalTips,
    totalStats,
    lastTips
  ] = await Promise.all([
    getTotalCategoriesByUser(userId),
    getTotalTipsByUser(userId),
    getStatsToday(userId),
    getAllTipsByUserPaging({ userId, offset: 0, perPage: 4 })
  ]);
  return { totalCategories, totalTips, totalStats, lastTips };
}

// app/routes/dashboard/index.tsx
async function loader5({ request }) {
  let { userId } = await (0, import_ssr5.getAuth)(request);
  if (!userId)
    return (0, import_node5.redirect)("/sign-up");
  let { totalCategories, totalTips, totalStats, lastTips } = await getTotalDashboard(userId);
  return (0, import_node5.json)({ totalCategories, totalTips, totalStats, lastTips });
}
function DashboardIndexRoute() {
  let { totalCategories, totalTips, totalStats, lastTips } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Welcome"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container m-auto mt-6"
  }, /* @__PURE__ */ React.createElement(DashTotals, {
    totalCategories,
    totalTips,
    totalStats
  }), /* @__PURE__ */ React.createElement(DashTips, {
    tips: lastTips
  })));
}

// app/routes/dashboard/stats.tsx
var stats_exports = {};
__export(stats_exports, {
  default: () => DashboardStatsRoute,
  loader: () => loader6
});
var import_ssr6 = require("@clerk/remix/ssr.server"), import_node6 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2");
import_chart.Chart.register(import_chart.CategoryScale, import_chart.LinearScale, import_chart.BarElement, import_chart.Title, import_chart.Tooltip, import_chart.Legend);
async function loader6({ request }) {
  let { userId } = await (0, import_ssr6.getAuth)(request);
  if (!userId)
    return (0, import_node6.redirect)("/sign-up");
  let stats = await getStatsInWeek(userId);
  return (0, import_node6.json)({ stats });
}
function DashboardStatsRoute() {
  let { stats } = (0, import_react18.useLoaderData)(), options = {
    responsive: !0,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: !0,
        text: "Stats"
      }
    }
  }, data = {
    labels: stats.map(({ date }) => date),
    datasets: [
      {
        label: "Day",
        data: stats.map(({ count }) => count),
        backgroundColor: "#000"
      }
    ]
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Stats"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "font-light"
  }, "Total request per day"), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-3xl m-auto mt-6"
  }, /* @__PURE__ */ React.createElement(import_react_chartjs_2.Bar, {
    options,
    data
  })));
}

// app/routes/dashboard/tips.tsx
var tips_exports = {};
__export(tips_exports, {
  action: () => action3,
  default: () => DashboardTipsRoute,
  loader: () => loader7
});
var import_ssr7 = require("@clerk/remix/ssr.server"), import_node7 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_react22 = require("react");

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
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, tips.length > 0 ? tips.map((tip) => /* @__PURE__ */ React.createElement(TipItem, {
    tip,
    key: tip.entityId,
    onSelect,
    onDelete
  })) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 3
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-center"
  }, "Empty"))))));
}

// app/components/tip-modal-create.tsx
var import_react19 = require("@remix-run/react");
function TipModalCreate({ isSubmiting, categories, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(import_react19.Form, {
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
var import_react20 = require("@remix-run/react");
function TipModalEdit({ tip, isSubmiting, categories, onClose }) {
  let { entityId, categoryId, description } = tip;
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(import_react20.Form, {
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
    required: !0
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

// app/routes/dashboard/tips.tsx
async function loader7({ request }) {
  let { userId } = await (0, import_ssr7.getAuth)(request);
  if (!userId)
    return (0, import_node7.redirect)("/sign-up");
  let offset = getQueryIntParameter(request, "offset", 0), perPage = getQueryIntParameter(request, "per_page", 200), [total, plainTips, categories] = await Promise.all([
    countAllTipsByUser(userId),
    getAllTipsByUserPaging({ userId, offset, perPage }),
    getAllCategoriesByUser(userId)
  ]), tips = getTipsWithCategory({ tips: plainTips, categories });
  return (0, import_node7.json)({ total, tips, categories, offset, perPage });
}
async function action3({ request }) {
  let { userId } = await (0, import_ssr7.getAuth)(request);
  if (!userId)
    return (0, import_node7.redirect)("/sign-up");
  let formData = await request.formData(), intent = formData.get("intent");
  if (intent === "create") {
    let description = formData.get("description"), categoryId = formData.get("categoryId"), tip = await createTip({ userId, categoryId, description });
    return (0, import_node7.json)({ intent, tip });
  } else if (intent === "edit") {
    let entityId = formData.get("entityId"), description = formData.get("description"), categoryId = formData.get("categoryId"), tip = await updateTip({ entityId, description, categoryId });
    return (0, import_node7.json)({ intent, tip });
  } else if (intent === "delete") {
    let entityId = formData.get("entityId");
    await deleteTip(entityId);
  }
  return (0, import_node7.json)({ intent });
}
function DashboardTipsRoute() {
  let { total, tips, categories, offset, perPage } = (0, import_react21.useLoaderData)(), data = (0, import_react21.useActionData)(), { state } = (0, import_react21.useTransition)(), isSubmiting = state === "submitting", [showCreateModal, setShowCreateModal] = (0, import_react22.useState)(!1), [message, setMessage] = (0, import_react22.useState)(), [tipEdit, setTipEdit] = (0, import_react22.useState)(null), [tipDeleteId, setTipDeleteId] = (0, import_react22.useState)(null);
  return (0, import_react22.useEffect)(() => {
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
var import_remix5 = require("@clerk/remix"), import_react23 = require("@remix-run/react");
function SignInRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center mb-5 md:gap-2"
  }, /* @__PURE__ */ React.createElement(import_react23.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "35"
  })), /* @__PURE__ */ React.createElement("h1", {
    className: "uppercase font-extrabold text-2xl md:block"
  }, /* @__PURE__ */ React.createElement(import_react23.Link, {
    to: "/"
  }, "Tip Land"))), /* @__PURE__ */ React.createElement(import_remix5.SignIn, {
    routing: "path",
    path: "/sign-in"
  })));
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpRoute
});
var import_remix6 = require("@clerk/remix"), import_react24 = require("@remix-run/react");
function SignUpRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center mb-5 md:gap-2"
  }, /* @__PURE__ */ React.createElement(import_react24.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "35"
  })), /* @__PURE__ */ React.createElement("h1", {
    className: "uppercase font-extrabold text-2xl md:block"
  }, /* @__PURE__ */ React.createElement(import_react24.Link, {
    to: "/"
  }, "Tip Land"))), /* @__PURE__ */ React.createElement(import_remix6.SignUp, {
    routing: "path",
    path: "/sign-up"
  })));
}

// app/routes/api/tips.ts
var tips_exports2 = {};
__export(tips_exports2, {
  loader: () => loader8
});
var import_node8 = require("@remix-run/node"), import_remix_utils = require("remix-utils");
async function loader8({ request }) {
  let apiKey = getQueryStringParameter(request, "api_key");
  if (!apiKey)
    return (0, import_remix_utils.cors)(request, (0, import_node8.json)({ status: "forbidden", error: "Forbiden Access" }, { status: 403 }));
  let userId = await getUserIdByApiKey(apiKey);
  if (!userId)
    return (0, import_remix_utils.cors)(request, (0, import_node8.json)({ status: "forbidden", error: "Forbiden Access", apiKey }, { status: 403 }));
  await createStat(userId);
  let categorySlug = getQueryStringParameter(request, "category_slug"), tip = await getRamdomTip({ userId, categorySlug });
  return (0, import_remix_utils.cors)(request, (0, import_node8.json)({ status: "ok", tip: (tip == null ? void 0 : tip.description) ?? null }));
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => AboutRoute
});
var import_react25 = require("@remix-run/react");
function AboutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-2 ml-4"
  }, /* @__PURE__ */ React.createElement(import_react25.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    className: "w-10 h-10"
  })), /* @__PURE__ */ React.createElement(import_react25.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "TipLand"))), /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex gap-6 text-sm items-center"
  }, /* @__PURE__ */ React.createElement(import_react25.Link, {
    to: "sign-in",
    className: "text-slate-600"
  }, "Sign In"), /* @__PURE__ */ React.createElement(import_react25.Link, {
    className: "bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black",
    to: "sign-up"
  }, "Sign Up"))), /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto font-light mt-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mt-12 text-3xl mb-8 font-extrabold"
  }, "About"), /* @__PURE__ */ React.createElement("p", null, "-"), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-4 text-2xl mb-2 font-bold"
  }, "Made for"), "This project is made specifically for the ", /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://dev.to/devteam/announcing-the-redis-hackathon-on-dev-3248",
    className: "underline"
  }, "Dev.to Redis Hackathon"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 font-bold"
  }, "Link article"), /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "-",
    target: "_blank"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-4 text-2xl mb-2 font-bold"
  }, "Tech Stack"), /* @__PURE__ */ React.createElement("ol", {
    className: "list-decimal ml-4"
  }, /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://redis.io/"
  }, "Redis "), "\u2014 The main database"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://redis.com/try-free/"
  }, "Redis Cloud "), "\u2014 The platform for Redis"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://github.com/redis/redis-om-node"
  }, "Redis OM for Node "), "\u2014 The object mapping for Redis"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://remix.run/"
  }, "Remix "), "\u2014 The web framewok"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://vercel.com/"
  }, "Vercel "), "\u2014 For deploy"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://clerk.dev/"
  }, "Clerk "), "- For the Auth"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://tailwindcss.com/"
  }, "Tailwind "), "\u2014 The css framework")))));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  loader: () => loader9
});
var import_ssr8 = require("@clerk/remix/ssr.server"), import_node9 = require("@remix-run/node"), import_react26 = require("@remix-run/react");
async function loader9({ request }) {
  let { userId } = await (0, import_ssr8.getAuth)(request);
  return userId ? (0, import_node9.redirect)("/dashboard") : null;
}
function IndexRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-2 ml-4"
  }, /* @__PURE__ */ React.createElement(import_react26.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    className: "w-10 h-10"
  })), /* @__PURE__ */ React.createElement(import_react26.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "TipLand"))), /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex gap-6 text-sm items-center"
  }, /* @__PURE__ */ React.createElement(import_react26.Link, {
    to: "sign-in",
    className: "text-slate-600"
  }, "Sign In"), /* @__PURE__ */ React.createElement(import_react26.Link, {
    className: "bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black",
    to: "sign-up"
  }, "Sign Up"))), /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto p-8 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-14 md:mt-24"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl text-zinc-900 font-extrabold md:text-8xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500"
  }, "Tip Land"), " the SaaS platform for the tip of the day"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8 text-2xl text-gray-700 font-extralight md:text-3xl md:w-9/12 md:mt-12"
  }, "The easy integration platform to offer users the advice that will help them to better use your product."), /* @__PURE__ */ React.createElement("section", {
    className: "mt-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex gap-4"
  }, /* @__PURE__ */ React.createElement(import_react26.Link, {
    to: "/sign-up",
    className: "text-white bg-gradient-to-r from-black to-neutral-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5"
  }, "Get starter"), /* @__PURE__ */ React.createElement(import_react26.Link, {
    to: "/about",
    className: "text-black hover:text-zinc-800 border border-black hover:bg-zinc-50 focus:ring-4 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5"
  }, "About"))), /* @__PURE__ */ React.createElement("section", {
    className: "mt-12 md:mt-24"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-extrabold text-3xl mb-12 md:text-5xl"
  }, "Start creating tips"), /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:gap-8"
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/tips.png",
    alt: "tips",
    className: "max-w-full h-auto"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "font-bold text-2xl"
  }, "Categories"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 font-light text-gray-800"
  }, "The tips of the day are segmented by categories which can be used by product, type of customers or applications"), /* @__PURE__ */ React.createElement("h5", {
    className: "font-bold text-2xl mt-6"
  }, "Ramdom"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 font-light text-gray-800"
  }, "Each tip requested via rest api is by default random"), /* @__PURE__ */ React.createElement("h5", {
    className: "font-bold text-2xl mt-6"
  }, "Social"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 font-light text-gray-800"
  }, "Sign in easily via Google, Github or email")))), /* @__PURE__ */ React.createElement("section", {
    className: "mt-12 md:mt-24"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-extrabold text-3xl mb-12 md:text-5xl"
  }, "Developer Focused"), /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:gap-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "font-bold text-2xl"
  }, "API Key"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 font-light text-gray-800"
  }, "Get your API key to query through the API Rest randomly a tip or filter it by category"), /* @__PURE__ */ React.createElement("h5", {
    className: "font-bold text-2xl mt-6"
  }, "Statistics"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 font-light text-gray-800"
  }, "Check the total number of requests in the last days"), /* @__PURE__ */ React.createElement("h6", {
    className: "font-bold text-2xl mt-6"
  }, "Privacy"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 font-light text-gray-800"
  }, "You can change the assigned API Key in the developer section")), /* @__PURE__ */ React.createElement("figure", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/developer.png",
    alt: "developer",
    className: "max-w-full h-auto"
  })))))), /* @__PURE__ */ React.createElement("footer", {
    className: "mt-8 text-sm p-8 md:p-8 font-light md:flex md:justify-between"
  }, /* @__PURE__ */ React.createElement("div", null, "\xA9", " Made for ", /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/devteam/announcing-the-redis-hackathon-on-dev-3248",
    target: "_blank",
    className: "font-bold underline"
  }, "Redis Hackathon ")), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-3 justify-center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dev.to/",
    target: "_blank",
    className: "hover:opacity-80"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/devto.png",
    alt: "twitter",
    width: "32"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://redis.io/",
    target: "_blank",
    className: "hover:opacity-80"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/redis.png",
    alt: "twitter",
    width: "26"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/andreslopezrm/tip-land",
    target: "_blank",
    className: "hover:opacity-80"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/github.png",
    alt: "github",
    width: "24"
  })))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "110b5d61", entry: { module: "/build/entry.client-IZWJTQY7.js", imports: ["/build/_shared/chunk-BOJHJ2SB.js", "/build/_shared/chunk-SPRLBSB7.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-72GF3FTS.js", imports: ["/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-UB5R2NVI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/tips": { id: "routes/api/tips", parentId: "root", path: "api/tips", index: void 0, caseSensitive: void 0, module: "/build/routes/api/tips-WNGDHI5F.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-AYESXSGQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/categories": { id: "routes/dashboard/categories", parentId: "routes/dashboard", path: "categories", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/categories-VVEETTUL.js", imports: ["/build/_shared/chunk-NUPH6IQX.js", "/build/_shared/chunk-BQD37SUP.js", "/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/developer": { id: "routes/dashboard/developer", parentId: "routes/dashboard", path: "developer", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/developer-OXIVMOQ2.js", imports: ["/build/_shared/chunk-BQD37SUP.js", "/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-4JWCNJSP.js", imports: ["/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/perfil": { id: "routes/dashboard/perfil", parentId: "routes/dashboard", path: "perfil", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/perfil-Y5MIICPF.js", imports: ["/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/stats": { id: "routes/dashboard/stats", parentId: "routes/dashboard", path: "stats", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/stats-BUXQ5OG4.js", imports: ["/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/tips": { id: "routes/dashboard/tips", parentId: "routes/dashboard", path: "tips", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/tips-LB3RC6M4.js", imports: ["/build/_shared/chunk-NUPH6IQX.js", "/build/_shared/chunk-BQD37SUP.js", "/build/_shared/chunk-TNUSZ5ZZ.js", "/build/_shared/chunk-LOWEPNLN.js", "/build/_shared/chunk-AM76S2GN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JFCSSOQQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-MGQORCQV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-ZFWAAVVH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-110B5D61.js" };

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
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
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
