import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Product name must have atleast 2 characters.' })
  @IsNotEmpty()
  productname: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'descrption must have atleast 2 characters.' })
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  categoryid: string;

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  productimgs: string[];

  @ApiProperty()
  @IsString()
  productthumbnailimg: string;

  @ApiProperty()
  @IsString()
  sku: string;

  @ApiProperty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsString()
  stock: number;

  @ApiProperty()
  discount: number;

  @ApiProperty()
  rating: string;

  @ApiProperty()
  @IsString()
  createdby: string;

  @IsString()
  updatedby: string;

  @IsString()
  createddate: string;

  @IsString()
  updateddate: string;

  @ApiProperty()
  @IsBoolean()
  isactive: boolean;
}
