import { Module } from '@nestjs/common';
import { Connection } from './configs/dbconection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './Users/user/user.controller';
import { UserService } from './Users/user/user.service';
import {UserModule} from './Users/user/user.module';
@Module({
  imports: [Connection, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
