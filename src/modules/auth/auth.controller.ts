import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { SignUpDto, SignUpDtoWithPass } from './dto/sign-up.dto'
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User loogin' })
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    const data = await this.authService.signIn(signInDto)
    return { data, message: 'success' }
  }

  @Post('register')
  @ApiOperation({ summary: 'Sign up as a customer' })
  async signUp(@Body() signUpdDto: SignUpDtoWithPass) {
    const { password, confirmPassword, ...rest } = signUpdDto

    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match')
    }
    const data = await this.authService.signUp(rest as SignUpDto)
    return { data, message: 'success' }
  }
}
