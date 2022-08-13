import {
  require_dist
} from "/build/_shared/chunk-732KBAAV.js";
import "/build/_shared/chunk-6WBNZMUB.js";
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
  return /* @__PURE__ */ React.createElement("div", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix.SignUp, {
    routing: "path",
    path: "/sign-up"
  }));
}
export {
  SignUpRoute as default
};
//# sourceMappingURL=/build/routes/sign-up/$-EJ4PTBC3.js.map
