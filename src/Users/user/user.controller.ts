import { User } from './../../Models/User';
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService : UserService ){

    }
    @Post()
    Create(@Body() params : User ):void{
        this.userService.create(params)
    }
    @Get('/all')
    getUsers(): User[] {
        return this.userService.getAll()
    }
    @Get('/:correo')
    getUser(@Param('correo') param) : User{
        // Valida la respuesta, si el usuario no existe, regresa un mensaje diciendo que no fue encontrado
        const user = this.userService.getByEmail(param);
        if(!user?.correo) {
          throw new HttpException(`No existe el correo`, HttpStatus.NOT_FOUND)
        } else {
          return this.userService.getByEmail(param)
        }
    }
}