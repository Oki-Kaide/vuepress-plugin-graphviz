import Loading from './Loading.vue';

const Graphviz = {
  name: 'Graphviz',
  props: {
    id: {
      type: String,
      required: true
    },
    graph: {
      type: String,
      required: true
    },
  },
  data () {
    return {
      svg: undefined
    }
  },
  render (h) {
    if (this.svg === undefined) {
      return h('Loading')
    }

    return h('div', {
      class: 'graphviz',
      domProps: {
        innerHTML: this.svg,
        style: 'width: 100%'
      }
    })
  },
  mounted () {
    window.global ||= {};
    window.process ||= {
      "argv": [],
      on: () => {}
    };
    const vizRenderStringSync = require("@aduh95/viz.js/sync");
    const content = this.graph || this.$el.querySelector(".graph-data").textContent;
    this.svg = vizRenderStringSync(content)
  },
  components: {
    Loading
  }
}

export default ({ Vue }) => {
  Vue.component('Graphviz', Graphviz)
}
