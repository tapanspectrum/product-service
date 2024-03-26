import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerService } from 'src/shared/logger/services/logger.service';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly logger: LoggerService,
  ) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const cate: Category = new Category();
    cate.categoryname = createCategoryDto.categoryname;
    cate.description = createCategoryDto.description;
    cate.isactive = createCategoryDto.isactive;
    cate.vendorid = createCategoryDto.vendorid;
    cate.createdby = createCategoryDto.createdby;
    cate.createddate = new Date().toString();
    cate.updatedby = createCategoryDto.updatedby || '';
    cate.updateddate = createCategoryDto.updateddate || '';
    return this.categoryRepository.save(cate);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find({});
  }

  findOne(id: number) {
    // return this.categoryRepository.findOneBy({ categoryid: id });
    return this.categoryRepository
      .createQueryBuilder('cat')
      .select([
        'cat.categoryname',
        'cat.description',
        'cat.vendorid',
        'cat.createdby',
        'cat.updatedby',
        'cat.createddate',
        'cat.updateddate',
        'cat.isactive',
      ])
      .where({ categoryid: id })
      .getOne();
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const cate: Category = new Category();
    cate.categoryname = updateCategoryDto.categoryname;
    cate.description = updateCategoryDto.description;
    cate.isactive = updateCategoryDto.isactive;
    cate.vendorid = updateCategoryDto.vendorid;
    cate.createdby = updateCategoryDto.createdby;
    cate.createddate = new Date().toString();
    cate.updatedby = updateCategoryDto.updatedby || '';
    cate.updateddate = updateCategoryDto.updateddate || '';
    return this.categoryRepository.update(id, cate);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
