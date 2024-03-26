import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerService } from 'src/shared/logger/services/logger.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from 'src/shared/comman/interceptors/errors.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    LoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class ProductsModule {}
