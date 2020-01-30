# vue_views

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

step1: this will create a project folder with all thing necessary with vue

$ vue create project-name

step2: this will add vuex to the project

$ vue add vuex

step3: this will add vuetify to the project

$ vue add vuetify

step4: this will add the router to the project

$ vue add router

step5: this will add axios to the project

$ vue add axios

step6:
we will add index.js file right into components folder
`index.js
```
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
```
step7: now we can add the components folder to the main.js file -

import '@/components'

step8:we will add an index.js file to the plugins folder importing all plugins

i.e -> import './axios'

step9:
then we can add the plugins folder to the main.js file -

import '@/plugins'

step10:
restart server
