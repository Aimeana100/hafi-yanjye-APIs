import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findByEmail(signInDto.email);
    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email, role: user.role };
    return {
      token: await this.jwtService.signAsync(payload, { expiresIn: '2d' }),
      user,
    };
  }

  async signUp(signusUpto: SignUpDto) {
    const user = await this.usersService.findByEmail(signusUpto.email);
    if (user?.password !== signusUpto.password) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email, role: user.role };
    return {
      token: await this.jwtService.signAsync(payload, { expiresIn: '2d' }),
      user,
    };
  }
}
