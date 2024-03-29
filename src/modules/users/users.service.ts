import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  findAll() {
    return this.userRepository.find()
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto)
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.getUserByEmail(email)
    return user
  }
}
