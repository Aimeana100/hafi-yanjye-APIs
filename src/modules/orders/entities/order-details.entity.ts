import { Product } from 'src/modules/products/entities/product.entity'
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Order } from './order.entity'

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn()
  id: number
  @ManyToOne(() => Order, (order) => order.orderDetails)
  order: Order
  @OneToMany(() => Product, (product) => product.orders)
  products: Product
}
