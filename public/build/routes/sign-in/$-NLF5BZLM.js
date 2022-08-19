import {
  require_dist
} from "/build/_shared/chunk-AM76S2GN.js";
import "/build/_shared/chunk-BOJHJ2SB.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// browser-route-module:routes/sign-in/$.tsx?browser
init_react();

// app/routes/sign-in/$.tsx
init_react();
var import_remix = __toESM(require_dist());
function SignInRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center md:gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "30"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "uppercase font-extrabold md:block"
  }, "Tip Land")), /* @__PURE__ */ React.createElement(import_remix.SignIn, {
    routing: "path",
    path: "/sign-in"
  })));
}
export {
  SignInRoute as default
};
//# sourceMappingURL=/build/routes/sign-in/$-NLF5BZLM.js.map
