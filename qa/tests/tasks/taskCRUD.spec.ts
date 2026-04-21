import { createTask, readTask, updateTask, deleteTask } from '../tasks';

describe('Task CRUD Operations', () => {
    let taskId;

    test('Create Task', async () => {
        const task = { title: 'Test Task', description: 'Test task description' };
        const response = await createTask(task);
        expect(response).toHaveProperty('id');
        taskId = response.id;
    });

    test('Read Task', async () => {
        const response = await readTask(taskId);
        expect(response).toHaveProperty('id', taskId);
    });

    test('Update Task', async () => {
        const updatedTask = { title: 'Updated Test Task', description: 'Updated description' };
        const response = await updateTask(taskId, updatedTask);
        expect(response).toHaveProperty('title', 'Updated Test Task');
    });

    test('Delete Task', async () => {
        const response = await deleteTask(taskId);
        expect(response).toEqual({ message: 'Task deleted successfully' });
    });
});