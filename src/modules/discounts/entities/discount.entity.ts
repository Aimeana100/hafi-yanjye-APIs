import { Product } from 'src/modules/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  code: string;
  @Column()
  startAt: Date;
  @Column()
  endAt: Date;
  @Column()
  rate: number;
  @Column()
  type: string;
  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
