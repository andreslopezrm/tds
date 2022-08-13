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
var app_default = "/build/_assets/app-RIOENE35.css";

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
var import_ssr2 = require("@clerk/remix/ssr.server"), import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/db/user.server.ts
var import_redis_om2 = require("redis-om");

// app/db/redis.server.ts
var import_redis_om = require("redis-om"), redisClient = new import_redis_om.Client(), redisConnect = async () => {
  redisClient.isOpen() || await redisClient.open(process.env.REDIS_URL);
};

// app/db/user.server.ts
var User = class extends import_redis_om2.Entity {
}, userSchema = new import_redis_om2.Schema(User, {
  clerkId: { type: "string" },
  provider: { type: "string" },
  active: { type: "boolean" },
  createAt: { type: "date" }
});
async function checkUser(userId) {
  await redisConnect();
  let repository = redisClient.fetchRepository(userSchema);
  await repository.search().where("clerkId").equals(userId).first() || await repository.createAndSave({
    clerkId: userId,
    active: !0,
    createAt: new Date()
  });
}
async function createIndex() {
  await redisConnect(), await redisClient.fetchRepository(userSchema).createIndex(), await redisClient.close();
}
createIndex();

// app/routes/dashboard.tsx
async function loader2({ request }) {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  return userId ? (await checkUser(userId), (0, import_node2.json)({ userId })) : (0, import_node2.redirect)("/sign-up");
}
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-8"
  }, /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "stats"
  }, "stadistics"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "products"
  }, "products"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "perfil"
  }, "perfil")), /* @__PURE__ */ React.createElement("section", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_react3.Outlet, null))));
}

// app/routes/dashboard/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Dashboard,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/params.server.ts
function getQueryIntParameter(request, name, defaultValue) {
  let url = new URL(request.url), param = parseInt(url.searchParams.get(name) ?? "", 10);
  return isNaN(param) ? defaultValue : param;
}

// app/routes/dashboard/products.tsx
function loader3({ request }) {
  let offset = getQueryIntParameter(request, "offset", 0);
  return (0, import_node3.json)({ offset });
}
function Dashboard() {
  let { offset } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "products dash"), /* @__PURE__ */ React.createElement("p", null, "Offset: ", offset), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/dashboard/products?offset=2"
  }, "Next"));
}

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => DashboardIndexRoute
});
function DashboardIndexRoute() {
  return /* @__PURE__ */ React.createElement("h1", null, "index dash");
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_remix3 = require("@clerk/remix");
function SignInRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix3.SignIn, {
    routing: "path",
    path: "/sign-in"
  }));
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpRoute
});
var import_remix4 = require("@clerk/remix");
function SignUpRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix4.SignUp, {
    routing: "path",
    path: "/sign-up"
  }));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  loader: () => loader4
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
async function loader4({ request }) {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  return userId ? (0, import_node4.redirect)("/dashboard") : null;
}
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Datos"), /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "/sign-in"
  }, "Sign In"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "/sign-up"
  }, "Sign Up"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1267874e", entry: { module: "/build/entry.client-4PNEDKIQ.js", imports: ["/build/_shared/chunk-6WBNZMUB.js", "/build/_shared/chunk-SPRLBSB7.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L7ZBUZYW.js", imports: ["/build/_shared/chunk-732KBAAV.js", "/build/_shared/chunk-TNUSZ5ZZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-T4JFEKVS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-RSXFDYXY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/products": { id: "routes/dashboard/products", parentId: "routes/dashboard", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/products-O7NE52ND.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-AQ7IKTEO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-K652UXX6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-5KL3DKHJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1267874E.js" };

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
  "routes/dashboard/products": {
    id: "routes/dashboard/products",
    parentId: "routes/dashboard",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
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
