import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): {'hello': string} {
        return {'hello': 'Retriving Tasks'};
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
