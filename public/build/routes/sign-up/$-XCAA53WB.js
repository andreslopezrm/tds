import {
  require_dist
} from "/build/_shared/chunk-AM76S2GN.js";
import "/build/_shared/chunk-BOJHJ2SB.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// browser-route-module:routes/sign-up/$.tsx?browser
init_react();

// app/routes/sign-up/$.tsx
init_react();
var import_remix = __toESM(require_dist());
function SignUpRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center mb-5 md:gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "35"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "uppercase font-extrabold text-2xl md:block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Tip Land"))), /* @__PURE__ */ React.createElement(import_remix.SignUp, {
    routing: "path",
    path: "/sign-up"
  })));
}
export {
  SignUpRoute as default
};
//# sourceMappingURL=/build/routes/sign-up/$-XCAA53WB.js.map
