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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/shared/comman/responsemsg';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ResponseMessage('records added Succesfully')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Records fetched Succesfully')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Records fetched Succesfully')
  async findOne(@Param('id') id: string) {
    // return this.productsService.findOne(+id);
    const rsobj = await this.productsService.findOne(+id);
    console.log('rsobj', rsobj);
    if (rsobj) {
      return rsobj;
    } else {
      return [];
    }
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ResponseMessage('Record updated Succesfully')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Records Deleted Succesfully')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
