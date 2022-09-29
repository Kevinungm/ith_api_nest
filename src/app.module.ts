import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
=======
import { UserController } from './users/user/user.controller';
import { UserService } from './users/user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
>>>>>>> 4d87ba1 (Tarea de validar correo)
})
export class AppModule {}
