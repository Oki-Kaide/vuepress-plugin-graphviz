const path = require('path')

module.exports = (options, ctx) => {
  if (typeof window !== "undefined")
    window.global = window;
    
  return {
    chainMarkdown (config) {
      config
        .plugin('graphviz')
        .use(require('./markdownItPlugin'))
    },
    enhanceAppFiles: path.resolve(__dirname, 'graphviz.js')
  }
}
