import {
  require_ssr
} from "/build/_shared/chunk-IHQYN5AL.js";
import {
  Link,
  Outlet,
  React,
  __commonJS,
  __toESM,
  init_esm,
  init_react,
  useLocation
} from "/build/_shared/chunk-WGMDGRU7.js";

// empty-module:~/db/user.server
var require_user = __commonJS({
  "empty-module:~/db/user.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard.tsx?browser
init_react();

// app/routes/dashboard.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();

// app/components/dash-navbar.tsx
init_react();
init_esm();

// app/utils/menu.ts
init_react();
var menuItems = [
  {
    id: "home",
    title: "Home",
    path: "",
    completePath: "/dashboard"
  },
  {
    id: "tip",
    title: "Tips",
    path: "tips",
    completePath: "/dashboard/tips"
  },
  {
    id: "cat",
    title: "Categories",
    path: "categories",
    completePath: "/dashboard/categories"
  },
  {
    id: "stats",
    title: "Stats",
    path: "stats",
    completePath: "/dashboard/stats"
  },
  {
    id: "dev",
    title: "Developer",
    path: "developer",
    completePath: "/dashboard/developer"
  },
  {
    id: "perfil",
    title: "Perfil",
    path: "perfil",
    completePath: "/dashboard/perfil"
  }
];

// app/components/dash-navbar.tsx
function DashNavbar() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-gray-100 p-3 shadow md:w-56 md:px-6 md:py-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center md:gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "30"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "hidden uppercase font-extrabold md:block"
  }, "Tip Land")), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "hidden mt-3 font-bold px-2 md:block"
  }, "Menu"), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-3 w-full"
  }, menuItems.map(({ id, title, path, completePath }) => {
    const isSelected = pathname == completePath;
    const imageType = isSelected ? "fill" : "out";
    return /* @__PURE__ */ React.createElement("li", {
      key: id,
      className: "mt-2 px-2 py-1 rounded hover:bg-gray-200"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: path,
      className: "flex items-center w-6 md:w-auto md:gap-2"
    }, /* @__PURE__ */ React.createElement("img", {
      src: `/images/${id}-${imageType}.png`,
      alt: title,
      className: "w-6 h-6 md:w-4 md:h-4"
    }), /* @__PURE__ */ React.createElement("span", {
      className: `hidden text-sm ${isSelected ? "font-semibold" : "font-light"} md:block`
    }, title)));
  }), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "mt-6 px-2 py-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logout.png",
    alt: "Logout",
    className: "w-6 h-6 md:hidden md:w-4 md:h-4"
  })))));
}

// app/routes/dashboard.tsx
var import_user = __toESM(require_user());
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-screen"
  }, /* @__PURE__ */ React.createElement(DashNavbar, null), /* @__PURE__ */ React.createElement("section", {
    className: "flex-1 px-4 py-4 md:px-6"
  }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  DashboardRoute as default
};
//# sourceMappingURL=/build/routes/dashboard-WX3PY7NG.js.map
