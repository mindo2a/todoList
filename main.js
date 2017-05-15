var todoList = {

	todos: [],

	displayTodos: function () {
		if (this.todos.length === 0) {
			console.log("This todo list is empty!");
		}else {
			console.log("My todo: ");
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log("(X)", this.todos[i].todoText);
				}else {
					console.log("( )", this.todos[i].todoText);
				}
			}
		}
	},

	addTodos: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	changeTodo: function (position, newValue) {
		this.todos[position].todoText = newValue;
		this.displayTodos();
	},

	deleteTodo: function (position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},

	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();	
	},

	toggleAll: function () {
		var todosTotal = this.todos.length;
		var todosCompleted = 0;

		for (var i = 0; i < todosTotal; i++) {
			if (this.todos[i].completed === true) {
				todosCompleted++;
			}
		}

		if (todosCompleted === todosTotal) {
			for (var i = 0; i < todosTotal; i++) {
				this.todos[i].completed = false;
			}
		}else {
			for (var i = 0; i < todosTotal; i++) {
				this.todos[i].completed = true;
			}
		}

		this.displayTodos();
	}
};

var handlers = {

	displayTodo: function() {
		todoList.displayTodos();
	},
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodos(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
	},
	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';	
	},
	toggleAll: function() {
		todoList.toggleAll();
	}
};