import {
  require_dist
} from "/build/_shared/chunk-STNWSKCN.js";
import "/build/_shared/chunk-X5FEU4FX.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-UYFT55SY.js";

// browser-route-module:routes/sign-up/$.tsx?browser
init_react();

// app/routes/sign-up/$.tsx
init_react();
var import_remix = __toESM(require_dist());
function SignUpRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix.SignUp, {
    routing: "path",
    path: "/sign-up"
  }));
}
export {
  SignUpRoute as default
};
//# sourceMappingURL=/build/routes/sign-up/$-RWNQ3ITJ.js.map
