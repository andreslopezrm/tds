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
  useLoaderData
} from "/build/_shared/chunk-47DFYYCO.js";

// empty-module:~/db/apikey.server
var require_apikey = __commonJS({
  "empty-module:~/db/apikey.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard/developer.tsx?browser
init_react();

// app/routes/dashboard/developer.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_react2 = __toESM(require_react());

// app/components/developer-list.tsx
init_react();
function DeveloperList({ apiKey }) {
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
    onClick: () => {
    },
    className: "underline hover:opacity-80"
  }, "View"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
    },
    className: "hover:opacity-80"
  }, "Refresh")))))));
}

// app/routes/dashboard/developer.tsx
var import_apikey = __toESM(require_apikey());
function DashboardDeveloperRoute() {
  const { apiKey } = useLoaderData();
  const [baseUrl, setBaseUrl] = (0, import_react2.useState)("");
  const [showApiKey, setShowApiKey] = (0, import_react2.useState)(false);
  const [enpointUrl, setEndpointUrl] = (0, import_react2.useState)("");
  const apiKeyValue = showApiKey ? apiKey == null ? void 0 : apiKey.value : "******************";
  (0, import_react2.useEffect)(() => {
    setBaseUrl(window.location.origin);
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Developer"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 font-light"
  }, "To use the api rest of the tip of the day, send the value of your Api Key as a query parameter in the request"), /* @__PURE__ */ React.createElement(DeveloperList, {
    apiKey: apiKeyValue
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold mt-6 text-xl"
  }, "Endpoint"), /* @__PURE__ */ React.createElement("p", {
    className: "font-light mt-2"
  }, "Usage example"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-100 p-2 mt-2 rounded"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "font-mono text-sm underline",
    href: enpointUrl,
    target: "_blank"
  }, enpointUrl)));
}
export {
  DashboardDeveloperRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/developer-4DKD4RN2.js.map
