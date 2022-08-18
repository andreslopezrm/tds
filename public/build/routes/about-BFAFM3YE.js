import {
  Link,
  init_esm
} from "/build/_shared/chunk-BOJHJ2SB.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// browser-route-module:routes/about.tsx?browser
init_react();

// app/routes/about.tsx
init_react();
init_esm();
function AboutRoute() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-2 ml-4"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    className: "w-10 h-10"
  })), /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "TipLand"))), /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 flex gap-6 text-sm items-center"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "sign-in",
    className: "text-slate-600"
  }, "Sign In"), /* @__PURE__ */ React.createElement(Link, {
    className: "bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black",
    to: "sign-up"
  }, "Sign Up"))));
}
export {
  AboutRoute as default
};
//# sourceMappingURL=/build/routes/about-BFAFM3YE.js.map
