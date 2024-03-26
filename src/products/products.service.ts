import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerService } from 'src/shared/logger/services/logger.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly prodRepository: Repository<Product>,
    private readonly logger: LoggerService,
  ) {}
  create(createProductDto: CreateProductDto) {
    const product: Product = new Product();
    product.productname = createProductDto.productname;
    product.description = createProductDto.description;
    product.categoryid = createProductDto.categoryid;
    product.productimgs = createProductDto.productimgs;
    product.productthumbnailimg = createProductDto.productthumbnailimg;
    product.sku = createProductDto.sku;
    product.price = createProductDto.price;
    product.stock = createProductDto.stock;
    product.discount = createProductDto.discount;
    product.rating = createProductDto.rating;
    product.createdby = createProductDto.createdby || '';
    product.createddate = new Date().toString();
    product.updatedby = createProductDto.updatedby || '';
    product.updateddate = createProductDto.updateddate || '';
    product.isactive = createProductDto.isactive;
    return this.prodRepository.save(product);
  }

  findAll() {
    return this.prodRepository.find({});
  }

  findOne(id: number) {
    return this.prodRepository.findOneBy({ productid: id });
    // return this.prodRepository
    //   .createQueryBuilder('cat')
    //   .select([
    //     'cat.productname',
    //     'cat.description',
    //     'cat.categoryid',
    //     'cat.productimgs',
    //     'cat.productthumbnailimg',
    //     'cat.createdby',
    //     'cat.updatedby',
    //     'cat.createddate',
    //     'cat.updateddate',
    //     'cat.isactive',
    //   ])
    //   .where({ categoryid: id })
    //   .getOne();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product: Product = new Product();
    product.productname = updateProductDto.productname;
    product.description = updateProductDto.description;
    product.categoryid = updateProductDto.categoryid;
    product.productimgs = updateProductDto.productimgs;
    product.productthumbnailimg = updateProductDto.productthumbnailimg;
    product.sku = updateProductDto.sku;
    product.price = updateProductDto.price;
    product.stock = updateProductDto.stock;
    product.discount = updateProductDto.discount;
    product.rating = updateProductDto.rating;
    product.createdby = updateProductDto.createdby || '';
    product.createddate = updateProductDto.createddate || '';
    product.updatedby = updateProductDto.updatedby || '';
    product.updateddate = new Date().toString();
    product.isactive = updateProductDto.isactive;
    return this.prodRepository.update(id, product);
  }

  remove(id: number) {
    return this.prodRepository.delete(id);
  }
}
