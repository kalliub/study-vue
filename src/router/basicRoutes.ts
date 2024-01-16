import type { RouteRecordRaw } from "vue-router";

const prefix = 'basic'

const LazyImport = (file: string) => () => import(`@/components/Tutorial/Basic/${file}.vue`)

export default [
  {
    path: 'attributes-bindings',
    component: LazyImport('AttributesBindings'),
    name: 'Attributes Bindings'
  },
  {
    path: 'conditionals-and-loops',
    component: LazyImport('ConditionalsAndLoops'),
    name: 'Conditionals and Loops'
  },
  {
    path: 'form-bindings',
    component: LazyImport('FormBindings'),
    name: 'Form Bindings'
  },
  {
    path: 'simple-component',
    component: () => import('@/components/Tutorial/Basic/SimpleComponent/SimpleComponent.vue'),
    name: 'Simple Component'
  }
].map(route => ({
  ...route,
  path: `/${prefix}/${route.path}`
})) satisfies RouteRecordRaw[]