const STORAGE_KEY = 'todos-vuejs-demo'
const todoStorage = {
  fetch: function() {
    const todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

const app = new Vue({
  el: '#app',
  data: {
    // 使用するデータ
  },
  methods: {
    // 使用するメソッド
  }
})

