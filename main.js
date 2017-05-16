var todoList = {

	todos: [],
	addTodos: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function (position, newValue) {
		this.todos[position].todoText = newValue;
	},
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;	
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
	}
};

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodos(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodo();
	},
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodo();		
	},
	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
		view.displayTodo();					
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';	
		view.displayTodo();			
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodo();			
	}
};

var view = {
	displayTodo: function () {
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';
			var todo = todoList.todos[i];

			if(todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			}else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.textContent = todoTextWithCompletion;
			todoUl.appendChild(todoLi);			
		}

	}
};