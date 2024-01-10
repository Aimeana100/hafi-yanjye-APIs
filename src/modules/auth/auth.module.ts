import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from '../users/user.repository';
// import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
