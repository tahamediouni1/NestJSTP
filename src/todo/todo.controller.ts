import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import {TodoService} from './todo.service';
import {AddDTO} from './addDTO';
import {UpdateDTO} from './updateDTO';
import {Todo} from './todomodel';

@Controller('todo')


export class TodoController{
    private todos= [];
    constructor(
        private todoService: TodoService
    ) {}


    @Get('')
    getTodos(): Todo[]{
        return this.todos;
    }
    
    @Get(':id')
    getTodoByid(@Param('id') id){
        return this.todoService.getTodoByid(id);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id) {
        return this.todoService.deleteTodo(id)
    }

    @Put(':id')
    updateTodo(@Param('id') id, @Body() todo: UpdateDTO){
    return this.todoService.updateTodo(id,todo)
    }

    @Post('addtodo')
    addTodo(@Body() newTodo: AddDTO){
        return this.todoService.addTodo(newTodo);
    }

}