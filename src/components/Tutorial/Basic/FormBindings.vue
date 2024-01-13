<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Input Text')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])
</script>

<template>
  <div>
    <h2>Text Input</h2>
    <input v-model="text" />
    {{ text }}
  </div>

  <div>
    <h2>Checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Checked: {{ checked }}</label>
  </div>

  <div>
    <h2>Multi Checkbox</h2>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>

    <div>
      <p>Checked names:</p>
      <pre>{{ checkedNames }}</pre>
    </div>
  </div>

  <div>
    <h2>Radio</h2>

    <span>Picked: {{ picked }}</span>

    <br />

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <br />

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
  </div>

  <div>
    <h2>Select</h2>
    <p>Selected: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>

  <div>
    <h2>Multi Select</h2>

    <p>Selected: {{ multiSelected }}</p>
    <select v-model="multiSelected" multiple style="width: 100px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>
