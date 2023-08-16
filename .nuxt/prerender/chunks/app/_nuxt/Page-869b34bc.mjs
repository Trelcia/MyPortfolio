import { resolveComponent, useSSRContext } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Page",
  __ssrInlineRender: true,
  props: {
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.blok.body, (blok) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok._uid,
          blok
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Page-869b34bc.mjs.map
