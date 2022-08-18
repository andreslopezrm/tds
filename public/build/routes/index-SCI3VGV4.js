import {
  require_ssr
} from "/build/_shared/chunk-TNUSZ5ZZ.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-BOJHJ2SB.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// browser-route-module:routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
function IndexRoute() {
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
  }, "Sign Up"))), /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto p-8 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-14 md:mt-24"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl text-zinc-900 font-extrabold md:text-8xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500"
  }, "Tip Land"), " the SaaS platform for the Tip of the day"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8 text-2xl text-gray-700 font-extralight md:text-3xl md:w-9/12 md:mt-12"
  }, "The easy integration platform to offer users the advice that will help them to better use your product."), /* @__PURE__ */ React.createElement("section", {
    className: "mt-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex gap-4"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/sign-up",
    className: "text-white bg-gradient-to-r from-black to-neutral-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5"
  }, "Get starter"), /* @__PURE__ */ React.createElement(Link, {
    to: "/about",
    className: "text-black hover:text-zinc-800 border border-black hover:bg-zinc-50 focus:ring-4 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5"
  }, "About"))), /* @__PURE__ */ React.createElement("section", {
    className: "mt-16 md:mt-24"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold text-2xl md:text-4xl"
  }, "Start creating tips"), /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:gap-3"
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "flex-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("h5", null, "Categories"), /* @__PURE__ */ React.createElement("p", null, "The tips of the day are segmented by categories which can be used by product, type of customers or applications"), /* @__PURE__ */ React.createElement("h5", null, "Ramdom"), /* @__PURE__ */ React.createElement("p", null, "Each tip requested via rest api is by default random"), /* @__PURE__ */ React.createElement("h5", null, "Social"), /* @__PURE__ */ React.createElement("p", null, "Sign in easily via Google, Github or email")))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", null, "Developer Focused"), /* @__PURE__ */ React.createElement("h5", null, "API Key"), /* @__PURE__ */ React.createElement("p", null, "Get your api key to query through the Rest API"), /* @__PURE__ */ React.createElement("h5", null, "Statistics"), /* @__PURE__ */ React.createElement("p", null, "Check the total number of requests in the last days"), /* @__PURE__ */ React.createElement("h6", null, "Privacy"), /* @__PURE__ */ React.createElement("p", null, "You can change the assigned API Key in the developer section")))));
}
export {
  IndexRoute as default
};
//# sourceMappingURL=/build/routes/index-SCI3VGV4.js.map
