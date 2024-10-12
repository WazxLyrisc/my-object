// Mảng để lưu trữ các tasks
let tasks = [];
let taskId = 0;

// Hàm thêm task mới
function addTask() {
    let taskTitle = document.getElementById('new-task').value;
    if (taskTitle.trim() === '') return;

    // Tạo task mới với id và tiêu đề
    let newTask = {
        id: taskId++,
        title: taskTitle,
        completed: false
    };

    tasks.push(newTask);
    document.getElementById('new-task').value = ''; // Xóa nội dung input
    renderTasks(); // Cập nhật danh sách tasks
}

// Hàm hiển thị danh sách tasks
function renderTasks() {
    let taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Xóa nội dung hiện tại

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.title}</span>
            <div class="task-actions">
                <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Hàm thay đổi trạng thái hoàn thành của task
function toggleComplete(id) {
    let task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks(); // Cập nhật danh sách tasks
}

// Hàm chỉnh sửa task
function editTask(id) {
    let newTitle = prompt("Edit task:", tasks.find(task => task.id === id).title);
    if (newTitle !== null) {
        tasks.find(task => task.id === id).title = newTitle;
        renderTasks();
    }
}

// Hàm xóa task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks(); // Cập nhật danh sách tasks
}