import { Basic } from "@/components/Tutorial";
import type { RouteRecordRaw } from "vue-router";

const prefix = 'basic'

export default [
  {
    path: 'attributes-bindings',
    component: Basic.AttributesBindings,
    name: 'Attributes Bindings'
  },
  {
    path: 'conditionals-and-loops',
    component: Basic.ConditionalsAndLoops,
    name: 'Conditionals and Loops'
  },
  {
    path: 'form-bindings',
    component: Basic.FormBindings,
    name: 'Form Bindings'
  },
  {
    path: 'simple-component',
    component: Basic.SimpleComponent,
    name: 'Simple Component'
  }
].map(route => ({
  ...route,
  path: `/${prefix}/${route.path}`
})) satisfies RouteRecordRaw[]