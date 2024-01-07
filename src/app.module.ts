import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CouponsModule } from './modules/coupons/coupons.module';

@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    CustomersModule,
    CouponsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
