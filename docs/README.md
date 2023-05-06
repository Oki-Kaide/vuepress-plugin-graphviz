---
home: true
heroText: 'graphviz Plugin for VuePress'
tagline: 'Easy diagramming in your documentation/blog/whatever. Requires VuePress 1.x'
footer: MIT Licensed | Copyright © 2020 Brock Wilcox (awwaiid)
---

# Installation

Install it with your package manager of choice:

**npm**:

``` bash
$ npm install --save-dev vuepress-plugin-graphviz
```

**yarn**:

``` bash
$ yarn add -D vuepress-plugin-graphviz
```

Add it to the plugin listing of your vuepress config:

``` js
// .vuepress/config.js

module.exports = {
    // ...
    plugins: [
        'graphviz'
    ]
    // ...
}
```

## Fenced code block syntax

The plugin provides graphviz diagram rendering for fenced code blocks
with language name 'graphviz':

    ``` graphviz
      digraph {
        A -> B -> C, D
      }
    ```

``` graphviz
  digraph {
    A -> B -> C, D
  }
```

## Tag Syntax (not recommended)

If you really don't want to use the code block syntax
this plugin also supports using a tag wrapper
for graphviz-diagrams like so:

``` md
<graphviz>
digraph {
  A -> B -> C, D
}
</graphviz>
```

yielding:
<graphviz>
digraph {
  A -> B -> C, D
}
</graphviz>

::: tip
The tag-syntax can be useful if you want to attach additional CSS-classes
to a diagram, e.g. for aligning it on the page.
:::

