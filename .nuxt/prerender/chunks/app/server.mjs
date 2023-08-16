import { hasInjectionContext, inject, version, defineAsyncComponent, ref, onMounted, getCurrentInstance, watchEffect, watch, useSSRContext, createApp, reactive, unref, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, shallowRef, shallowReactive, isReadonly, isRef, isShallow, isReactive, toRaw, mergeProps, nextTick, defineComponent, openBlock, createBlock, normalizeProps, guardReactiveProps, h as h$1, Suspense, Transition } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/index.mjs';
import { $fetch } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unctx/dist/index.mjs';
import { createMemoryHistory, createRouter, START_LOCATION, RouterView } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue-router/dist/vue-router.node.mjs';
import { createError as createError$1, sanitizeStatusCode } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/h3/dist/index.mjs';
import { withQuery, hasProtocol, parseURL, joinURL } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ufo/dist/index.mjs';
import { renderSSRHead } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/@unhead/ssr/dist/index.mjs';
import { getActiveHead, createServerHead as createServerHead$1 } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/@unhead/shared/dist/index.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/server-renderer/index.mjs';
import { defu } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/defu/dist/defu.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/destr/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/scule/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/klona/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ohash/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unstorage/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/pathe/dist/index.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.6.5";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    const promise = applyPlugin(nuxtApp, plugin2);
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
/*! @__NO_SIDE_EFFECTS__ */
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const _routes = [
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-32951f18.mjs').then((m2) => m2.default || m2)
  },
  {
    name: "projects-slug",
    path: "/projects/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/_slug_-b24a3a3e.mjs').then((m2) => m2.default || m2)
  }
];
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appPageTransition = false;
const appKeepalive = false;
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  const samePageComponent = to.matched.every((comp, index) => {
    var _a, _b, _c;
    return ((_a = comp.components) == null ? void 0 : _a.default) === ((_c = (_b = from.matched[index]) == null ? void 0 : _b.components) == null ? void 0 : _c.default);
  });
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(from.params) !== JSON.stringify(to.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a2;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k2, v]) => {
        if (k2 === "titleTemplate" || k2.startsWith("on"))
          return [k2, unref(v)];
        return [k2, resolveUnrefHeadInput(v, k2)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin2.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyFeaturedProjects = defineAsyncComponent(() => import('./_nuxt/FeaturedProjects-3060082c.mjs').then((r) => r.default));
const LazyHero = defineAsyncComponent(() => import('./_nuxt/Hero-451cff2b.mjs').then((r) => r.default));
const LazyPage = defineAsyncComponent(() => import('./_nuxt/Page-869b34bc.mjs').then((r) => r.default));
const LazyProjects = defineAsyncComponent(() => import('./_nuxt/Projects-8b144419.mjs').then((r) => r.default));
const lazyGlobalComponents = [
  ["FeaturedProjects", LazyFeaturedProjects],
  ["Hero", LazyHero],
  ["Page", LazyPage],
  ["Projects", LazyProjects]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
const H = (o) => new Promise((e, t) => {
  return;
});
var U = Object.defineProperty, q = (o, e, t) => e in o ? U(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, h = (o, e, t) => (q(o, typeof e != "symbol" ? e + "" : e, t), t);
function S(o) {
  return !(o !== o || o === 1 / 0 || o === -1 / 0);
}
function V(o, e, t) {
  if (!S(e))
    throw new TypeError("Expected `limit` to be a finite number");
  if (!S(t))
    throw new TypeError("Expected `interval` to be a finite number");
  const s = [];
  let r = [], n = 0;
  const i = function() {
    n++;
    const a = setTimeout(function() {
      n--, s.length > 0 && i(), r = r.filter(function(u) {
        return u !== a;
      });
    }, t);
    r.indexOf(a) < 0 && r.push(a);
    const l = s.shift();
    l.resolve(o.apply(l.self, l.args));
  }, c = function(...a) {
    const l = this;
    return new Promise(function(u, p) {
      s.push({
        resolve: u,
        reject: p,
        args: a,
        self: l
      }), n < e && i();
    });
  };
  return c.abort = function() {
    r.forEach(clearTimeout), r = [], s.forEach(function(a) {
      a.reject(function() {
        Error.call(this, "Throttled function aborted"), this.name = "AbortError";
      });
    }), s.length = 0;
  }, c;
}
class b {
  constructor() {
    h(this, "isCDNUrl", (e = "") => e.indexOf("/cdn/") > -1), h(this, "getOptionsPage", (e, t = 25, s = 1) => ({
      ...e,
      per_page: t,
      page: s
    })), h(this, "delay", (e) => new Promise((t) => setTimeout(t, e))), h(this, "arrayFrom", (e = 0, t) => [...Array(e)].map(t)), h(this, "range", (e = 0, t = e) => {
      const s = Math.abs(t - e) || 0, r = e < t ? 1 : -1;
      return this.arrayFrom(s, (n, i) => i * r + e);
    }), h(this, "asyncMap", async (e, t) => Promise.all(e.map(t))), h(this, "flatMap", (e = [], t) => e.map(t).reduce((s, r) => [...s, ...r], [])), h(this, "escapeHTML", function(e) {
      const t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, s = /[&<>"']/g, r = RegExp(s.source);
      return e && r.test(e) ? e.replace(s, (n) => t[n]) : e;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(e, t, s) {
    const r = [];
    for (const n in e) {
      if (!Object.prototype.hasOwnProperty.call(e, n))
        continue;
      const i = e[n], c = s ? "" : encodeURIComponent(n);
      let a;
      typeof i == "object" ? a = this.stringify(
        i,
        t ? t + encodeURIComponent("[" + c + "]") : c,
        Array.isArray(i)
      ) : a = (t ? t + encodeURIComponent("[" + c + "]") : c) + "=" + encodeURIComponent(i), r.push(a);
    }
    return r.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us or cn
   * @return {String} The base URL of the region
   */
  getRegionURL(e) {
    const t = "api.storyblok.com", s = "api-us.storyblok.com", r = "app.storyblokchina.cn";
    switch (e) {
      case "us":
        return s;
      case "cn":
        return r;
      default:
        return t;
    }
  }
}
const B = function(o, e) {
  const t = {};
  for (const s in o) {
    const r = o[s];
    e.indexOf(s) > -1 && r !== null && (t[s] = r);
  }
  return t;
}, D = (o) => o === "email", J = () => ({
  singleTag: "hr"
}), F = () => ({
  tag: "blockquote"
}), Y = () => ({
  tag: "ul"
}), K = (o) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: o.attrs
    }
  ]
}), W = () => ({
  singleTag: "br"
}), G = (o) => ({
  tag: `h${o.attrs.level}`
}), Q = (o) => ({
  singleTag: [
    {
      tag: "img",
      attrs: B(o.attrs, ["src", "alt", "title"])
    }
  ]
}), X = () => ({
  tag: "li"
}), Z = () => ({
  tag: "ol"
}), ee = () => ({
  tag: "p"
}), te = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": o.attrs.name,
        emoji: o.attrs.emoji
      }
    }
  ]
}), se = () => ({
  tag: "b"
}), re = () => ({
  tag: "strike"
}), oe = () => ({
  tag: "u"
}), ne = () => ({
  tag: "strong"
}), ie = () => ({
  tag: "code"
}), ae = () => ({
  tag: "i"
}), le = (o) => {
  const e = new b().escapeHTML, t = { ...o.attrs }, { linktype: s = "url" } = o.attrs;
  if (t.href && (t.href = e(o.attrs.href || "")), D(s) && (t.href = `mailto:${t.href}`), t.anchor && (t.href = `${t.href}#${t.anchor}`, delete t.anchor), t.custom) {
    for (const r in t.custom)
      t[r] = t.custom[r];
    delete t.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: t
      }
    ]
  };
}, ce = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: o.attrs
    }
  ]
}), he = () => ({
  tag: "sub"
}), ue = () => ({
  tag: "sup"
}), pe = (o) => ({
  tag: [
    {
      tag: "span",
      attrs: o.attrs
    }
  ]
}), de = (o) => {
  var e;
  return (e = o.attrs) != null && e.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${o.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ge = (o) => {
  var e;
  return (e = o.attrs) != null && e.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${o.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, fe = {
  nodes: {
    horizontal_rule: J,
    blockquote: F,
    bullet_list: Y,
    code_block: K,
    hard_break: W,
    heading: G,
    image: Q,
    list_item: X,
    ordered_list: Z,
    paragraph: ee,
    emoji: te
  },
  marks: {
    bold: se,
    strike: re,
    underline: oe,
    strong: ne,
    code: ie,
    italic: ae,
    link: le,
    styled: ce,
    subscript: he,
    superscript: ue,
    anchor: pe,
    highlight: de,
    textStyle: ge
  }
}, me = function(o) {
  const e = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, t = /[&<>"']/g, s = RegExp(t.source);
  return o && s.test(o) ? o.replace(t, (r) => e[r]) : o;
};
class k {
  constructor(e) {
    h(this, "marks"), h(this, "nodes"), e || (e = fe), this.marks = e.marks || [], this.nodes = e.nodes || [];
  }
  addNode(e, t) {
    this.nodes[e] = t;
  }
  addMark(e, t) {
    this.marks[e] = t;
  }
  render(e, t = { optimizeImages: false }) {
    if (e && e.content && Array.isArray(e.content)) {
      let s = "";
      return e.content.forEach((r) => {
        s += this.renderNode(r);
      }), t.optimizeImages ? this.optimizeImages(s, t.optimizeImages) : s;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(e, t) {
    let s = 0, r = 0, n = "", i = "";
    typeof t != "boolean" && (typeof t.width == "number" && t.width > 0 && (n += `width="${t.width}" `, s = t.width), typeof t.height == "number" && t.height > 0 && (n += `height="${t.height}" `, r = t.height), (t.loading === "lazy" || t.loading === "eager") && (n += `loading="${t.loading}" `), typeof t.class == "string" && t.class.length > 0 && (n += `class="${t.class}" `), t.filters && (typeof t.filters.blur == "number" && t.filters.blur >= 0 && t.filters.blur <= 100 && (i += `:blur(${t.filters.blur})`), typeof t.filters.brightness == "number" && t.filters.brightness >= -100 && t.filters.brightness <= 100 && (i += `:brightness(${t.filters.brightness})`), t.filters.fill && (t.filters.fill.match(/[0-9A-Fa-f]{6}/g) || t.filters.fill === "transparent") && (i += `:fill(${t.filters.fill})`), t.filters.format && ["webp", "png", "jpeg"].includes(t.filters.format) && (i += `:format(${t.filters.format})`), typeof t.filters.grayscale == "boolean" && t.filters.grayscale && (i += ":grayscale()"), typeof t.filters.quality == "number" && t.filters.quality >= 0 && t.filters.quality <= 100 && (i += `:quality(${t.filters.quality})`), t.filters.rotate && [90, 180, 270].includes(t.filters.rotate) && (i += `:rotate(${t.filters.rotate})`), i.length > 0 && (i = "/filters" + i))), n.length > 0 && (e = e.replace(/<img/g, `<img ${n.trim()}`));
    const c = s > 0 || r > 0 || i.length > 0 ? `${s}x${r}${i}` : "";
    return e = e.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${c}`
    ), typeof t != "boolean" && (t.sizes || t.srcset) && (e = e.replace(/<img.*?src=["|'](.*?)["|']/g, (a) => {
      var l, u;
      const p = a.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (p && p.length > 0) {
        const g = {
          srcset: (l = t.srcset) == null ? void 0 : l.map((d) => {
            if (typeof d == "number")
              return `//${p}/m/${d}x0${i} ${d}w`;
            if (typeof d == "object" && d.length === 2) {
              let w = 0, T = 0;
              return typeof d[0] == "number" && (w = d[0]), typeof d[1] == "number" && (T = d[1]), `//${p}/m/${w}x${T}${i} ${w}w`;
            }
          }).join(", "),
          sizes: (u = t.sizes) == null ? void 0 : u.map((d) => d).join(", ")
        };
        let v = "";
        return g.srcset && (v += `srcset="${g.srcset}" `), g.sizes && (v += `sizes="${g.sizes}" `), a.replace(/<img/g, `<img ${v.trim()}`);
      }
      return a;
    })), e;
  }
  renderNode(e) {
    const t = [];
    e.marks && e.marks.forEach((r) => {
      const n = this.getMatchingMark(r);
      n && n.tag !== "" && t.push(this.renderOpeningTag(n.tag));
    });
    const s = this.getMatchingNode(e);
    return s && s.tag && t.push(this.renderOpeningTag(s.tag)), e.content ? e.content.forEach((r) => {
      t.push(this.renderNode(r));
    }) : e.text ? t.push(me(e.text)) : s && s.singleTag ? t.push(this.renderTag(s.singleTag, " /")) : s && s.html ? t.push(s.html) : e.type === "emoji" && t.push(this.renderEmoji(e)), s && s.tag && t.push(this.renderClosingTag(s.tag)), e.marks && e.marks.slice(0).reverse().forEach((r) => {
      const n = this.getMatchingMark(r);
      n && n.tag !== "" && t.push(this.renderClosingTag(n.tag));
    }), t.join("");
  }
  renderTag(e, t) {
    return e.constructor === String ? `<${e}${t}>` : e.map((s) => {
      if (s.constructor === String)
        return `<${s}${t}>`;
      {
        let r = `<${s.tag}`;
        if (s.attrs)
          for (const n in s.attrs) {
            const i = s.attrs[n];
            i !== null && (r += ` ${n}="${i}"`);
          }
        return `${r}${t}>`;
      }
    }).join("");
  }
  renderOpeningTag(e) {
    return this.renderTag(e, "");
  }
  renderClosingTag(e) {
    return e.constructor === String ? `</${e}>` : e.slice(0).reverse().map((t) => t.constructor === String ? `</${t}>` : `</${t.tag}>`).join("");
  }
  getMatchingNode(e) {
    const t = this.nodes[e.type];
    if (typeof t == "function")
      return t(e);
  }
  getMatchingMark(e) {
    const t = this.marks[e.type];
    if (typeof t == "function")
      return t(e);
  }
  renderEmoji(e) {
    if (e.attrs.emoji)
      return e.attrs.emoji;
    const t = [
      {
        tag: "img",
        attrs: {
          src: e.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(t, " /");
  }
}
class ye {
  constructor(e) {
    h(this, "baseURL"), h(this, "timeout"), h(this, "headers"), h(this, "responseInterceptor"), h(this, "fetch"), h(this, "ejectInterceptor"), h(this, "url"), h(this, "parameters"), this.baseURL = e.baseURL, this.headers = e.headers || new Headers(), this.timeout = e != null && e.timeout ? e.timeout * 1e3 : 0, this.responseInterceptor = e.responseInterceptor, this.fetch = (...t) => e.fetch ? e.fetch(...t) : fetch(...t), this.ejectInterceptor = false, this.url = "", this.parameters = {};
  }
  /**
   *
   * @param url string
   * @param params ISbStoriesParams
   * @returns Promise<ISbResponse | Error>
   */
  get(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("get");
  }
  post(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("post");
  }
  put(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("put");
  }
  delete(e, t) {
    return this.url = e, this.parameters = t, this._methodHandler("delete");
  }
  async _responseHandler(e) {
    const t = [], s = {
      data: {},
      headers: {},
      status: 0,
      statusText: ""
    };
    e.status !== 204 && await e.json().then((r) => {
      s.data = r;
    });
    for (const r of e.headers.entries())
      t[r[0]] = r[1];
    return s.headers = { ...t }, s.status = e.status, s.statusText = e.statusText, s;
  }
  async _methodHandler(e) {
    let t = `${this.baseURL}${this.url}`, s = null;
    if (e === "get") {
      const a = new b();
      t = `${this.baseURL}${this.url}?${a.stringify(
        this.parameters
      )}`;
    } else
      s = JSON.stringify(this.parameters);
    const r = new URL(t), n = new AbortController(), { signal: i } = n;
    let c;
    this.timeout && (c = setTimeout(() => n.abort(), this.timeout));
    try {
      const a = await this.fetch(`${r}`, {
        method: e,
        headers: this.headers,
        body: s,
        signal: i
      });
      this.timeout && clearTimeout(c);
      const l = await this._responseHandler(a);
      return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(l)) : this._statusHandler(l);
    } catch (a) {
      return {
        message: a
      };
    }
  }
  eject() {
    this.ejectInterceptor = true;
  }
  _statusHandler(e) {
    const t = /20[0-6]/g;
    return new Promise((s, r) => {
      if (t.test(`${e.status}`))
        return s(e);
      const n = {
        message: new Error(e.statusText),
        status: e.status,
        response: Array.isArray(e.data) ? e.data[0] : e.data.error || e.data.slug
      };
      r(n);
    });
  }
}
const x = "SB-Agent", $ = {
  defaultAgentName: "SB-JS-CLIENT",
  defaultAgentVersion: "SB-Agent-Version",
  packageVersion: "5.14.1"
};
let y = {};
const f = {};
class be {
  /**
   *
   * @param config ISbConfig interface
   * @param endpoint string, optional
   */
  constructor(e, t) {
    h(this, "client"), h(this, "maxRetries"), h(this, "throttle"), h(this, "accessToken"), h(this, "cache"), h(this, "helpers"), h(this, "resolveCounter"), h(this, "relations"), h(this, "links"), h(this, "richTextResolver"), h(this, "resolveNestedRelations");
    let s = e.endpoint || t;
    if (!s) {
      const i = new b().getRegionURL, c = e.https === false ? "http" : "https";
      e.oauthToken ? s = `${c}://${i(e.region)}/v1` : s = `${c}://${i(e.region)}/v2`;
    }
    const r = new Headers();
    if (r.set("Content-Type", "application/json"), r.set("Accept", "application/json"), e.headers)
      for (const i in e.headers)
        r.set(i, e.headers[i]);
    r.has(x) || (r.set(x, $.defaultAgentName), r.set(
      $.defaultAgentVersion,
      $.packageVersion
    ));
    let n = 5;
    e.oauthToken && (r.set("Authorization", e.oauthToken), n = 3), e.rateLimit && (n = e.rateLimit), e.richTextSchema ? this.richTextResolver = new k(e.richTextSchema) : this.richTextResolver = new k(), e.componentResolver && this.setComponentResolver(e.componentResolver), this.maxRetries = e.maxRetries || 5, this.throttle = V(this.throttledRequest, n, 1e3), this.accessToken = e.accessToken || "", this.relations = {}, this.links = {}, this.cache = e.cache || { clear: "manual" }, this.helpers = new b(), this.resolveCounter = 0, this.resolveNestedRelations = e.resolveNestedRelations || true, this.client = new ye({
      baseURL: s,
      timeout: e.timeout || 0,
      headers: r,
      responseInterceptor: e.responseInterceptor,
      fetch: e.fetch
    });
  }
  setComponentResolver(e) {
    this.richTextResolver.addNode("blok", (t) => {
      let s = "";
      return t.attrs.body && t.attrs.body.forEach((r) => {
        s += e(r.component, r);
      }), {
        html: s
      };
    });
  }
  parseParams(e) {
    return e.version || (e.version = "published"), e.token || (e.token = this.getToken()), e.cv || (e.cv = f[e.token]), Array.isArray(e.resolve_relations) && (e.resolve_relations = e.resolve_relations.join(",")), e;
  }
  factoryParamOptions(e, t) {
    return this.helpers.isCDNUrl(e) ? this.parseParams(t) : t;
  }
  makeRequest(e, t, s, r) {
    const n = this.factoryParamOptions(
      e,
      this.helpers.getOptionsPage(t, s, r)
    );
    return this.cacheResponse(e, n);
  }
  get(e, t) {
    t || (t = {});
    const s = `/${e}`, r = this.factoryParamOptions(s, t);
    return this.cacheResponse(s, r);
  }
  async getAll(e, t, s) {
    const r = (t == null ? void 0 : t.per_page) || 25, n = `/${e}`, i = n.split("/"), c = s || i[i.length - 1], a = 1, l = await this.makeRequest(n, t, r, a), u = l.total ? Math.ceil(l.total / r) : 1, p = await this.helpers.asyncMap(
      this.helpers.range(a, u),
      (g) => this.makeRequest(n, t, r, g + 1)
    );
    return this.helpers.flatMap(
      [l, ...p],
      (g) => Object.values(g.data[c])
    );
  }
  post(e, t) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("post", s, t));
  }
  put(e, t) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("put", s, t));
  }
  delete(e, t) {
    const s = `/${e}`;
    return Promise.resolve(this.throttle("delete", s, t));
  }
  getStories(e) {
    return this.get("cdn/stories", e);
  }
  getStory(e, t) {
    return this.get(`cdn/stories/${e}`, t);
  }
  getToken() {
    return this.accessToken;
  }
  ejectInterceptor() {
    this.client.eject();
  }
  _cleanCopy(e) {
    return JSON.parse(JSON.stringify(e));
  }
  _insertLinks(e, t, s) {
    const r = e[t];
    r && r.fieldtype == "multilink" && r.linktype == "story" && typeof r.id == "string" && this.links[s][r.id] ? r.story = this._cleanCopy(this.links[s][r.id]) : r && r.linktype === "story" && typeof r.uuid == "string" && this.links[s][r.uuid] && (r.story = this._cleanCopy(this.links[s][r.uuid]));
  }
  _insertRelations(e, t, s, r) {
    if (s.indexOf(`${e.component}.${t}`) > -1) {
      if (typeof e[t] == "string")
        this.relations[r][e[t]] && (e[t] = this._cleanCopy(
          this.relations[r][e[t]]
        ));
      else if (e[t] && e[t].constructor === Array) {
        const n = [];
        e[t].forEach((i) => {
          this.relations[r][i] && n.push(this._cleanCopy(this.relations[r][i]));
        }), e[t] = n;
      }
    }
  }
  iterateTree(e, t, s) {
    const r = (n) => {
      if (n != null) {
        if (n.constructor === Array)
          for (let i = 0; i < n.length; i++)
            r(n[i]);
        else if (n.constructor === Object) {
          if (n._stopResolving)
            return;
          for (const i in n)
            (n.component && n._uid || n.type === "link") && (this._insertRelations(
              n,
              i,
              t,
              s
            ), this._insertLinks(
              n,
              i,
              s
            )), r(n[i]);
        }
      }
    };
    r(e.content);
  }
  async resolveLinks(e, t, s) {
    let r = [];
    if (e.link_uuids) {
      const n = e.link_uuids.length, i = [], c = 50;
      for (let a = 0; a < n; a += c) {
        const l = Math.min(n, a + c);
        i.push(e.link_uuids.slice(a, l));
      }
      for (let a = 0; a < i.length; a++)
        (await this.getStories({
          per_page: c,
          language: t.language,
          version: t.version,
          by_uuids: i[a].join(",")
        })).data.stories.forEach(
          (l) => {
            r.push(l);
          }
        );
    } else
      r = e.links;
    r.forEach((n) => {
      this.links[s][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  async resolveRelations(e, t, s) {
    let r = [];
    if (e.rel_uuids) {
      const n = e.rel_uuids.length, i = [], c = 50;
      for (let a = 0; a < n; a += c) {
        const l = Math.min(n, a + c);
        i.push(e.rel_uuids.slice(a, l));
      }
      for (let a = 0; a < i.length; a++)
        (await this.getStories({
          per_page: c,
          language: t.language,
          version: t.version,
          by_uuids: i[a].join(",")
        })).data.stories.forEach((l) => {
          r.push(l);
        });
    } else
      r = e.rels;
    r && r.length > 0 && r.forEach((n) => {
      this.relations[s][n.uuid] = {
        ...n,
        _stopResolving: true
      };
    });
  }
  async resolveStories(e, t, s) {
    var r, n;
    let i = [];
    if (this.links[s] = {}, this.relations[s] = {}, typeof t.resolve_relations < "u" && t.resolve_relations.length > 0 && (typeof t.resolve_relations == "string" && (i = t.resolve_relations.split(",")), await this.resolveRelations(e, t, s)), t.resolve_links && ["1", "story", "url", "link"].indexOf(t.resolve_links) > -1 && ((r = e.links) != null && r.length || (n = e.link_uuids) != null && n.length) && await this.resolveLinks(e, t, s), this.resolveNestedRelations)
      for (const c in this.relations[s])
        this.iterateTree(
          this.relations[s][c],
          i,
          s
        );
    e.story ? this.iterateTree(e.story, i, s) : e.stories.forEach((c) => {
      this.iterateTree(c, i, s);
    }), delete this.links[s], delete this.relations[s];
  }
  async cacheResponse(e, t, s) {
    (typeof s > "u" || !s) && (s = 0);
    const r = this.helpers.stringify({ url: e, params: t }), n = this.cacheProvider();
    if (this.cache.clear === "auto" && t.version === "draft" && await this.flushCache(), t.version === "published" && e != "/cdn/spaces/me") {
      const i = await n.get(r);
      if (i)
        return Promise.resolve(i);
    }
    return new Promise(async (i, c) => {
      var a;
      try {
        const l = await this.throttle("get", e, t);
        if (l.status !== 200)
          return c(l);
        let u = { data: l.data, headers: l.headers };
        if ((a = l.headers) != null && a["per-page"] && (u = Object.assign({}, u, {
          perPage: l.headers["per-page"] ? parseInt(l.headers["per-page"]) : 0,
          total: l.headers["per-page"] ? parseInt(l.headers.total) : 0
        })), u.data.story || u.data.stories) {
          const p = this.resolveCounter = ++this.resolveCounter % 1e3;
          await this.resolveStories(u.data, t, `${p}`);
        }
        return t.version === "published" && e != "/cdn/spaces/me" && await n.set(r, u), u.data.cv && t.token && (t.version == "draft" && f[t.token] != u.data.cv && await this.flushCache(), f[t.token] = u.data.cv), i(u);
      } catch (l) {
        if (l.response && l.response.status === 429 && (s = s ? s + 1 : 0, s < this.maxRetries))
          return console.log(`Hit rate limit. Retrying in ${s} seconds.`), await this.helpers.delay(1e3 * s), this.cacheResponse(e, t, s).then(i).catch(c);
        c(l.message);
      }
    });
  }
  throttledRequest(e, t, s) {
    return this.client[e](t, s);
  }
  cacheVersions() {
    return f;
  }
  cacheVersion() {
    return f[this.accessToken];
  }
  setCacheVersion(e) {
    this.accessToken && (f[this.accessToken] = e);
  }
  cacheProvider() {
    switch (this.cache.type) {
      case "memory":
        return {
          get(e) {
            return Promise.resolve(y[e]);
          },
          getAll() {
            return Promise.resolve(y);
          },
          set(e, t) {
            return y[e] = t, Promise.resolve(void 0);
          },
          flush() {
            return y = {}, Promise.resolve(void 0);
          }
        };
      case "custom":
        if (this.cache.custom)
          return this.cache.custom;
      default:
        return {
          get() {
            return Promise.resolve(void 0);
          },
          getAll() {
            return Promise.resolve(void 0);
          },
          set() {
            return Promise.resolve(void 0);
          },
          flush() {
            return Promise.resolve(void 0);
          }
        };
    }
  }
  async flushCache() {
    return await this.cacheProvider().flush(), this;
  }
}
const Se = (o = {}) => {
  const { apiOptions: e } = o;
  if (!e.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }
  return { storyblokApi: new be(e) };
}, ke = (o) => {
  if (typeof o != "object" || typeof o._editable > "u")
    return {};
  const e = JSON.parse(
    o._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
  );
  return {
    "data-blok-c": JSON.stringify(e),
    "data-blok-uid": e.id + "-" + e.uid
  };
};
let R;
const we = (o, e, t = {}) => {
  var s;
  +new URL((s = window.location) == null ? void 0 : s.href).searchParams.get(
    "_storyblok"
  ) === o;
}, $e = (o = {}) => {
  const {
    bridge: s,
    accessToken: r,
    use: n = [],
    apiOptions: i = {},
    richText: c = {}
  } = o;
  i.accessToken = i.accessToken || r;
  const a = { bridge: s, apiOptions: i };
  let l = {};
  n.forEach((p) => {
    l = { ...l, ...p(a) };
  });
  const u = !("undefined" > "u");
  return s !== false && u && H(), R = new k(c.schema), c.resolver && P(R, c.resolver), l;
}, P = (o, e) => {
  o.addNode("blok", (t) => {
    let s = "";
    return t.attrs.body.forEach((r) => {
      s += e(r.component, r);
    }), {
      html: s
    };
  });
}, Te = /* @__PURE__ */ defineComponent({
  __name: "StoryblokComponent",
  props: {
    blok: {}
  },
  setup(o) {
    return (e, t) => (openBlock(), createBlock(resolveDynamicComponent(e.blok.component), normalizeProps(guardReactiveProps({ ...e.$props, ...e.$attrs })), null, 16));
  }
}), _e = {
  beforeMount(o, e) {
    if (e.value) {
      const t = ke(e.value);
      o.setAttribute("data-blok-c", t["data-blok-c"]), o.setAttribute("data-blok-uid", t["data-blok-uid"]), o.classList.add("storyblok__outline");
    }
  }
}, E = (o) => {
  console.error(`You can't use ${o} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};
let m = null;
const Ee = async (o, e = {}, t = {}) => {
  const s = ref(null);
  if (onMounted(() => {
    s.value && s.value.id && we(
      s.value.id,
      (r) => s.value = r,
      t
    );
  }), m) {
    const { data: r } = await m.get(
      `cdn/stories/${o}`,
      e
    );
    s.value = r.story;
  } else
    E("useStoryblok");
  return s;
}, Ie = {
  install(o, e = {}) {
    o.directive("editable", _e), o.component("StoryblokComponent", Te);
    const { storyblokApi: t } = $e(e);
    m = t;
  }
};
const plugin_KlVwwuJRCL = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  let { storyblok } = useRuntimeConfig().public;
  storyblok = JSON.parse(JSON.stringify(storyblok));
  vueApp.use(Ie, { ...storyblok, use: [Se] });
});
const plugins = [
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  plugin_KlVwwuJRCL
];
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m2) => {
    var _a;
    return ((_a = m2.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h$1(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h$1(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h$1(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h$1(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h$1(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-404-3982068d.mjs').then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-500-437ea4bc.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-b709be5c.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { Ee as E, _export_sfc as _, useRoute as a, useRouter as b, createError as c, entry$1 as default, navigateTo as n, useHead as u };
//# sourceMappingURL=server.mjs.map
