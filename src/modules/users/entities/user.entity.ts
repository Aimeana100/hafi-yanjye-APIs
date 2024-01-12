import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum Role {
  ADMIN = 'ADMIN',
  AGENT = 'AGENT',
  CUSTOMER = 'CUSTOMER',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fullName: string

  @Column()
  telphone: string

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.AGENT,
  })
  role: Role

  @Column({ unique: true })
  email: string

  @Column()
  password: string
}
