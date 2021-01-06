import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.tasksService.getTasks();
    }

    @Get(':taskID')
    getTask(@Param('taskID') taskID) {
        return this.tasksService.getTask(parseInt(taskID));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task);
        return 'Creating a Task';
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        console.log(task);
        return `Updating a Task with id: ${id}`;
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a Task with id: ${id}`;
    }


}
