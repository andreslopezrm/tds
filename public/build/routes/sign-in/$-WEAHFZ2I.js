import {
  require_dist
} from "/build/_shared/chunk-5647L2W7.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-27P3YZSQ.js";

// browser-route-module:routes/sign-in/$.tsx?browser
init_react();

// app/routes/sign-in/$.tsx
init_react();
var import_remix = __toESM(require_dist());
function SignInRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix.SignIn, {
    routing: "path",
    path: "/sign-in"
  }));
}
export {
  SignInRoute as default
};
//# sourceMappingURL=/build/routes/sign-in/$-WEAHFZ2I.js.map
