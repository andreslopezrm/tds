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
  }, "Sign Up"))), /* @__PURE__ */ React.createElement("div", {
    className: "container m-0 mx-auto font-light mt-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mt-12 text-3xl mb-8 font-extrabold"
  }, "About"), /* @__PURE__ */ React.createElement("p", null, "-"), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-4 text-2xl mb-2 font-bold"
  }, "Made for"), "This project is made specifically for the ", /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://dev.to/devteam/announcing-the-redis-hackathon-on-dev-3248",
    className: "underline"
  }, "Dev.to Redis Hackathon"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 font-bold"
  }, "Link article"), /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "-",
    target: "_blank"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-4 text-2xl mb-2 font-bold"
  }, "Tech Stack"), /* @__PURE__ */ React.createElement("ol", {
    className: "list-decimal ml-4"
  }, /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://redis.io/"
  }, "Redis "), "\u2014 The main database"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://redis.com/try-free/"
  }, "Redis Cloud "), "\u2014 The platform for Redis"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://github.com/redis/redis-om-node"
  }, "Redis OM for Node "), "\u2014 The object mapping for Redis"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://remix.run/"
  }, "Remix "), "\u2014 The web framewok"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://vercel.com/"
  }, "Vercel "), "\u2014 For deploy"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://clerk.dev/"
  }, "Clerk "), "- For the Auth"), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    target: "_blank",
    href: "https://tailwindcss.com/"
  }, "Tailwind "), "\u2014 The css framework")))));
}
export {
  AboutRoute as default
};
//# sourceMappingURL=/build/routes/about-UB5R2NVI.js.map
