import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  categoryid: number;

  @Column({ type: 'varchar', unique: true, length: 50 })
  categoryname: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  vendorid: string;

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
