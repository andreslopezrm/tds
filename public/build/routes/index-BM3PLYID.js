import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-CZPSQZ3L.js";

// browser-route-module:routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Datos"), /* @__PURE__ */ React.createElement("p", null, data.name));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-BM3PLYID.js.map
