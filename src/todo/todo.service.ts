import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import {Todo} from './todomodel';
import {todostatus} from './todo.status'
import {AddDTO} from './addDTO';
import {NotFoundException } from '@nestjs/common';
import {UpdateDTO} from './updateDTO'


@Injectable()

export class TodoService{
    todos: Todo[] = [];
    getTodos(): Todo[]{
        return this.todos;
    }

    addTodo(newTodo: AddDTO){
        const todo = new Todo;
        todo.id =  uuidv4();
        todo.description = newTodo.description;
        todo.name=newTodo.name;
        todo.creationdate = new Date();
        todo.statut = todostatus[2];
        this.todos.push(todo);
        return 'Todo is added';
    }

    getTodoByid(id: number){
        const ourTodo = this.todos.find((e)=>e.id==id);
        if (ourTodo) {return ourTodo;}
        throw new NotFoundException("Le todo n'existe pas");
        }

    deleteTodo(id :number) {
        const len=this.todos.length
        this.todos = this.todos.filter((e) => e.id != id);
        if (this.todos.length == len){
            return 'couldnt find todo';
        }
        else {
        return 'Deleted Todo';}
    }


    updateTodo(id :number, todo: UpdateDTO){
        const todoUpdate = this.getTodoByid(id);
        todo.description = todoUpdate.description ?? todo.description 
        todo.name = todoUpdate.name ?? todo.name 
        todoUpdate.statut= todo.status ?? todoUpdate.statut
      
    }    
    }
