import { Order } from 'src/modules/orders/entities/order.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column({ nullable: true })
  tinNumber: string

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.AGENT,
  })
  role: Role

  @OneToMany(() => Order, (orders) => orders.customer)
  orders: Order[]

  @Column({ unique: true })
  email: string

  @Column()
  password: string
}
