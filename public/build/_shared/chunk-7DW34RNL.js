import {
  require_dist
} from "/build/_shared/chunk-IPP4XDWJ.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-PQV6DCII.js";

// app/components/dash-header.tsx
init_react();
var import_react = __toESM(require_react());
var import_remix = __toESM(require_dist());
function DashHeader({ title }) {
  const { signOut } = (0, import_remix.useClerk)();
  const [isDisabled, setIsDisabled] = (0, import_react.useState)(false);
  const handleOnExitSession = async () => {
    setIsDisabled(true);
    await signOut();
    setIsDisabled(false);
    window.location.href = "/";
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-extrabold md:text-3xl"
  }, title), /* @__PURE__ */ React.createElement("button", {
    disabled: isDisabled,
    type: "button",
    onClick: handleOnExitSession,
    className: "text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden md:block disabled:opacity-50"
  }, "Logout"));
}

export {
  DashHeader
};
//# sourceMappingURL=/build/_shared/chunk-7DW34RNL.js.map
