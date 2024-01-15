import { GUIs } from "@/components/Tutorial";
import type { RouteRecordRaw } from "vue-router";

const prefix = 'guis'

export default [
  {
    path: 'counter',
    component: GUIs.Counter,
    name: 'Counter'
  },
  {
    path: 'temperature-converter',
    component: GUIs.TemperatureConverter,
    name: 'Temperature Converter'
  },
  {
    path: 'timer',
    component: GUIs.Timer,
    name: 'Timer'
  }
].map(route => ({
  ...route,
  path: `/${prefix}/${route.path}`
})) satisfies RouteRecordRaw[]