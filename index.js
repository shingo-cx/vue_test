// const vm = new Vue ({
//   el: '#demo',
//   data: {
//     inputZip:'',
//     defaultZip:'1000000'
//   },
//   computed: {
//     computedZip: function() {
//       return !isNaN(this.inputZip) && this.inputZip.length == 7 ? this.inputZip : this.defaultZip
//     }
//   }
//   filters: {
//     filterZip: function(d) {
//       let buf = (d+'0000000').slice(0,7);
//       return isNaN(buf) ? '半角数字で入力して下さい' : buf.toString()
//     }
//   }
// });

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

const vm = new Vue ({
  el: '#demo',
  data: {
    groceryList: [
      { id: 0, text: 'Learn1'},
      { id: 1, text: 'Learn2'},
      { id: 2, text: 'Learn3'}
    ]
  }
})

