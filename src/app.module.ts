import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CouponsModule } from './modules/coupons/coupons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { DiscountsModule } from './modules/discounts/discounts.module';
@Module({
  imports: [
    UsersModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    CustomersModule,
    CouponsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    DiscountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
