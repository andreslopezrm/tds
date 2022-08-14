import {
  React,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// app/components/dash-header.tsx
init_react();
function DashHeader({ title }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-extrabold md:text-3xl"
  }, title), /* @__PURE__ */ React.createElement("button", {
    disabled: true,
    type: "button",
    className: "text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden md:block disabled:opacity-50"
  }, "Logout"));
}

export {
  DashHeader
};
//# sourceMappingURL=/build/_shared/chunk-X2RR6ZRL.js.map
