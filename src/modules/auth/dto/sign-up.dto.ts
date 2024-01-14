import { IsEmail, IsString, Matches, MinLength } from 'class-validator'

export class SignUpDto {
  @IsString()
  fullName: string

  @IsString()
  telphone: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @MinLength(4)
  password: string

  @IsString()
  @MinLength(4)
  @Matches('password')
  comfirmPassword: string
}
