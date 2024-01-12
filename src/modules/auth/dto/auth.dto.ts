import { IsString } from 'class-validator'
import { Role } from 'src/modules/users/entities/user.entity'

export class SignInDto {
  @IsString()
  email: string

  @IsString()
  password: string
}

export class SignUpDto {
  @IsString()
  fullName: string

  @IsString()
  telphone: string

  @IsString()
  role: Role.CUSTOMER

  @IsString()
  email: string

  @IsString()
  password: string
}
