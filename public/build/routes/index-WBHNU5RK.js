import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-CZPSQZ3L.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_db = __toESM(require_db());
function Index() {
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Datos"), /* @__PURE__ */ React.createElement("p", null, data.name), /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold underline text-red-700"
  }, "Hello world!"));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-WBHNU5RK.js.map
