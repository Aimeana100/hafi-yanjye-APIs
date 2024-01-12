import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ProductImage } from './product-image.entity'
import { Category } from 'src/modules/categories/entities/category.entity'
import { Order } from 'src/modules/orders/entities/order.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
  @Column({
    type: 'text',
  })
  description: string
  @Column()
  price: number
  @Column()
  cost: number
  @Column()
  quatity: number
  @OneToMany(() => ProductImage, (images) => images.product, { cascade: true })
  images: ProductImage[]
  @ManyToOne(() => Category, (category) => category.products)
  category: Category
  @ManyToOne(() => Order, (order) => order.orderDetails)
  orders: Order
}
