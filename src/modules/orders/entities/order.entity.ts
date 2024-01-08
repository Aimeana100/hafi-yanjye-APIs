import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderDetails } from './order-details.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  orderId: string;
  @Column()
  orderDate: Date;
  @Column()
  status: string;
  orderDetails: OrderDetails;
  @OneToOne(() => User)
  @JoinColumn()
  customer: User;
}
