import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/users/users.controller';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ResponseMessage('records added Succesfully')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Records fetched Succesfully')
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Records fetched Succesfully')
  async findOne(@Param('id') id: string) {
    // return this.categoriesService.findOne(+id);
    const rsobj = await this.categoriesService.findOne(+id);
    console.log('rsobj', rsobj);
    if (rsobj) {
      return rsobj;
    } else {
      return [];
    }
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ResponseMessage('Employees records updated Succesfully')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    // return this.categoriesService.update(+id, updateCategoryDto);
    const rsobj = await this.categoriesService.update(+id, updateCategoryDto);
    return rsobj;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Employees records Deleted Succesfully')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
