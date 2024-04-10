import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  productid: number;

  @Column({ type: 'varchar', unique: true, length: 50 })
  productname: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  categoryid: string;

  @Column('text', { array: true })
  productimgs: string[];

  @Column({ type: 'varchar' })
  productthumbnailimg: string;

  @Column({ type: 'varchar' })
  sku: string;

  @Column({ type: 'varchar' })
  price: string;

  @Column({ type: 'varchar' })
  stock: number;

  @Column({ type: 'varchar' })
  discount: number;

  @Column({ type: 'varchar' })
  rating: string;

  @Column({ type: 'varchar' })
  createdby: string;

  @Column({ type: 'varchar' })
  updatedby: string;

  @Column({ type: 'varchar' })
  createddate: string;

  @Column({ type: 'varchar' })
  updateddate: string;

  @Column({ type: 'boolean' })
  isactive: boolean;
}
