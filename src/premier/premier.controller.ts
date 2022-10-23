import { Controller, Post, Put, Delete, Patch, Get } from "@nestjs/common";

@Controller('premier')
export class PremierController{
    @Post('taha')
    reqPost(){
        return  'Post works!';
    }

    @Get('taha')
    reqGet(){
        return 'Get works!';
    }

    @Delete('taha')
    reqDelete(){
        return 'Delete works!'
    }

    @Put('taha')
    reqPut(){
        return 'Put works!';
    }

    @Patch('taha')
    reqPatch(){
        return 'Patch works';
    }
}