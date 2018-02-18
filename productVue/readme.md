# Product Vue

### Summary
For this playground, I am experimenting with the `watch` option in vue.

### Lessons Learned (via Lynda.com)
#### Lifecycle Hooks
* beforeCreate - Triggered before the instance is initialized and any data is processed.
* Created - Called after the properties are configured, but before the instance has been mounted to the DOM.
* beforeMount - Called when the template is compiled and ready to be inserted into the DOM.
* Mounted - Called when the template is inserted into the DOM as a replacement for the el element.
* beforeUpdate - Once the instance has been mounted, this hook is triggered whenever data changes.
* Updated - Will be run after re-rendering to reflect the changes.
* beforeDestroy & Destroyed - Raised whenever `vm.$destroy` are called.
* Destroy - Removes watchers and event handlers.

### View In Action
To see it in action, visit it [here](https://yxnely.github.io/vue-playground/productVue/Product.html).

### Tech Deets
* HTML
* CSS
* Materialize CSS
* ES6 Syntax
* Vue.js