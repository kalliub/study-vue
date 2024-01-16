import type { RouteRecordRaw } from "vue-router";

const prefix = 'guis'

const LazyImport = (file: string) => () => import(`@/components/Tutorial/GUIs/${file}.vue`)

export default [
  {
    path: 'counter',
    component: LazyImport('Counter'),
    name: 'Counter'
  },
  {
    path: 'temperature-converter',
    component: LazyImport('TemperatureConverter'),
    name: 'Temperature Converter'
  },
  {
    path: 'timer',
    component: LazyImport('Timer'),
    name: 'Timer'
  }
].map(route => ({
  ...route,
  path: `/${prefix}/${route.path}`
})) satisfies RouteRecordRaw[]