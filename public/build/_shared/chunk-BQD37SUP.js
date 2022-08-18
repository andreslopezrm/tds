import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// app/components/toast.tsx
init_react();
var import_react = __toESM(require_react());
function Toast({ message, onClose, delay = true }) {
  (0, import_react.useEffect)(() => {
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

export {
  Toast
};
//# sourceMappingURL=/build/_shared/chunk-BQD37SUP.js.map
