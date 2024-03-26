import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Category name must have atleast 2 characters.' })
  @IsNotEmpty()
  categoryname: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  vendorid: string;

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
