# VuePress Plugin for graphviz (Viz.js)

> Use graphviz Diagrams in VuePress

This [VuePress](https://vuepress.vuejs.org) plugin provides a global component wrapping Graphviz (via [Viz.js fork by aduh95](https://github.com/aduh95/viz.js). The plugin is designed to work with VuePress v1.x.

Main documentation site is at https://awwaiid.github.com/vuepress-plugin-graphviz.

## Installation

You can install it with

``` shell
yarn add -D vuepress-plugin-graphviz
```

or

``` shell
npm install --save-dev vuepress-plugin-graphviz
```

Then you just need to register the plugin in your `.vuepress/config.js`:

``` js
module.exports = {
    // ...
    plugins: [
        'vuepress-plugin-graphviz'
    ]
    // ...
}
```

## Usage

The recommended usage is to place your graphviz diagrams inside
a fenced code block with the language 'graphviz':

    ```graphviz
    digraph {
      A -> B -> C
    }
    ```

## Credits

This work is based directly off of [vuepress-plugin-mermaidjs](https://github.com/eFrane/vuepress-plugin-mermaidjs).
