import {
  __commonJS,
  __toCommonJS,
  esm_exports,
  init_esm,
  init_react,
  require_react
} from "/build/_shared/chunk-PQV6DCII.js";

// node_modules/@clerk/remix/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/@clerk/remix/node_modules/tslib/tslib.js"(exports, module) {
    init_react();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __classPrivateFieldIn;
    var __createBinding;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      __spreadArrays = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    });
  }
});

// node_modules/@clerk/remix/dist/globalPolyfill.js
var require_globalPolyfill = __commonJS({
  "node_modules/@clerk/remix/dist/globalPolyfill.js"() {
    "use strict";
    init_react();
    if (typeof window !== "undefined" && typeof window.global === "undefined") {
      window.global = window;
    }
  }
});

// node_modules/@clerk/clerk-react/node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "node_modules/@clerk/clerk-react/node_modules/tslib/tslib.js"(exports, module) {
    init_react();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __classPrivateFieldIn;
    var __createBinding;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      __spreadArrays = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    });
  }
});

// node_modules/@clerk/clerk-react/dist/errors.js
var require_errors = __commonJS({
  "node_modules/@clerk/clerk-react/dist/errors.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.invalidStateError = exports.isMagicLinkError = exports.MagicLinkErrorCode = exports.multipleChildrenInButtonComponent = exports.hocChildrenNotAFunctionError = exports.multipleClerkProvidersError = exports.noGuaranteedUserError = exports.noGuaranteedLoadedError = exports.noClerkProviderError = exports.noFrontendApiError = void 0;
    exports.noFrontendApiError = "Clerk: You must add the frontendApi prop to your <ClerkProvider>";
    exports.noClerkProviderError = "Clerk: You must wrap your application in a <ClerkProvider> component.";
    var noGuaranteedLoadedError = (hookName) => `Clerk: You're calling ${hookName} before there's a guarantee the client has been loaded. Call ${hookName} from a child of <SignedIn>, <SignedOut>, or <ClerkLoaded>, or use the withClerk() HOC.`;
    exports.noGuaranteedLoadedError = noGuaranteedLoadedError;
    var noGuaranteedUserError = (hookName) => `Clerk: You're calling ${hookName} before there's a guarantee there's an active user. Call ${hookName} from a child of <SignedIn> or use the withUser() HOC.`;
    exports.noGuaranteedUserError = noGuaranteedUserError;
    exports.multipleClerkProvidersError = "Clerk: You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.";
    exports.hocChildrenNotAFunctionError = "Clerk: Child of WithClerk must be a function.";
    var multipleChildrenInButtonComponent = (name) => `Clerk: You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
    exports.multipleChildrenInButtonComponent = multipleChildrenInButtonComponent;
    exports.MagicLinkErrorCode = {
      Expired: "expired",
      Failed: "failed"
    };
    function isMagicLinkError(err) {
      return !!err && (err.code === exports.MagicLinkErrorCode.Expired || err.code === exports.MagicLinkErrorCode.Failed);
    }
    exports.isMagicLinkError = isMagicLinkError;
    exports.invalidStateError = "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.dev/support";
  }
});

// node_modules/@clerk/clerk-react/dist/utils/isConstructor.js
var require_isConstructor = __commonJS({
  "node_modules/@clerk/clerk-react/dist/utils/isConstructor.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isConstructor = void 0;
    function isConstructor(f) {
      return typeof f === "function";
    }
    exports.isConstructor = isConstructor;
  }
});

// node_modules/@clerk/clerk-react/dist/info.js
var require_info = __commonJS({
  "node_modules/@clerk/clerk-react/dist/info.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LIB_NAME = exports.LIB_VERSION = void 0;
    exports.LIB_VERSION = "4.0.2";
    exports.LIB_NAME = "@clerk/clerk-react";
  }
});

// node_modules/@clerk/clerk-react/dist/utils/scriptLoader.js
var require_scriptLoader = __commonJS({
  "node_modules/@clerk/clerk-react/dist/utils/scriptLoader.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadScript = void 0;
    var info_1 = require_info();
    var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
    var MISSING_PROVIDER_ERROR = "Clerk: Missing provider";
    var MISSING_BODY_ERROR = "Clerk: Missing <body> element.";
    var UNSTABLE_RELEASE_TAGS = ["staging", "next"];
    var extractNonStableTag = (packageVersion) => {
      var _a;
      const tag = (_a = packageVersion.match(/-(.*)\./)) === null || _a === void 0 ? void 0 : _a[1];
      return tag && UNSTABLE_RELEASE_TAGS.includes(tag) ? tag : void 0;
    };
    var extractMajorVersion = (packageVersion) => {
      return packageVersion.split(".")[0];
    };
    var forceStagingReleaseForClerkFapi = (frontendApi) => {
      return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev");
    };
    function getScriptSrc({ frontendApi, scriptUrl, scriptVariant = "" }) {
      if (scriptUrl) {
        return scriptUrl;
      }
      const variant = scriptVariant ? `${scriptVariant.replace(/\.+$/, "")}.` : "";
      const getUrlForTag = (target) => {
        return `https://${frontendApi}/npm/@clerk/clerk-js@${target}/dist/clerk.${variant}browser.js`;
      };
      const nonStableTag = extractNonStableTag(info_1.LIB_VERSION);
      if (forceStagingReleaseForClerkFapi(frontendApi)) {
        return nonStableTag ? getUrlForTag(nonStableTag) : getUrlForTag("staging");
      }
      if (nonStableTag) {
        return getUrlForTag(nonStableTag);
      }
      return getUrlForTag(extractMajorVersion(info_1.LIB_VERSION));
    }
    function loadScript(params) {
      return new Promise((resolve, reject) => {
        const { frontendApi } = params;
        if (globalThis.Clerk) {
          resolve(null);
        }
        if (!frontendApi) {
          reject(MISSING_PROVIDER_ERROR);
        }
        const script = document.createElement("script");
        const src = getScriptSrc(params);
        script.setAttribute("data-clerk-frontend-api", frontendApi);
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;
        if (!document.body) {
          reject(MISSING_BODY_ERROR);
        }
        script.addEventListener("load", () => resolve(script));
        script.addEventListener("error", () => reject(FAILED_TO_LOAD_ERROR));
        script.src = src;
        document.body.appendChild(script);
      });
    }
    exports.loadScript = loadScript;
  }
});

// node_modules/@clerk/clerk-react/dist/utils/useMaxAllowedInstancesGuard.js
var require_useMaxAllowedInstancesGuard = __commonJS({
  "node_modules/@clerk/clerk-react/dist/utils/useMaxAllowedInstancesGuard.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withMaxAllowedInstancesGuard = exports.useMaxAllowedInstancesGuard = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var counts = /* @__PURE__ */ new Map();
    function useMaxAllowedInstancesGuard(name, error, maxCount = 1) {
      react_1.default.useEffect(() => {
        const count = counts.get(name) || 0;
        if (count == maxCount) {
          throw new Error(error);
        }
        counts.set(name, count + 1);
        return () => {
          counts.set(name, (counts.get(name) || 1) - 1);
        };
      }, []);
    }
    exports.useMaxAllowedInstancesGuard = useMaxAllowedInstancesGuard;
    function withMaxAllowedInstancesGuard(WrappedComponent, name, error) {
      const displayName = WrappedComponent.displayName || WrappedComponent.name || name || "Component";
      const Hoc = (props) => {
        useMaxAllowedInstancesGuard(name, error);
        return react_1.default.createElement(WrappedComponent, Object.assign({}, props));
      };
      Hoc.displayName = `withMaxAllowedInstancesGuard(${displayName})`;
      return Hoc;
    }
    exports.withMaxAllowedInstancesGuard = withMaxAllowedInstancesGuard;
  }
});

// node_modules/@clerk/clerk-react/dist/utils/childrenUtils.js
var require_childrenUtils = __commonJS({
  "node_modules/@clerk/clerk-react/dist/utils/childrenUtils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeExecute = exports.normalizeWithDefaultValue = exports.assertSingleChild = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var errors_1 = require_errors();
    var assertSingleChild = (children) => (name) => {
      try {
        return react_1.default.Children.only(children);
      } catch (e) {
        throw new Error((0, errors_1.multipleChildrenInButtonComponent)(name));
      }
    };
    exports.assertSingleChild = assertSingleChild;
    var normalizeWithDefaultValue = (children, defaultText) => {
      if (!children) {
        children = defaultText;
      }
      if (typeof children === "string") {
        children = react_1.default.createElement("button", null, children);
      }
      return children;
    };
    exports.normalizeWithDefaultValue = normalizeWithDefaultValue;
    var safeExecute = (cb) => (...args) => {
      if (cb && typeof cb === "function") {
        return cb(...args);
      }
    };
    exports.safeExecute = safeExecute;
  }
});

// node_modules/@clerk/clerk-react/dist/utils/inClientSide.js
var require_inClientSide = __commonJS({
  "node_modules/@clerk/clerk-react/dist/utils/inClientSide.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inClientSide = void 0;
    var inClientSide = () => {
      return typeof window !== "undefined";
    };
    exports.inClientSide = inClientSide;
  }
});

// node_modules/@clerk/clerk-react/dist/utils/index.js
var require_utils = __commonJS({
  "node_modules/@clerk/clerk-react/dist/utils/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib2();
    tslib_1.__exportStar(require_isConstructor(), exports);
    tslib_1.__exportStar(require_scriptLoader(), exports);
    tslib_1.__exportStar(require_useMaxAllowedInstancesGuard(), exports);
    tslib_1.__exportStar(require_childrenUtils(), exports);
    tslib_1.__exportStar(require_inClientSide(), exports);
  }
});

// node_modules/@clerk/clerk-react/dist/isomorphicClerk.js
var require_isomorphicClerk = __commonJS({
  "node_modules/@clerk/clerk-react/dist/isomorphicClerk.js"(exports) {
    "use strict";
    init_react();
    var _a;
    var _IsomorphicClerk_loaded;
    var _IsomorphicClerk_instance;
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib2();
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    var IsomorphicClerk = class {
      constructor(params) {
        this.clerkjs = null;
        this.preopenSignIn = null;
        this.preopenSignUp = null;
        this.preopenUserProfile = null;
        this.premountSignInNodes = /* @__PURE__ */ new Map();
        this.premountSignUpNodes = /* @__PURE__ */ new Map();
        this.premountUserProfileNodes = /* @__PURE__ */ new Map();
        this.premountUserButtonNodes = /* @__PURE__ */ new Map();
        this.premountMethodCalls = /* @__PURE__ */ new Map();
        this.loadedListeners = [];
        _IsomorphicClerk_loaded.set(this, false);
        this.addOnLoaded = (cb) => {
          this.loadedListeners.push(cb);
        };
        this.emitLoaded = () => {
          this.loadedListeners.forEach((cb) => cb());
          this.loadedListeners = [];
        };
        this.hydrateClerkJS = async (clerkjs) => {
          if (!clerkjs) {
            throw new Error("Failed to hydrate latest Clerk JS");
          }
          this.clerkjs = clerkjs;
          this.premountMethodCalls.forEach((cb) => cb());
          if (this.preopenSignIn !== null) {
            clerkjs.openSignIn(this.preopenSignIn);
          }
          if (this.preopenSignUp !== null) {
            clerkjs.openSignUp(this.preopenSignUp);
          }
          if (this.preopenUserProfile !== null) {
            clerkjs.openUserProfile(this.preopenUserProfile);
          }
          this.premountSignInNodes.forEach((props, node) => {
            clerkjs.mountSignIn(node, props);
          });
          this.premountSignUpNodes.forEach((props, node) => {
            clerkjs.mountSignUp(node, props);
          });
          this.premountUserProfileNodes.forEach((props, node) => {
            clerkjs.mountUserProfile(node, props);
          });
          this.premountUserButtonNodes.forEach((props, node) => {
            clerkjs.mountUserButton(node, props);
          });
          tslib_1.__classPrivateFieldSet(this, _IsomorphicClerk_loaded, true, "f");
          this.emitLoaded();
          return this.clerkjs;
        };
        this.__unstable__updateProps = (props) => {
          if (this.clerkjs && "__unstable__updateProps" in this.clerkjs) {
            this.clerkjs.__unstable__updateProps(props);
          } else {
            return void 0;
          }
        };
        this.setActive = ({ session, organization, beforeEmit }) => {
          if (this.clerkjs) {
            return this.clerkjs.setActive({ session, organization, beforeEmit });
          } else {
            return Promise.reject();
          }
        };
        this.setSession = (session, beforeEmit) => {
          return this.setActive({ session, beforeEmit });
        };
        this.openSignIn = (props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.openSignIn(props);
          } else {
            this.preopenSignIn = props;
          }
        };
        this.closeSignIn = () => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.closeSignIn();
          } else {
            this.preopenSignIn = null;
          }
        };
        this.openUserProfile = (props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.openUserProfile(props);
          } else {
            this.preopenUserProfile = props;
          }
        };
        this.closeUserProfile = () => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.closeUserProfile();
          } else {
            this.preopenUserProfile = null;
          }
        };
        this.openSignUp = (props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.openSignUp(props);
          } else {
            this.preopenSignUp = props;
          }
        };
        this.closeSignUp = () => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.closeSignUp();
          } else {
            this.preopenSignUp = null;
          }
        };
        this.mountSignIn = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountSignIn(node, props);
          } else {
            this.premountSignInNodes.set(node, props);
          }
        };
        this.unmountSignIn = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountSignIn(node);
          } else {
            this.premountSignInNodes.delete(node);
          }
        };
        this.mountSignUp = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountSignUp(node, props);
          } else {
            this.premountSignUpNodes.set(node, props);
          }
        };
        this.unmountSignUp = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountSignUp(node);
          } else {
            this.premountSignUpNodes.delete(node);
          }
        };
        this.mountUserProfile = (node, props) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountUserProfile(node, props);
          } else {
            this.premountUserProfileNodes.set(node, props);
          }
        };
        this.unmountUserProfile = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountUserProfile(node);
          } else {
            this.premountUserProfileNodes.delete(node);
          }
        };
        this.mountUserButton = (node, userButtonProps) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.mountUserButton(node, userButtonProps);
          } else {
            this.premountUserButtonNodes.set(node, userButtonProps);
          }
        };
        this.unmountUserButton = (node) => {
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            this.clerkjs.unmountUserButton(node);
          } else {
            this.premountUserButtonNodes.delete(node);
          }
        };
        this.addListener = (listener) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.addListener(listener);
          };
          if (this.clerkjs) {
            callback();
          } else {
            this.premountMethodCalls.set("addListener", callback);
          }
        };
        this.navigate = (to) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.navigate(to);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("navigate", callback);
          }
        };
        this.redirectToSignIn = (opts) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.redirectToSignIn(opts);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("redirectToSignIn", callback);
          }
        };
        this.redirectToSignUp = (opts) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.redirectToSignUp(opts);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("redirectToSignUp", callback);
          }
        };
        this.redirectToUserProfile = () => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.redirectToUserProfile();
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            callback();
          } else {
            this.premountMethodCalls.set("redirectToUserProfile", callback);
          }
        };
        this.handleRedirectCallback = (params2) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.handleRedirectCallback(params2);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            void callback();
          } else {
            this.premountMethodCalls.set("handleRedirectCallback", callback);
          }
        };
        this.handleMagicLinkVerification = async (params2) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.handleMagicLinkVerification(params2);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("handleMagicLinkVerification", callback);
          }
        };
        this.authenticateWithMetamask = async (params2) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.authenticateWithMetamask(params2);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("authenticateWithMetamask", callback);
          }
        };
        this.createOrganization = async (params2) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.createOrganization(params2);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("createOrganization", callback);
          }
        };
        this.getOrganizationMemberships = async () => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.getOrganizationMemberships();
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("getOrganizationMemberships", callback);
          }
        };
        this.getOrganization = async (organizationId) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.getOrganization(organizationId);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("getOrganization", callback);
          }
        };
        this.signOut = async (signOutCallbackOrOptions, options2) => {
          const callback = () => {
            var _b;
            return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.signOut(signOutCallbackOrOptions, options2);
          };
          if (this.clerkjs && tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
            return callback();
          } else {
            this.premountMethodCalls.set("signOut", callback);
          }
        };
        const { Clerk = null, frontendApi, options = {} } = params || {};
        this.frontendApi = frontendApi;
        this.options = options;
        this.Clerk = Clerk;
        this.mode = (0, utils_1.inClientSide)() ? "browser" : "server";
        void this.loadClerkJS();
      }
      get loaded() {
        return tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f");
      }
      static getOrCreateInstance(params) {
        if (!(0, utils_1.inClientSide)() || !tslib_1.__classPrivateFieldGet(this, _a, "f", _IsomorphicClerk_instance)) {
          tslib_1.__classPrivateFieldSet(this, _a, new IsomorphicClerk(params), "f", _IsomorphicClerk_instance);
        }
        return tslib_1.__classPrivateFieldGet(this, _a, "f", _IsomorphicClerk_instance);
      }
      async loadClerkJS() {
        if (this.mode !== "browser" || tslib_1.__classPrivateFieldGet(this, _IsomorphicClerk_loaded, "f")) {
          return;
        }
        if (!this.frontendApi) {
          this.throwError(errors_1.noFrontendApiError);
        }
        try {
          if (this.Clerk) {
            let c;
            if ((0, utils_1.isConstructor)(this.Clerk)) {
              c = new this.Clerk(this.frontendApi);
              await c.load(this.options);
            } else {
              c = this.Clerk;
              if (!c.isReady()) {
                await c.load(this.options);
              }
            }
            globalThis.Clerk = c;
          } else {
            await (0, utils_1.loadScript)({
              frontendApi: this.frontendApi,
              scriptUrl: this.options.clerkJSUrl,
              scriptVariant: this.options.clerkJSVariant
            });
            if (!globalThis.Clerk) {
              throw new Error("Failed to download latest ClerkJS. Contact support@clerk.dev.");
            }
            await globalThis.Clerk.load(this.options);
          }
          return this.hydrateClerkJS(globalThis.Clerk);
        } catch (err) {
          let message;
          if (err instanceof Error) {
            message = err.message;
          } else {
            message = String(err);
          }
          this.throwError(message);
          return;
        }
      }
      throwError(errorMsg) {
        if (false) {
          console.error(errorMsg);
        }
        throw new Error(errorMsg);
      }
      get version() {
        var _b;
        return (_b = this.clerkjs) === null || _b === void 0 ? void 0 : _b.version;
      }
      get client() {
        if (this.clerkjs) {
          return this.clerkjs.client;
        } else {
          return void 0;
        }
      }
      get session() {
        if (this.clerkjs) {
          return this.clerkjs.session;
        } else {
          return void 0;
        }
      }
      get user() {
        if (this.clerkjs) {
          return this.clerkjs.user;
        } else {
          return void 0;
        }
      }
      get organization() {
        if (this.clerkjs) {
          return this.clerkjs.organization;
        } else {
          return void 0;
        }
      }
      get __unstable__environment() {
        if (this.clerkjs) {
          return this.clerkjs.__unstable__environment;
        } else {
          return void 0;
        }
      }
    };
    exports.default = IsomorphicClerk;
    _a = IsomorphicClerk, _IsomorphicClerk_loaded = /* @__PURE__ */ new WeakMap();
    _IsomorphicClerk_instance = { value: void 0 };
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/assertHelpers.js
var require_assertHelpers = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/assertHelpers.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertClerkLoadedGuarantee = exports.assertWrappedByClerkProvider = void 0;
    var errors_1 = require_errors();
    function assertWrappedByClerkProvider(contextVal) {
      if (!contextVal) {
        throw new Error(errors_1.noClerkProviderError);
      }
    }
    exports.assertWrappedByClerkProvider = assertWrappedByClerkProvider;
    function assertClerkLoadedGuarantee(guarantee, hookName) {
      if (!guarantee) {
        throw new Error((0, errors_1.noGuaranteedLoadedError)(hookName));
      }
    }
    exports.assertClerkLoadedGuarantee = assertClerkLoadedGuarantee;
  }
});

// node_modules/@clerk/clerk-react/dist/utils/makeContextAndHook.js
var require_makeContextAndHook = __commonJS({
  "node_modules/@clerk/clerk-react/dist/utils/makeContextAndHook.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeContextAndHook = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var assertHelpers_1 = require_assertHelpers();
    function makeContextAndHook(displayName, assertCtxFn = assertHelpers_1.assertWrappedByClerkProvider) {
      const Ctx = react_1.default.createContext(void 0);
      Ctx.displayName = displayName;
      const useCtx = () => {
        const ctx = react_1.default.useContext(Ctx);
        assertCtxFn(ctx);
        return ctx.value;
      };
      return [Ctx, useCtx];
    }
    exports.makeContextAndHook = makeContextAndHook;
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/AuthContext.js
var require_AuthContext = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/AuthContext.js"(exports) {
    "use strict";
    init_react();
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAuthContext = exports.AuthContext = void 0;
    var makeContextAndHook_1 = require_makeContextAndHook();
    _a = (0, makeContextAndHook_1.makeContextAndHook)("AuthContext"), exports.AuthContext = _a[0], exports.useAuthContext = _a[1];
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/ClientContext.js
var require_ClientContext = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/ClientContext.js"(exports) {
    "use strict";
    init_react();
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useClientContext = exports.ClientContext = void 0;
    var makeContextAndHook_1 = require_makeContextAndHook();
    _a = (0, makeContextAndHook_1.makeContextAndHook)("ClientContext"), exports.ClientContext = _a[0], exports.useClientContext = _a[1];
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/IsomorphicClerkContext.js
var require_IsomorphicClerkContext = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/IsomorphicClerkContext.js"(exports) {
    "use strict";
    init_react();
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useIsomorphicClerkContext = exports.IsomorphicClerkContext = void 0;
    var makeContextAndHook_1 = require_makeContextAndHook();
    _a = (0, makeContextAndHook_1.makeContextAndHook)("IsomorphicClerkContext"), exports.IsomorphicClerkContext = _a[0], exports.useIsomorphicClerkContext = _a[1];
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/OrganizationContext.js
var require_OrganizationContext = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/OrganizationContext.js"(exports) {
    "use strict";
    init_react();
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganizationContext = exports.OrganizationContext = void 0;
    var makeContextAndHook_1 = require_makeContextAndHook();
    _a = (0, makeContextAndHook_1.makeContextAndHook)("OrganizationContext"), exports.OrganizationContext = _a[0], exports.useOrganizationContext = _a[1];
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/SessionContext.js
var require_SessionContext = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/SessionContext.js"(exports) {
    "use strict";
    init_react();
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSessionContext = exports.SessionContext = void 0;
    var makeContextAndHook_1 = require_makeContextAndHook();
    _a = (0, makeContextAndHook_1.makeContextAndHook)("SessionContext"), exports.SessionContext = _a[0], exports.useSessionContext = _a[1];
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/UserContext.js
var require_UserContext = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/UserContext.js"(exports) {
    "use strict";
    init_react();
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUserContext = exports.UserContext = void 0;
    var makeContextAndHook_1 = require_makeContextAndHook();
    _a = (0, makeContextAndHook_1.makeContextAndHook)("UserContext"), exports.UserContext = _a[0], exports.useUserContext = _a[1];
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/ClerkContextProvider.js
var require_ClerkContextProvider = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/ClerkContextProvider.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkContextProvider = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var isomorphicClerk_1 = tslib_1.__importDefault(require_isomorphicClerk());
    var AuthContext_1 = require_AuthContext();
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var OrganizationContext_1 = require_OrganizationContext();
    var SessionContext_1 = require_SessionContext();
    var UserContext_1 = require_UserContext();
    function ClerkContextProvider(props) {
      const { isomorphicClerkOptions, initialState, children } = props;
      const { isomorphicClerk: clerk, loaded: clerkLoaded } = useLoadedIsomorphicClerk(isomorphicClerkOptions);
      const [state, setState] = react_1.default.useState({
        client: clerk.client,
        session: clerk.session,
        user: clerk.user,
        organization: clerk.organization,
        lastOrganizationInvitation: null,
        lastOrganizationMember: null
      });
      react_1.default.useEffect(() => {
        return clerk.addListener((e) => setState(Object.assign({}, e)));
      }, []);
      const derivedState = deriveState(clerkLoaded, state, initialState);
      const clerkCtx = react_1.default.useMemo(() => ({ value: clerk }), [clerkLoaded]);
      const clientCtx = react_1.default.useMemo(() => ({ value: state.client }), [state.client]);
      const authCtx = react_1.default.useMemo(() => {
        return {
          value: { sessionId: derivedState.sessionId, userId: derivedState.userId }
        };
      }, [derivedState.sessionId, derivedState.userId]);
      const userCtx = react_1.default.useMemo(() => {
        return { value: derivedState.user };
      }, [derivedState.userId, derivedState.user]);
      const sessionCtx = react_1.default.useMemo(() => {
        return { value: derivedState.session };
      }, [derivedState.sessionId, derivedState.session]);
      const organizationCtx = react_1.default.useMemo(() => {
        return {
          value: {
            organization: derivedState.organization,
            lastOrganizationInvitation: derivedState.lastOrganizationInvitation,
            lastOrganizationMember: derivedState.lastOrganizationMember
          }
        };
      }, [derivedState.organization, derivedState.lastOrganizationInvitation, derivedState.lastOrganizationMember]);
      return react_1.default.createElement(IsomorphicClerkContext_1.IsomorphicClerkContext.Provider, { value: clerkCtx }, react_1.default.createElement(ClientContext_1.ClientContext.Provider, { value: clientCtx }, react_1.default.createElement(SessionContext_1.SessionContext.Provider, { value: sessionCtx }, react_1.default.createElement(OrganizationContext_1.OrganizationContext.Provider, { value: organizationCtx }, react_1.default.createElement(AuthContext_1.AuthContext.Provider, { value: authCtx }, react_1.default.createElement(UserContext_1.UserContext.Provider, { value: userCtx }, children))))));
    }
    exports.ClerkContextProvider = ClerkContextProvider;
    var useLoadedIsomorphicClerk = (options) => {
      const [loaded, setLoaded] = react_1.default.useState(false);
      const isomorphicClerk = react_1.default.useMemo(() => isomorphicClerk_1.default.getOrCreateInstance(options), []);
      react_1.default.useEffect(() => {
        isomorphicClerk.__unstable__updateProps({ appearance: options.options.appearance });
      }, [options.options.appearance]);
      react_1.default.useEffect(() => {
        isomorphicClerk.addOnLoaded(() => setLoaded(true));
      }, []);
      return { isomorphicClerk, loaded };
    };
    function deriveState(clerkLoaded, state, initialState) {
      if (!clerkLoaded && initialState) {
        const userId2 = initialState.userId;
        const user2 = initialState.user;
        const sessionId2 = initialState.sessionId;
        const session2 = initialState.session;
        const organization2 = initialState.organization;
        return {
          sessionId: sessionId2,
          session: session2,
          userId: userId2,
          user: user2,
          organization: organization2,
          lastOrganizationInvitation: null,
          lastOrganizationMember: null
        };
      }
      const userId = state.user ? state.user.id : state.user;
      const user = state.user;
      const sessionId = state.session ? state.session.id : state.session;
      const session = state.session;
      const organization = state.organization;
      const lastOrganizationInvitation = state.lastOrganizationInvitation;
      const lastOrganizationMember = state.lastOrganizationMember;
      return { sessionId, session, userId, user, organization, lastOrganizationInvitation, lastOrganizationMember };
    }
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/StructureContext.js
var require_StructureContext = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/StructureContext.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoadedGuarantee = exports.StructureContext = exports.StructureContextStates = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var assertHelpers_1 = require_assertHelpers();
    exports.StructureContextStates = Object.freeze({
      noGuarantees: Object.freeze({
        guaranteedLoaded: false
      }),
      guaranteedLoaded: Object.freeze({
        guaranteedLoaded: true
      })
    });
    exports.StructureContext = react_1.default.createContext(void 0);
    exports.StructureContext.displayName = "StructureContext";
    var useStructureContext = () => {
      const structureCtx = react_1.default.useContext(exports.StructureContext);
      (0, assertHelpers_1.assertWrappedByClerkProvider)(structureCtx);
      return structureCtx;
    };
    var LoadedGuarantee = ({ children }) => {
      const structure = useStructureContext();
      if (structure.guaranteedLoaded) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
      }
      return react_1.default.createElement(exports.StructureContext.Provider, { value: exports.StructureContextStates.guaranteedLoaded }, children);
    };
    exports.LoadedGuarantee = LoadedGuarantee;
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/ClerkProvider.js
var require_ClerkProvider = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/ClerkProvider.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkProvider = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    var ClerkContextProvider_1 = require_ClerkContextProvider();
    var StructureContext_1 = require_StructureContext();
    function ClerkProviderBase(props) {
      const { initialState, children, Clerk, frontendApi } = props, options = tslib_1.__rest(props, ["initialState", "children", "Clerk", "frontendApi"]);
      return react_1.default.createElement(StructureContext_1.StructureContext.Provider, { value: StructureContext_1.StructureContextStates.noGuarantees }, react_1.default.createElement(ClerkContextProvider_1.ClerkContextProvider, { initialState, isomorphicClerkOptions: { frontendApi: frontendApi || "", Clerk, options } }, children));
    }
    var ClerkProvider = (0, utils_1.withMaxAllowedInstancesGuard)(ClerkProviderBase, "ClerkProvider", errors_1.multipleClerkProvidersError);
    exports.ClerkProvider = ClerkProvider;
    ClerkProvider.displayName = "ClerkProvider";
  }
});

// node_modules/@clerk/clerk-react/dist/contexts/index.js
var require_contexts = __commonJS({
  "node_modules/@clerk/clerk-react/dist/contexts/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkProvider = void 0;
    var ClerkProvider_1 = require_ClerkProvider();
    Object.defineProperty(exports, "ClerkProvider", { enumerable: true, get: function() {
      return ClerkProvider_1.ClerkProvider;
    } });
  }
});

// node_modules/@clerk/clerk-react/dist/components/withClerk.js
var require_withClerk = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/withClerk.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithClerk = exports.withClerk = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var StructureContext_1 = require_StructureContext();
    var errors_1 = require_errors();
    var withClerk = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        const clerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
        if (!clerk.loaded) {
          return null;
        }
        return react_1.default.createElement(StructureContext_1.LoadedGuarantee, null, react_1.default.createElement(Component, Object.assign({}, props, { clerk })));
      };
      HOC.displayName = `withClerk(${displayName})`;
      return HOC;
    };
    exports.withClerk = withClerk;
    var WithClerk = ({ children }) => {
      const clerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      if (typeof children !== "function") {
        throw new Error(errors_1.hocChildrenNotAFunctionError);
      }
      if (!clerk.loaded) {
        return null;
      }
      return react_1.default.createElement(StructureContext_1.LoadedGuarantee, null, children(clerk));
    };
    exports.WithClerk = WithClerk;
  }
});

// node_modules/@clerk/clerk-react/dist/components/uiComponents.js
var require_uiComponents = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/uiComponents.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserButton = exports.UserProfile = exports.SignUp = exports.SignIn = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var withClerk_1 = require_withClerk();
    var Portal = class extends react_1.default.PureComponent {
      constructor() {
        super(...arguments);
        this.portalRef = react_1.default.createRef();
      }
      componentDidUpdate(prevProps) {
        if (prevProps.props.appearance !== this.props.props.appearance) {
          this.props.updateProps({ node: this.portalRef.current, props: this.props.props });
        }
      }
      componentDidMount() {
        if (this.portalRef.current) {
          this.props.mount(this.portalRef.current, this.props.props);
        }
      }
      componentWillUnmount() {
        if (this.portalRef.current) {
          this.props.unmount(this.portalRef.current);
        }
      }
      render() {
        return react_1.default.createElement("div", { ref: this.portalRef });
      }
    };
    exports.SignIn = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountSignIn, unmount: clerk.unmountSignIn, updateProps: clerk.__unstable__updateProps, props });
    }, "SignIn");
    exports.SignUp = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountSignUp, unmount: clerk.unmountSignUp, updateProps: clerk.__unstable__updateProps, props });
    }, "SignUp");
    exports.UserProfile = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountUserProfile, unmount: clerk.unmountUserProfile, updateProps: clerk.__unstable__updateProps, props });
    }, "UserProfile");
    exports.UserButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      return react_1.default.createElement(Portal, { mount: clerk.mountUserButton, unmount: clerk.unmountUserButton, updateProps: clerk.__unstable__updateProps, props });
    }, "UserButton");
  }
});

// node_modules/@clerk/clerk-react/dist/components/controlComponents.js
var require_controlComponents = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/controlComponents.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MultisessionAppSupport = exports.AuthenticateWithRedirectCallback = exports.RedirectToUserProfile = exports.RedirectToSignUp = exports.RedirectToSignIn = exports.ClerkLoading = exports.ClerkLoaded = exports.SignedOut = exports.SignedIn = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var AuthContext_1 = require_AuthContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var SessionContext_1 = require_SessionContext();
    var StructureContext_1 = require_StructureContext();
    var withClerk_1 = require_withClerk();
    var SignedIn = ({ children }) => {
      const { userId } = (0, AuthContext_1.useAuthContext)();
      if (userId) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
      }
      return null;
    };
    exports.SignedIn = SignedIn;
    var SignedOut = ({ children }) => {
      const { userId } = (0, AuthContext_1.useAuthContext)();
      if (userId === null) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
      }
      return null;
    };
    exports.SignedOut = SignedOut;
    var ClerkLoaded = ({ children }) => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      if (!isomorphicClerk.loaded) {
        return null;
      }
      return react_1.default.createElement(StructureContext_1.LoadedGuarantee, null, children);
    };
    exports.ClerkLoaded = ClerkLoaded;
    var ClerkLoading = ({ children }) => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      if (isomorphicClerk.loaded) {
        return null;
      }
      return react_1.default.createElement(react_1.default.Fragment, null, children);
    };
    exports.ClerkLoading = ClerkLoading;
    exports.RedirectToSignIn = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      const { client, session } = clerk;
      const { __unstable__environment } = clerk;
      const hasActiveSessions = client.activeSessions && client.activeSessions.length > 0;
      react_1.default.useEffect(() => {
        if (session === null && hasActiveSessions && __unstable__environment) {
          const { afterSignOutOneUrl } = __unstable__environment.displayConfig;
          void clerk.navigate(afterSignOutOneUrl);
        } else {
          void clerk.redirectToSignIn(props);
        }
      }, []);
      return null;
    }, "RedirectToSignIn");
    exports.RedirectToSignUp = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, props = tslib_1.__rest(_a, ["clerk"]);
      react_1.default.useEffect(() => {
        void clerk.redirectToSignUp(props);
      }, []);
      return null;
    }, "RedirectToSignUp");
    exports.RedirectToUserProfile = (0, withClerk_1.withClerk)(({ clerk }) => {
      react_1.default.useEffect(() => {
        clerk.redirectToUserProfile();
      }, []);
      return null;
    }, "RedirectToUserProfile");
    exports.AuthenticateWithRedirectCallback = (0, withClerk_1.withClerk)((_a) => {
      var { clerk } = _a, handleRedirectCallbackParams = tslib_1.__rest(_a, ["clerk"]);
      react_1.default.useEffect(() => {
        void clerk.handleRedirectCallback(handleRedirectCallbackParams);
      }, []);
      return null;
    }, "AuthenticateWithRedirectCallback");
    var MultisessionAppSupport = ({ children }) => {
      const session = (0, SessionContext_1.useSessionContext)();
      return react_1.default.createElement(react_1.default.Fragment, { key: session ? session.id : "no-users" }, children);
    };
    exports.MultisessionAppSupport = MultisessionAppSupport;
  }
});

// node_modules/@clerk/clerk-react/dist/components/withUser.js
var require_withUser = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/withUser.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithUser = exports.withUser = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var UserContext_1 = require_UserContext();
    var errors_1 = require_errors();
    var withUser = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        const user = (0, UserContext_1.useUserContext)();
        if (!user) {
          return null;
        }
        return react_1.default.createElement(Component, Object.assign({}, props, { user }));
      };
      HOC.displayName = `withUser(${displayName})`;
      return HOC;
    };
    exports.withUser = withUser;
    var WithUser = ({ children }) => {
      const user = (0, UserContext_1.useUserContext)();
      if (typeof children !== "function") {
        throw new Error(errors_1.hocChildrenNotAFunctionError);
      }
      if (!user) {
        return null;
      }
      return react_1.default.createElement(react_1.default.Fragment, null, children(user));
    };
    exports.WithUser = WithUser;
  }
});

// node_modules/@clerk/clerk-react/dist/components/withSession.js
var require_withSession = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/withSession.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithSession = exports.withSession = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var SessionContext_1 = require_SessionContext();
    var errors_1 = require_errors();
    var withSession = (Component, displayName) => {
      displayName = displayName || Component.displayName || Component.name || "Component";
      Component.displayName = displayName;
      const HOC = (props) => {
        const session = (0, SessionContext_1.useSessionContext)();
        if (!session) {
          return null;
        }
        return react_1.default.createElement(Component, Object.assign({}, props, { session }));
      };
      HOC.displayName = `withSession(${displayName})`;
      return HOC;
    };
    exports.withSession = withSession;
    var WithSession = ({ children }) => {
      const session = (0, SessionContext_1.useSessionContext)();
      if (typeof children !== "function") {
        throw new Error(errors_1.hocChildrenNotAFunctionError);
      }
      if (!session) {
        return null;
      }
      return react_1.default.createElement(react_1.default.Fragment, null, children(session));
    };
    exports.WithSession = WithSession;
  }
});

// node_modules/@clerk/clerk-react/dist/components/SignInButton.js
var require_SignInButton = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/SignInButton.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignInButton = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignInButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { afterSignInUrl, afterSignUpUrl, redirectUrl, mode } = props, rest = tslib_1.__rest(props, ["afterSignInUrl", "afterSignUpUrl", "redirectUrl", "mode"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign in");
      const child = (0, utils_1.assertSingleChild)(children)("SignInButton");
      const clickHandler = () => {
        const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
        if (mode === "modal") {
          return clerk.openSignIn(opts);
        }
        return clerk.redirectToSignIn(opts);
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignInButton");
  }
});

// node_modules/@clerk/clerk-react/dist/components/SignUpButton.js
var require_SignUpButton = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/SignUpButton.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignUpButton = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignUpButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { afterSignInUrl, afterSignUpUrl, redirectUrl, mode } = props, rest = tslib_1.__rest(props, ["afterSignInUrl", "afterSignUpUrl", "redirectUrl", "mode"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign up");
      const child = (0, utils_1.assertSingleChild)(children)("SignUpButton");
      const clickHandler = () => {
        const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
        if (mode === "modal") {
          return clerk.openSignUp(opts);
        }
        return clerk.redirectToSignUp(opts);
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignUpButton");
  }
});

// node_modules/@clerk/clerk-react/dist/components/SignOutButton.js
var require_SignOutButton = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/SignOutButton.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignOutButton = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignOutButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { signOutCallback, signOutOptions } = props, rest = tslib_1.__rest(props, ["signOutCallback", "signOutOptions"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign out");
      const child = (0, utils_1.assertSingleChild)(children)("SignOutButton");
      const clickHandler = () => {
        return clerk.signOut(signOutCallback, signOutOptions);
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignOutButton");
  }
});

// node_modules/@clerk/clerk-react/dist/components/SignInWithMetamaskButton.js
var require_SignInWithMetamaskButton = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/SignInWithMetamaskButton.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SignInWithMetamaskButton = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils();
    var withClerk_1 = require_withClerk();
    exports.SignInWithMetamaskButton = (0, withClerk_1.withClerk)((_a) => {
      var { clerk, children } = _a, props = tslib_1.__rest(_a, ["clerk", "children"]);
      const { redirectUrl } = props, rest = tslib_1.__rest(props, ["redirectUrl"]);
      children = (0, utils_1.normalizeWithDefaultValue)(children, "Sign in with Metamask");
      const child = (0, utils_1.assertSingleChild)(children)("SignInWithMetamaskButton");
      const clickHandler = async () => {
        async function authenticate() {
          await clerk.authenticateWithMetamask({ redirectUrl });
        }
        void authenticate();
      };
      const wrappedChildClickHandler = async (e) => {
        await (0, utils_1.safeExecute)(child.props.onClick)(e);
        return clickHandler();
      };
      const childProps = Object.assign(Object.assign({}, rest), { onClick: wrappedChildClickHandler });
      return react_1.default.cloneElement(child, childProps);
    }, "SignInWithMetamask");
  }
});

// node_modules/@clerk/clerk-react/dist/components/index.js
var require_components = __commonJS({
  "node_modules/@clerk/clerk-react/dist/components/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MultisessionAppSupport = exports.AuthenticateWithRedirectCallback = exports.RedirectToUserProfile = exports.RedirectToSignUp = exports.RedirectToSignIn = exports.SignedIn = exports.SignedOut = exports.ClerkLoading = exports.ClerkLoaded = exports.UserButton = exports.UserProfile = exports.SignIn = exports.SignUp = void 0;
    var tslib_1 = require_tslib2();
    var uiComponents_1 = require_uiComponents();
    Object.defineProperty(exports, "SignUp", { enumerable: true, get: function() {
      return uiComponents_1.SignUp;
    } });
    Object.defineProperty(exports, "SignIn", { enumerable: true, get: function() {
      return uiComponents_1.SignIn;
    } });
    Object.defineProperty(exports, "UserProfile", { enumerable: true, get: function() {
      return uiComponents_1.UserProfile;
    } });
    Object.defineProperty(exports, "UserButton", { enumerable: true, get: function() {
      return uiComponents_1.UserButton;
    } });
    var controlComponents_1 = require_controlComponents();
    Object.defineProperty(exports, "ClerkLoaded", { enumerable: true, get: function() {
      return controlComponents_1.ClerkLoaded;
    } });
    Object.defineProperty(exports, "ClerkLoading", { enumerable: true, get: function() {
      return controlComponents_1.ClerkLoading;
    } });
    Object.defineProperty(exports, "SignedOut", { enumerable: true, get: function() {
      return controlComponents_1.SignedOut;
    } });
    Object.defineProperty(exports, "SignedIn", { enumerable: true, get: function() {
      return controlComponents_1.SignedIn;
    } });
    Object.defineProperty(exports, "RedirectToSignIn", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToSignIn;
    } });
    Object.defineProperty(exports, "RedirectToSignUp", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToSignUp;
    } });
    Object.defineProperty(exports, "RedirectToUserProfile", { enumerable: true, get: function() {
      return controlComponents_1.RedirectToUserProfile;
    } });
    Object.defineProperty(exports, "AuthenticateWithRedirectCallback", { enumerable: true, get: function() {
      return controlComponents_1.AuthenticateWithRedirectCallback;
    } });
    Object.defineProperty(exports, "MultisessionAppSupport", { enumerable: true, get: function() {
      return controlComponents_1.MultisessionAppSupport;
    } });
    tslib_1.__exportStar(require_withClerk(), exports);
    tslib_1.__exportStar(require_withUser(), exports);
    tslib_1.__exportStar(require_withSession(), exports);
    tslib_1.__exportStar(require_SignInButton(), exports);
    tslib_1.__exportStar(require_SignUpButton(), exports);
    tslib_1.__exportStar(require_SignOutButton(), exports);
    tslib_1.__exportStar(require_SignInWithMetamaskButton(), exports);
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useUser.js
var require_useUser = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useUser.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useUser = void 0;
    var UserContext_1 = require_UserContext();
    function useUser() {
      const user = (0, UserContext_1.useUserContext)();
      if (user === void 0) {
        return { isLoaded: false, isSignedIn: void 0, user: void 0 };
      }
      if (user === null) {
        return { isLoaded: true, isSignedIn: false, user: null };
      }
      return { isLoaded: true, isSignedIn: true, user };
    }
    exports.useUser = useUser;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/utils.js
var require_utils2 = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/utils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSignOut = exports.createGetToken = void 0;
    var clerkLoaded = (isomorphicClerk) => {
      return new Promise((resolve) => {
        if (isomorphicClerk.loaded) {
          resolve();
        }
        isomorphicClerk.addOnLoaded(resolve);
      });
    };
    var createGetToken = (isomorphicClerk) => async (options) => {
      await clerkLoaded(isomorphicClerk);
      if (!isomorphicClerk.session) {
        return null;
      }
      return isomorphicClerk.session.getToken(options);
    };
    exports.createGetToken = createGetToken;
    var createSignOut = (isomorphicClerk) => async (...args) => {
      await clerkLoaded(isomorphicClerk);
      return isomorphicClerk.signOut(...args);
    };
    exports.createSignOut = createSignOut;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useAuth.js
var require_useAuth = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useAuth.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAuth = void 0;
    var AuthContext_1 = require_AuthContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var errors_1 = require_errors();
    var utils_1 = require_utils2();
    var useAuth = () => {
      const { sessionId, userId } = (0, AuthContext_1.useAuthContext)();
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const getToken = (0, utils_1.createGetToken)(isomorphicClerk);
      const signOut = (0, utils_1.createSignOut)(isomorphicClerk);
      if (sessionId === void 0 && userId === void 0) {
        return {
          isLoaded: false,
          isSignedIn: void 0,
          sessionId,
          userId,
          signOut,
          getToken
        };
      }
      if (sessionId === null && userId === null) {
        return {
          isLoaded: true,
          isSignedIn: false,
          sessionId,
          userId,
          signOut,
          getToken
        };
      }
      if (!!sessionId && !!userId) {
        return {
          isLoaded: true,
          isSignedIn: true,
          sessionId,
          userId,
          signOut,
          getToken
        };
      }
      throw new Error(errors_1.invalidStateError);
    };
    exports.useAuth = useAuth;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useSession.js
var require_useSession = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useSession.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSession = void 0;
    var SessionContext_1 = require_SessionContext();
    var useSession = () => {
      const session = (0, SessionContext_1.useSessionContext)();
      if (session === void 0) {
        return { isLoaded: false, isSignedIn: void 0, session: void 0 };
      }
      if (session === null) {
        return { isLoaded: true, isSignedIn: false, session: null };
      }
      return { isLoaded: true, isSignedIn: true, session };
    };
    exports.useSession = useSession;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useClerk.js
var require_useClerk = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useClerk.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useClerk = void 0;
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useClerk = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      return isomorphicClerk;
    };
    exports.useClerk = useClerk;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useSignIn.js
var require_useSignIn = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useSignIn.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSignIn = void 0;
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useSignIn = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const client = (0, ClientContext_1.useClientContext)();
      if (!client) {
        return { isLoaded: false, signIn: void 0, setSession: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        signIn: client.signIn,
        setSession: isomorphicClerk.setSession,
        setActive: isomorphicClerk.setActive
      };
    };
    exports.useSignIn = useSignIn;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useSignUp.js
var require_useSignUp = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useSignUp.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSignUp = void 0;
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useSignUp = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const client = (0, ClientContext_1.useClientContext)();
      if (!client) {
        return { isLoaded: false, signUp: void 0, setSession: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        signUp: client.signUp,
        setSession: isomorphicClerk.setSession,
        setActive: isomorphicClerk.setActive
      };
    };
    exports.useSignUp = useSignUp;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useSessionList.js
var require_useSessionList = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useSessionList.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSessionList = void 0;
    var ClientContext_1 = require_ClientContext();
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useSessionList = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const client = (0, ClientContext_1.useClientContext)();
      if (!client) {
        return { isLoaded: false, sessions: void 0, setSession: void 0, setActive: void 0 };
      }
      return {
        isLoaded: true,
        sessions: client.sessions,
        setSession: isomorphicClerk.setSession,
        setActive: isomorphicClerk.setActive
      };
    };
    exports.useSessionList = useSessionList;
  }
});

// node_modules/swr/dist/index.js
var require_dist = __commonJS({
  "node_modules/swr/dist/index.js"(exports) {
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require_react();
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    }
    var noop = function() {
    };
    var UNDEFINED = noop();
    var OBJECT = Object;
    var isUndefined = function(v) {
      return v === UNDEFINED;
    };
    var isFunction = function(v) {
      return typeof v == "function";
    };
    var mergeObjects = function(a, b) {
      return OBJECT.assign({}, a, b);
    };
    var STR_UNDEFINED = "undefined";
    var hasWindow = function() {
      return typeof window != STR_UNDEFINED;
    };
    var hasDocument = function() {
      return typeof document != STR_UNDEFINED;
    };
    var hasRequestAnimationFrame = function() {
      return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
    };
    var table = /* @__PURE__ */ new WeakMap();
    var counter = 0;
    var stableHash = function(arg) {
      var type = typeof arg;
      var constructor = arg && arg.constructor;
      var isDate = constructor == Date;
      var result;
      var index;
      if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        result = table.get(arg);
        if (result)
          return result;
        result = ++counter + "~";
        table.set(arg, result);
        if (constructor == Array) {
          result = "@";
          for (index = 0; index < arg.length; index++) {
            result += stableHash(arg[index]) + ",";
          }
          table.set(arg, result);
        }
        if (constructor == OBJECT) {
          result = "#";
          var keys = OBJECT.keys(arg).sort();
          while (!isUndefined(index = keys.pop())) {
            if (!isUndefined(arg[index])) {
              result += index + ":" + stableHash(arg[index]) + ",";
            }
          }
          table.set(arg, result);
        }
      } else {
        result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
      }
      return result;
    };
    var online = true;
    var isOnline = function() {
      return online;
    };
    var hasWin = hasWindow();
    var hasDoc = hasDocument();
    var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
    var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
    var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
    var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
    var isVisible = function() {
      var visibilityState = hasDoc && document.visibilityState;
      return isUndefined(visibilityState) || visibilityState !== "hidden";
    };
    var initFocus = function(callback) {
      onDocumentEvent("visibilitychange", callback);
      onWindowEvent("focus", callback);
      return function() {
        offDocumentEvent("visibilitychange", callback);
        offWindowEvent("focus", callback);
      };
    };
    var initReconnect = function(callback) {
      var onOnline = function() {
        online = true;
        callback();
      };
      var onOffline = function() {
        online = false;
      };
      onWindowEvent("online", onOnline);
      onWindowEvent("offline", onOffline);
      return function() {
        offWindowEvent("online", onOnline);
        offWindowEvent("offline", onOffline);
      };
    };
    var preset = {
      isOnline,
      isVisible
    };
    var defaultConfigOptions = {
      initFocus,
      initReconnect
    };
    var IS_SERVER = !hasWindow() || "Deno" in window;
    var rAF = function(f) {
      return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
    };
    var useIsomorphicLayoutEffect = IS_SERVER ? react.useEffect : react.useLayoutEffect;
    var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
    var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
    var serialize = function(key) {
      if (isFunction(key)) {
        try {
          key = key();
        } catch (err) {
          key = "";
        }
      }
      var args = [].concat(key);
      key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
      var infoKey = key ? "$swr$" + key : "";
      return [key, args, infoKey];
    };
    var SWRGlobalState = /* @__PURE__ */ new WeakMap();
    var FOCUS_EVENT = 0;
    var RECONNECT_EVENT = 1;
    var MUTATE_EVENT = 2;
    var broadcastState = function(cache2, key, data, error, isValidating, revalidate, broadcast) {
      if (broadcast === void 0) {
        broadcast = true;
      }
      var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], FETCH = _a2[3];
      var revalidators = EVENT_REVALIDATORS[key];
      var updaters = STATE_UPDATERS[key];
      if (broadcast && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
          updaters[i](data, error, isValidating);
        }
      }
      if (revalidate) {
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(function() {
            return cache2.get(key);
          });
        }
      }
      return cache2.get(key);
    };
    var __timestamp = 0;
    var getTimestamp = function() {
      return ++__timestamp;
    };
    var internalMutate = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __awaiter(void 0, void 0, void 0, function() {
        var cache2, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a2, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
              options = typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {};
              populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
              revalidate = options.revalidate !== false;
              rollbackOnError = options.rollbackOnError !== false;
              customOptimisticData = options.optimisticData;
              _a2 = serialize(_key), key = _a2[0], keyInfo = _a2[2];
              if (!key)
                return [2];
              _b = SWRGlobalState.get(cache2), MUTATION = _b[2];
              if (args.length < 3) {
                return [2, broadcastState(cache2, key, cache2.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
              }
              data = _data;
              beforeMutationTs = getTimestamp();
              MUTATION[key] = [beforeMutationTs, 0];
              hasCustomOptimisticData = !isUndefined(customOptimisticData);
              rollbackData = cache2.get(key);
              if (hasCustomOptimisticData) {
                optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
                cache2.set(key, optimisticData);
                broadcastState(cache2, key, optimisticData);
              }
              if (isFunction(data)) {
                try {
                  data = data(cache2.get(key));
                } catch (err) {
                  error = err;
                }
              }
              if (!(data && isFunction(data.then)))
                return [3, 2];
              return [
                4,
                data.catch(function(err) {
                  error = err;
                })
              ];
            case 1:
              data = _c.sent();
              if (beforeMutationTs !== MUTATION[key][0]) {
                if (error)
                  throw error;
                return [2, data];
              } else if (error && hasCustomOptimisticData && rollbackOnError) {
                populateCache = true;
                data = rollbackData;
                cache2.set(key, rollbackData);
              }
              _c.label = 2;
            case 2:
              if (populateCache) {
                if (!error) {
                  if (isFunction(populateCache)) {
                    data = populateCache(data, rollbackData);
                  }
                  cache2.set(key, data);
                }
                cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), { error }));
              }
              MUTATION[key][1] = getTimestamp();
              return [
                4,
                broadcastState(cache2, key, data, error, UNDEFINED, revalidate, !!populateCache)
              ];
            case 3:
              res = _c.sent();
              if (error)
                throw error;
              return [2, populateCache ? res : data];
          }
        });
      });
    };
    var revalidateAllKeys = function(revalidators, type) {
      for (var key in revalidators) {
        if (revalidators[key][0])
          revalidators[key][0](type);
      }
    };
    var initCache = function(provider, options) {
      if (!SWRGlobalState.has(provider)) {
        var opts = mergeObjects(defaultConfigOptions, options);
        var EVENT_REVALIDATORS = {};
        var mutate2 = internalMutate.bind(UNDEFINED, provider);
        var unmount = noop;
        SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate2]);
        if (!IS_SERVER) {
          var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
          var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
          unmount = function() {
            releaseFocus_1 && releaseFocus_1();
            releaseReconnect_1 && releaseReconnect_1();
            SWRGlobalState.delete(provider);
          };
        }
        return [provider, mutate2, unmount];
      }
      return [provider, SWRGlobalState.get(provider)[4]];
    };
    var onErrorRetry = function(_, __, config, revalidate, opts) {
      var maxRetryCount = config.errorRetryCount;
      var currentRetryCount = opts.retryCount;
      var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
      if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
      }
      setTimeout(revalidate, timeout, opts);
    };
    var _a = initCache(/* @__PURE__ */ new Map());
    var cache = _a[0];
    var mutate = _a[1];
    var defaultConfig = mergeObjects({
      onLoadingSlow: noop,
      onSuccess: noop,
      onError: noop,
      onErrorRetry,
      onDiscarded: noop,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      shouldRetryOnError: true,
      errorRetryInterval: slowConnection ? 1e4 : 5e3,
      focusThrottleInterval: 5 * 1e3,
      dedupingInterval: 2 * 1e3,
      loadingTimeout: slowConnection ? 5e3 : 3e3,
      compare: function(currentData, newData) {
        return stableHash(currentData) == stableHash(newData);
      },
      isPaused: function() {
        return false;
      },
      cache,
      mutate,
      fallback: {}
    }, preset);
    var mergeConfigs = function(a, b) {
      var v = mergeObjects(a, b);
      if (b) {
        var u1 = a.use, f1 = a.fallback;
        var u2 = b.use, f2 = b.fallback;
        if (u1 && u2) {
          v.use = u1.concat(u2);
        }
        if (f1 && f2) {
          v.fallback = mergeObjects(f1, f2);
        }
      }
      return v;
    };
    var SWRConfigContext = react.createContext({});
    var SWRConfig$1 = function(props) {
      var value = props.value;
      var extendedConfig = mergeConfigs(react.useContext(SWRConfigContext), value);
      var provider = value && value.provider;
      var cacheContext = react.useState(function() {
        return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
      })[0];
      if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
      }
      useIsomorphicLayoutEffect(function() {
        return cacheContext ? cacheContext[2] : UNDEFINED;
      }, []);
      return react.createElement(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
      }));
    };
    var useStateWithDeps = function(state, unmountedRef) {
      var rerender = react.useState({})[1];
      var stateRef = react.useRef(state);
      var stateDependenciesRef = react.useRef({
        data: false,
        error: false,
        isValidating: false
      });
      var setState = react.useCallback(function(payload) {
        var shouldRerender = false;
        var currentState = stateRef.current;
        for (var _ in payload) {
          var k = _;
          if (currentState[k] !== payload[k]) {
            currentState[k] = payload[k];
            if (stateDependenciesRef.current[k]) {
              shouldRerender = true;
            }
          }
        }
        if (shouldRerender && !unmountedRef.current) {
          rerender({});
        }
      }, []);
      useIsomorphicLayoutEffect(function() {
        stateRef.current = state;
      });
      return [stateRef, stateDependenciesRef.current, setState];
    };
    var normalize = function(args) {
      return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
    };
    var useSWRConfig = function() {
      return mergeObjects(defaultConfig, react.useContext(SWRConfigContext));
    };
    var withArgs = function(hook) {
      return function useSWRArgs() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var fallbackConfig = useSWRConfig();
        var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
        var config = mergeConfigs(fallbackConfig, _config);
        var next = hook;
        var use = config.use;
        if (use) {
          for (var i = use.length; i-- > 0; ) {
            next = use[i](next);
          }
        }
        return next(key, fn || config.fetcher, config);
      };
    };
    var subscribeCallback = function(key, callbacks, callback) {
      var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
      keyedRevalidators.push(callback);
      return function() {
        var index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
          keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
          keyedRevalidators.pop();
        }
      };
    };
    var WITH_DEDUPE = { dedupe: true };
    var useSWRHandler = function(_key, fetcher, config) {
      var cache2 = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
      var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION = _a2[2], FETCH = _a2[3];
      var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
      var initialMountedRef = react.useRef(false);
      var unmountedRef = react.useRef(false);
      var keyRef = react.useRef(key);
      var fetcherRef = react.useRef(fetcher);
      var configRef = react.useRef(config);
      var getConfig = function() {
        return configRef.current;
      };
      var isActive = function() {
        return getConfig().isVisible() && getConfig().isOnline();
      };
      var patchFetchInfo = function(info2) {
        return cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), info2));
      };
      var cached = cache2.get(key);
      var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
      var data = isUndefined(cached) ? fallback : cached;
      var info = cache2.get(keyInfo) || {};
      var error = info.error;
      var isInitialMount = !initialMountedRef.current;
      var shouldRevalidate = function() {
        if (isInitialMount && !isUndefined(revalidateOnMount))
          return revalidateOnMount;
        if (getConfig().isPaused())
          return false;
        if (suspense)
          return isUndefined(data) ? false : config.revalidateIfStale;
        return isUndefined(data) || config.revalidateIfStale;
      };
      var resolveValidating = function() {
        if (!key || !fetcher)
          return false;
        if (info.isValidating)
          return true;
        return isInitialMount && shouldRevalidate();
      };
      var isValidating = resolveValidating();
      var _c = useStateWithDeps({
        data,
        error,
        isValidating
      }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
      var revalidate = react.useCallback(function(revalidateOpts) {
        return __awaiter(void 0, void 0, void 0, function() {
          var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
          var _a3;
          return __generator(this, function(_b2) {
            switch (_b2.label) {
              case 0:
                currentFetcher = fetcherRef.current;
                if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                  return [2, false];
                }
                loading = true;
                opts = revalidateOpts || {};
                shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
                isCurrentKeyMounted = function() {
                  return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
                };
                cleanupState = function() {
                  var requestInfo = FETCH[key];
                  if (requestInfo && requestInfo[1] === startAt) {
                    delete FETCH[key];
                  }
                };
                newState = { isValidating: false };
                finishRequestAndUpdateState = function() {
                  patchFetchInfo({ isValidating: false });
                  if (isCurrentKeyMounted()) {
                    setState(newState);
                  }
                };
                patchFetchInfo({
                  isValidating: true
                });
                setState({ isValidating: true });
                _b2.label = 1;
              case 1:
                _b2.trys.push([1, 3, , 4]);
                if (shouldStartNewRequest) {
                  broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
                  if (config.loadingTimeout && !cache2.get(key)) {
                    setTimeout(function() {
                      if (loading && isCurrentKeyMounted()) {
                        getConfig().onLoadingSlow(key, config);
                      }
                    }, config.loadingTimeout);
                  }
                  FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
                }
                _a3 = FETCH[key], newData = _a3[0], startAt = _a3[1];
                return [4, newData];
              case 2:
                newData = _b2.sent();
                if (shouldStartNewRequest) {
                  setTimeout(cleanupState, config.dedupingInterval);
                }
                if (!FETCH[key] || FETCH[key][1] !== startAt) {
                  if (shouldStartNewRequest) {
                    if (isCurrentKeyMounted()) {
                      getConfig().onDiscarded(key);
                    }
                  }
                  return [2, false];
                }
                patchFetchInfo({
                  error: UNDEFINED
                });
                newState.error = UNDEFINED;
                mutationInfo = MUTATION[key];
                if (!isUndefined(mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
                  finishRequestAndUpdateState();
                  if (shouldStartNewRequest) {
                    if (isCurrentKeyMounted()) {
                      getConfig().onDiscarded(key);
                    }
                  }
                  return [2, false];
                }
                if (!compare(stateRef.current.data, newData)) {
                  newState.data = newData;
                } else {
                  newState.data = stateRef.current.data;
                }
                if (!compare(cache2.get(key), newData)) {
                  cache2.set(key, newData);
                }
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onSuccess(newData, key, config);
                  }
                }
                return [3, 4];
              case 3:
                err_1 = _b2.sent();
                cleanupState();
                if (!getConfig().isPaused()) {
                  patchFetchInfo({ error: err_1 });
                  newState.error = err_1;
                  if (shouldStartNewRequest && isCurrentKeyMounted()) {
                    getConfig().onError(err_1, key, config);
                    if (typeof config.shouldRetryOnError === "boolean" && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                      if (isActive()) {
                        getConfig().onErrorRetry(err_1, key, config, revalidate, {
                          retryCount: (opts.retryCount || 0) + 1,
                          dedupe: true
                        });
                      }
                    }
                  }
                }
                return [3, 4];
              case 4:
                loading = false;
                finishRequestAndUpdateState();
                if (isCurrentKeyMounted() && shouldStartNewRequest) {
                  broadcastState(cache2, key, newState.data, newState.error, false);
                }
                return [2, true];
            }
          });
        });
      }, [key]);
      var boundMutate = react.useCallback(internalMutate.bind(UNDEFINED, cache2, function() {
        return keyRef.current;
      }), []);
      useIsomorphicLayoutEffect(function() {
        fetcherRef.current = fetcher;
        configRef.current = config;
      });
      useIsomorphicLayoutEffect(function() {
        if (!key)
          return;
        var keyChanged = key !== keyRef.current;
        var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
        var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
          setState(mergeObjects({
            error: updatedError,
            isValidating: updatedIsValidating
          }, compare(stateRef.current.data, updatedData) ? UNDEFINED : {
            data: updatedData
          }));
        };
        var nextFocusRevalidatedAt = 0;
        var onRevalidate = function(type) {
          if (type == FOCUS_EVENT) {
            var now = Date.now();
            if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
              nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
              softRevalidate();
            }
          } else if (type == RECONNECT_EVENT) {
            if (getConfig().revalidateOnReconnect && isActive()) {
              softRevalidate();
            }
          } else if (type == MUTATE_EVENT) {
            return revalidate();
          }
          return;
        };
        var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
        var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        if (keyChanged) {
          setState({
            data,
            error,
            isValidating
          });
        }
        if (shouldRevalidate()) {
          if (isUndefined(data) || IS_SERVER) {
            softRevalidate();
          } else {
            rAF(softRevalidate);
          }
        }
        return function() {
          unmountedRef.current = true;
          unsubUpdate();
          unsubEvents();
        };
      }, [key, revalidate]);
      useIsomorphicLayoutEffect(function() {
        var timer;
        function next() {
          var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
          if (interval && timer !== -1) {
            timer = setTimeout(execute, interval);
          }
        }
        function execute() {
          if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
            revalidate(WITH_DEDUPE).then(next);
          } else {
            next();
          }
        }
        next();
        return function() {
          if (timer) {
            clearTimeout(timer);
            timer = -1;
          }
        };
      }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
      react.useDebugValue(data);
      if (suspense && isUndefined(data) && key) {
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
      }
      return {
        mutate: boundMutate,
        get data() {
          stateDependencies.data = true;
          return data;
        },
        get error() {
          stateDependencies.error = true;
          return error;
        },
        get isValidating() {
          stateDependencies.isValidating = true;
          return isValidating;
        }
      };
    };
    var SWRConfig = OBJECT.defineProperty(SWRConfig$1, "default", {
      value: defaultConfig
    });
    var unstable_serialize = function(key) {
      return serialize(key)[0];
    };
    var useSWR = withArgs(useSWRHandler);
    exports.SWRConfig = SWRConfig;
    exports["default"] = useSWR;
    exports.mutate = mutate;
    exports.unstable_serialize = unstable_serialize;
    exports.useSWRConfig = useSWRConfig;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useOrganization.js
var require_useOrganization = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useOrganization.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganization = void 0;
    var tslib_1 = require_tslib2();
    var swr_1 = tslib_1.__importDefault(require_dist());
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var OrganizationContext_1 = require_OrganizationContext();
    var SessionContext_1 = require_SessionContext();
    var useOrganization = ({ invitationList: invitationListParams, membershipList: membershipListParams } = {}) => {
      const { organization, lastOrganizationMember, lastOrganizationInvitation } = (0, OrganizationContext_1.useOrganizationContext)();
      const session = (0, SessionContext_1.useSessionContext)();
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const clerk = isomorphicClerk;
      const shouldFetch = isomorphicClerk.loaded && session && organization;
      const pendingInvitations = !isomorphicClerk.loaded ? () => [] : () => {
        var _a;
        return (_a = clerk.organization) === null || _a === void 0 ? void 0 : _a.getPendingInvitations(invitationListParams);
      };
      const currentOrganizationMemberships = !isomorphicClerk.loaded ? () => [] : () => {
        var _a;
        return (_a = clerk.organization) === null || _a === void 0 ? void 0 : _a.getMemberships(membershipListParams);
      };
      const { data: invitationList, isValidating: isInvitationsLoading } = (0, swr_1.default)(shouldFetch && invitationListParams ? composeOrganizationResourcesUpdateKey(organization, lastOrganizationInvitation, "invitations") : null, pendingInvitations);
      const { data: membershipList, isValidating: isMembershipsLoading } = (0, swr_1.default)(shouldFetch && membershipListParams ? composeOrganizationResourcesUpdateKey(organization, lastOrganizationMember, "memberships") : null, currentOrganizationMemberships);
      if (organization === void 0) {
        return {
          isLoaded: false,
          organization: void 0,
          invitationList: void 0,
          membershipList: void 0,
          membership: void 0
        };
      }
      if (organization === null) {
        return {
          isLoaded: true,
          organization: null,
          invitationList: null,
          membershipList: null,
          membership: null
        };
      }
      if (!isomorphicClerk.loaded && organization) {
        return {
          isLoaded: true,
          organization,
          invitationList: void 0,
          membershipList: void 0,
          membership: void 0
        };
      }
      return {
        isLoaded: !isMembershipsLoading && !isInvitationsLoading,
        organization,
        membershipList,
        membership: getCurrentOrganizationMembership(session.user.organizationMemberships, organization.id),
        invitationList
      };
    };
    exports.useOrganization = useOrganization;
    function getCurrentOrganizationMembership(organizationMemberships, activeOrganizationId) {
      return organizationMemberships.find((organizationMembership) => organizationMembership.organization.id === activeOrganizationId);
    }
    function composeOrganizationResourcesUpdateKey(organization, resource = null, resourceType) {
      return `${organization.id}${resource === null || resource === void 0 ? void 0 : resource.id}${resource === null || resource === void 0 ? void 0 : resource.updatedAt}${resourceType}`;
    }
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useOrganizationList.js
var require_useOrganizationList = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useOrganizationList.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganizationList = void 0;
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var UserContext_1 = require_UserContext();
    var useOrganizationList = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      const user = (0, UserContext_1.useUserContext)();
      if (!isomorphicClerk.loaded || !user) {
        return { isLoaded: false, organizationList: void 0, createOrganization: void 0, setActive: void 0 };
      }
      const clerk = isomorphicClerk;
      return {
        isLoaded: true,
        organizationList: createOrganizationList(user.organizationMemberships),
        setActive: clerk.setActive,
        createOrganization: clerk.createOrganization
      };
    };
    exports.useOrganizationList = useOrganizationList;
    function createOrganizationList(organizationMemberships) {
      return organizationMemberships.map((organizationMembership) => ({
        membership: organizationMembership,
        organization: organizationMembership.organization
      }));
    }
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useOrganizations.js
var require_useOrganizations = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useOrganizations.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useOrganizations = void 0;
    var IsomorphicClerkContext_1 = require_IsomorphicClerkContext();
    var useOrganizations = () => {
      const isomorphicClerk = (0, IsomorphicClerkContext_1.useIsomorphicClerkContext)();
      if (!isomorphicClerk.loaded) {
        return {
          isLoaded: false,
          createOrganization: void 0,
          getOrganizationMemberships: void 0,
          getOrganization: void 0
        };
      }
      const clerk = isomorphicClerk;
      return {
        isLoaded: true,
        createOrganization: clerk.createOrganization,
        getOrganizationMemberships: clerk.getOrganizationMemberships,
        getOrganization: clerk.getOrganization
      };
    };
    exports.useOrganizations = useOrganizations;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/useMagicLink.js
var require_useMagicLink = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/useMagicLink.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMagicLink = void 0;
    var tslib_1 = require_tslib2();
    var react_1 = tslib_1.__importDefault(require_react());
    function useMagicLink(resource) {
      const { startMagicLinkFlow, cancelMagicLinkFlow } = react_1.default.useMemo(() => resource.createMagicLinkFlow(), [resource]);
      react_1.default.useEffect(() => {
        return cancelMagicLinkFlow;
      }, []);
      return {
        startMagicLinkFlow,
        cancelMagicLinkFlow
      };
    }
    exports.useMagicLink = useMagicLink;
  }
});

// node_modules/@clerk/clerk-react/dist/hooks/index.js
var require_hooks = __commonJS({
  "node_modules/@clerk/clerk-react/dist/hooks/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib2();
    tslib_1.__exportStar(require_useUser(), exports);
    tslib_1.__exportStar(require_useAuth(), exports);
    tslib_1.__exportStar(require_useSession(), exports);
    tslib_1.__exportStar(require_useClerk(), exports);
    tslib_1.__exportStar(require_useSignIn(), exports);
    tslib_1.__exportStar(require_useSignUp(), exports);
    tslib_1.__exportStar(require_useSessionList(), exports);
    tslib_1.__exportStar(require_useOrganization(), exports);
    tslib_1.__exportStar(require_useOrganizationList(), exports);
    tslib_1.__exportStar(require_useOrganizations(), exports);
    tslib_1.__exportStar(require_useMagicLink(), exports);
  }
});

// node_modules/@clerk/clerk-react/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@clerk/clerk-react/dist/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMagicLink = exports.MagicLinkErrorCode = exports.isMagicLinkError = void 0;
    var tslib_1 = require_tslib2();
    tslib_1.__exportStar(require_contexts(), exports);
    tslib_1.__exportStar(require_components(), exports);
    tslib_1.__exportStar(require_hooks(), exports);
    var errors_1 = require_errors();
    Object.defineProperty(exports, "isMagicLinkError", { enumerable: true, get: function() {
      return errors_1.isMagicLinkError;
    } });
    Object.defineProperty(exports, "MagicLinkErrorCode", { enumerable: true, get: function() {
      return errors_1.MagicLinkErrorCode;
    } });
    var useMagicLink_1 = require_useMagicLink();
    Object.defineProperty(exports, "useMagicLink", { enumerable: true, get: function() {
      return useMagicLink_1.useMagicLink;
    } });
    if (typeof globalThis === "undefined" && typeof window !== "undefined" && !window.global) {
      window.global = window;
    }
  }
});

// node_modules/@clerk/remix/dist/errors.js
var require_errors2 = __commonJS({
  "node_modules/@clerk/remix/dist/errors.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noFrontendApiError = exports.getAuthInterstitialErrorRendered = exports.invalidRootLoaderCallbackReturn = exports.invalidRootLoaderCallbackResponseReturn = exports.noRequestPassedInGetAuth = exports.noClerkStateError = exports.invalidClerkStatePropError = void 0;
    var createErrorMessage = (msg) => {
      return `\u{1F512} Clerk: ${msg.trim()}

For more info, check out the docs: https://docs.clerk.dev,
or come say hi in our discord server: https://rebrand.ly/clerk-discord

`;
    };
    var ssrExample = `Use 'rootAuthLoader' as your root loader. Then, simply wrap the App component with ClerkApp and make it the default export.
Example:

import { ClerkApp } from '@clerk/remix';
import { rootAuthLoader } from '@clerk/remix/ssr.server';

export const loader: LoaderFunction = args => rootAuthLoader(args)

function App() {
  return (
    <html lang='en'>
      ...
    </html>
  );
}

export default ClerkApp(App, { frontendApi: '...' });
`;
    exports.invalidClerkStatePropError = createErrorMessage(`
You're trying to pass an invalid object in "<ClerkProvider clerkState={...}>".

${ssrExample}
`);
    exports.noClerkStateError = createErrorMessage(`
Looks like you didn't pass 'clerkState' to "<ClerkProvider clerkState={...}>".

${ssrExample}
`);
    exports.noRequestPassedInGetAuth = createErrorMessage(`
You're calling 'getAuth()' from a loader, without providing the 'request' object.
Example:

export const loader: LoaderFunction = async ({request}) => {
  const { sessionId } = await getAuth(request);
  ...
};
`);
    exports.invalidRootLoaderCallbackResponseReturn = createErrorMessage(`
You're returning an invalid 'Response' object from the 'rootAuthLoader' in root.tsx.
You can return numbers, strings, objects, booleans, and redirect 'Response' objects (status codes in the range of 300 to 400)
`);
    exports.invalidRootLoaderCallbackReturn = createErrorMessage(`
You're returning an invalid value from 'rootAuthLoader' in root.tsx.
You can only return plain objects or redirect 'Response' objects (status codes in the range of 300 to 400).
If you want to return a primitive value or an array, wrap the response with an object.
Example:

export const loader: LoaderFunction = args => rootAuthLoader(args, ({ auth }) => {
    const { userId } = auth;
    const posts: Post[] = database.getPostsByUserId(userId);
    return { data: posts };
})
`);
    exports.getAuthInterstitialErrorRendered = createErrorMessage(`This state shouldn't be possible. Please reach out to support@clerk.dev so we can help, or use the links below:`);
    exports.noFrontendApiError = createErrorMessage(`
The CLERK_FRONTEND_API environment variable must be set before using Clerk.
During development, grab the Frontend Api value from the Clerk Dashboard, create an .env file and set the CLERK_FRONTEND_API key.
For production apps, please consult the Remix documentation on environment variables.
`);
  }
});

// node_modules/@clerk/remix/dist/utils.js
var require_utils3 = __commonJS({
  "node_modules/@clerk/remix/dist/utils.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assertValidClerkState = exports.assertFrontendApi = exports.warnForSsr = void 0;
    var errors_1 = require_errors2();
    function warnForSsr(val) {
      if (!val || !val.__internal_clerk_state) {
        console.warn(errors_1.noClerkStateError);
      }
    }
    exports.warnForSsr = warnForSsr;
    function assertFrontendApi(fapi) {
      if (!fapi || typeof fapi !== "string") {
        throw new Error(errors_1.noFrontendApiError);
      }
    }
    exports.assertFrontendApi = assertFrontendApi;
    function assertValidClerkState(val) {
      if (!val) {
        throw new Error(errors_1.noClerkStateError);
      }
      if (!!val && !val.__internal_clerk_state) {
        throw new Error(errors_1.invalidClerkStatePropError);
      }
    }
    exports.assertValidClerkState = assertValidClerkState;
  }
});

// node_modules/@clerk/remix/dist/client/useAwaitableNavigate.js
var require_useAwaitableNavigate = __commonJS({
  "node_modules/@clerk/remix/dist/client/useAwaitableNavigate.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useAwaitableNavigate = void 0;
    var tslib_1 = require_tslib();
    var react_1 = (init_esm(), __toCommonJS(esm_exports));
    var react_2 = tslib_1.__importDefault(require_react());
    var useAwaitableNavigate = () => {
      const navigate = (0, react_1.useNavigate)();
      const transition = (0, react_1.useTransition)();
      const resolveFunctionsRef = react_2.default.useRef([]);
      const resolveAll = () => {
        if (transition.state !== "idle") {
          return;
        }
        resolveFunctionsRef.current.forEach((resolve) => resolve());
        resolveFunctionsRef.current.splice(0, resolveFunctionsRef.current.length);
      };
      react_2.default.useEffect(() => {
        resolveAll();
      }, [transition.state]);
      return (to) => {
        return new Promise((res) => {
          resolveFunctionsRef.current.push(res);
          navigate(to);
        });
      };
    };
    exports.useAwaitableNavigate = useAwaitableNavigate;
  }
});

// node_modules/@clerk/remix/dist/client/RemixClerkProvider.js
var require_RemixClerkProvider = __commonJS({
  "node_modules/@clerk/remix/dist/client/RemixClerkProvider.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkProvider = void 0;
    var tslib_1 = require_tslib();
    var clerk_react_1 = require_dist2();
    var react_1 = tslib_1.__importDefault(require_react());
    var utils_1 = require_utils3();
    var useAwaitableNavigate_1 = require_useAwaitableNavigate();
    tslib_1.__exportStar(require_dist2(), exports);
    function ClerkProvider({ children, ...rest }) {
      const awaitableNavigate = (0, useAwaitableNavigate_1.useAwaitableNavigate)();
      const { clerkJSUrl, clerkState, ...restProps } = rest;
      clerk_react_1.ClerkProvider.displayName = "ReactClerkProvider";
      (0, utils_1.assertValidClerkState)(clerkState);
      const { __clerk_ssr_state, __frontendApi, __lastAuthResult } = (clerkState === null || clerkState === void 0 ? void 0 : clerkState.__internal_clerk_state) || {};
      react_1.default.useEffect(() => {
        (0, utils_1.warnForSsr)(clerkState);
      }, []);
      react_1.default.useEffect(() => {
        window.__clerk_debug = { __lastAuthResult };
      }, []);
      (0, utils_1.assertFrontendApi)(__frontendApi);
      return react_1.default.createElement(clerk_react_1.ClerkProvider, { frontendApi: __frontendApi, clerkJSUrl, navigate: awaitableNavigate, initialState: __clerk_ssr_state, ...restProps }, children);
    }
    exports.ClerkProvider = ClerkProvider;
  }
});

// node_modules/@clerk/remix/dist/client/ClerkApp.js
var require_ClerkApp = __commonJS({
  "node_modules/@clerk/remix/dist/client/ClerkApp.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkApp = void 0;
    var tslib_1 = require_tslib();
    var react_1 = (init_esm(), __toCommonJS(esm_exports));
    var react_2 = tslib_1.__importDefault(require_react());
    var RemixClerkProvider_1 = require_RemixClerkProvider();
    function ClerkApp(App, opts = {}) {
      return () => {
        const { clerkState } = (0, react_1.useLoaderData)();
        return react_2.default.createElement(RemixClerkProvider_1.ClerkProvider, { ...opts, clerkState }, react_2.default.createElement(App, null));
      };
    }
    exports.ClerkApp = ClerkApp;
  }
});

// node_modules/@clerk/remix/dist/client/Interstitial.js
var require_Interstitial = __commonJS({
  "node_modules/@clerk/remix/dist/client/Interstitial.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Interstitial = void 0;
    var tslib_1 = require_tslib();
    var react_1 = tslib_1.__importDefault(require_react());
    function isStaging(frontendApi) {
      return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev");
    }
    var getScriptUrl = (frontendApi, libVersion) => {
      const major = libVersion.includes("alpha") ? "next" : isStaging(frontendApi) ? "staging" : libVersion.split(".")[0];
      return `https://${frontendApi}/npm/@clerk/clerk-js@${major}/dist/clerk.browser.js`;
    };
    var createInterstitialHTMLString = (frontendApi, libVersion, debugData) => {
      return `
    <head>
        <meta charset="UTF-8" />
    </head>
    <body>
        <script>
            window.__clerk_debug = ${JSON.stringify(debugData || {})};
            window.startClerk = async () => {
                function formRedirect(){
                    const form = '<form method="get" action="" name="redirect"></form>';
                    document.body.innerHTML = document.body.innerHTML + form;

                    const searchParams = new URLSearchParams(window.location.search);
                    for (let paramTuple of searchParams) {
                        const input = document.createElement("input");
                        input.type = "hidden";
                        input.name = paramTuple[0];
                        input.value = paramTuple[1];
                        document.forms.redirect.appendChild(input);
                    }
                    const url = new URL(window.location.origin + window.location.pathname + window.location.hash);
                    window.history.pushState({}, '', url);

                    document.forms.redirect.action = window.location.pathname + window.location.hash;
                    document.forms.redirect.submit();
                }

                const Clerk = window.Clerk;
                try {
                    await Clerk.load();
                    if(window.location.href.indexOf("#") === -1){
                      window.location.href = window.location.href;
                    } else if (window.navigator.userAgent.toLowerCase().includes("firefox/")){
                        formRedirect();
                    } else {
                        window.location.reload();
                    }
                } catch (err) {
                    console.error('Clerk: ', err);
                }
            };
            (() => {
                const script = document.createElement('script');
                script.setAttribute('data-clerk-frontend-api', '${frontendApi}');
                script.async = true;
                script.src = '${getScriptUrl(frontendApi, libVersion)}';
                script.crossOrigin = 'anonymous';
                script.addEventListener('load', startClerk);
                document.body.appendChild(script);
            })();
        <\/script>
    </body>
`;
    };
    function Interstitial(opts) {
      return react_1.default.createElement("html", { dangerouslySetInnerHTML: { __html: createInterstitialHTMLString(opts.frontendApi, opts.version, opts.debugData) } });
    }
    exports.Interstitial = Interstitial;
  }
});

// node_modules/@clerk/remix/dist/client/ClerkCatchBoundary.js
var require_ClerkCatchBoundary = __commonJS({
  "node_modules/@clerk/remix/dist/client/ClerkCatchBoundary.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkCatchBoundary = void 0;
    var tslib_1 = require_tslib();
    var info_1 = require_info();
    var react_1 = (init_esm(), __toCommonJS(esm_exports));
    var react_2 = tslib_1.__importDefault(require_react());
    var Interstitial_1 = require_Interstitial();
    function ClerkCatchBoundary(RootCatchBoundary) {
      return () => {
        var _a;
        const { data } = (0, react_1.useCatch)();
        const { __clerk_ssr_interstitial, __frontendApi, __lastAuthResult } = ((_a = data === null || data === void 0 ? void 0 : data.clerkState) === null || _a === void 0 ? void 0 : _a.__internal_clerk_state) || {};
        if (__clerk_ssr_interstitial) {
          return react_2.default.createElement(Interstitial_1.Interstitial, { frontendApi: __frontendApi, version: info_1.LIB_VERSION, debugData: { __lastAuthResult } });
        }
        if (!RootCatchBoundary) {
          return void 0;
        }
        return react_2.default.createElement(RootCatchBoundary, null);
      };
    }
    exports.ClerkCatchBoundary = ClerkCatchBoundary;
  }
});

// node_modules/@clerk/remix/dist/client/index.js
var require_client = __commonJS({
  "node_modules/@clerk/remix/dist/client/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClerkApp = void 0;
    var tslib_1 = require_tslib();
    tslib_1.__exportStar(require_RemixClerkProvider(), exports);
    var ClerkApp_1 = require_ClerkApp();
    Object.defineProperty(exports, "ClerkApp", { enumerable: true, get: function() {
      return ClerkApp_1.ClerkApp;
    } });
    tslib_1.__exportStar(require_ClerkCatchBoundary(), exports);
  }
});

// node_modules/@clerk/remix/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@clerk/remix/dist/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    require_globalPolyfill();
    tslib_1.__exportStar(require_client(), exports);
  }
});

export {
  require_dist3 as require_dist
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=/build/_shared/chunk-IPP4XDWJ.js.map
