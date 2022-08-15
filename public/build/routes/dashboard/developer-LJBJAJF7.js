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
var import_apikey = __toESM(require_apikey());
function DashboardDeveloperRoute() {
  const { apiKey } = useLoaderData();
  const [baseUrl, setBaseUrl] = (0, import_react2.useState)("");
  const [showApiKey, setShowApiKey] = (0, import_react2.useState)(false);
  const [enpointUrl, setEndpointUrl] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    setBaseUrl(window.location.origin);
  }, []);
  (0, import_react2.useEffect)(() => {
    setEndpointUrl(`${baseUrl}/api/tips?api_key=${showApiKey ? apiKey : "****************"}`);
  }, [baseUrl, showApiKey]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Developer"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 font-light"
  }, "To use the api rest of the tip of the day, send the value of your Api Key as a query parameter in the request"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 font-light"
  }, "Usage example"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-100 p-4"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "font-mono"
  })));
}
export {
  DashboardDeveloperRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/developer-LJBJAJF7.js.map
