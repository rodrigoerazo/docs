const asciidoctor = require('asciidoctor.js')()

// asciidoctor.Extensions.register(function () {
//     this.inlineMacro('feature', function () {
//         var self = this
//         self.process(function (parent, target) {
//         var text
//         // return self.createInline(parent, 'anchor', text, { 'type': 'link', target: "/docs/ref/feature/latest" + target + ".html" }).convert()
//         })
//     })
// })