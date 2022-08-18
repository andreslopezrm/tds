import {
  Form,
  Link,
  init_esm
} from "/build/_shared/chunk-BOJHJ2SB.js";
import {
  React,
  __commonJS,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// empty-module:~/db/category.server
var require_category = __commonJS({
  "empty-module:~/db/category.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// empty-module:~/utils/params.server
var require_params = __commonJS({
  "empty-module:~/utils/params.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// app/components/confirm-modal-delete.tsx
init_react();
init_esm();

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

// app/components/confirm-modal-delete.tsx
function ConfirmModalDelete({ entityId, isSubmiting, message, onClose }) {
  return /* @__PURE__ */ React.createElement(Modal, {
    onClose
  }, /* @__PURE__ */ React.createElement(Form, {
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

// app/components/load-more.tsx
init_react();
init_esm();
function LoadMore({ total, current, path, offset, perPage }) {
  if (current >= total) {
    return null;
  }
  const nextPath = `${path}?offset=${offset}&per_page=${perPage += perPage}`;
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: nextPath,
    className: "text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
  }, "Load more"));
}

export {
  Modal,
  ConfirmModalDelete,
  LoadMore,
  require_category,
  require_params
};
//# sourceMappingURL=/build/_shared/chunk-NUPH6IQX.js.map
