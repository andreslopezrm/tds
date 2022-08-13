import {
  require_dist
} from "/build/_shared/chunk-732KBAAV.js";
import "/build/_shared/chunk-6WBNZMUB.js";
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
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center p-8"
  }, /* @__PURE__ */ React.createElement(import_remix.SignIn, {
    routing: "path",
    path: "/sign-in"
  }));
}
export {
  SignInRoute as default
};
//# sourceMappingURL=/build/routes/sign-in/$-UPSGK5NR.js.map
