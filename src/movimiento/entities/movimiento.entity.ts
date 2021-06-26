import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  title: string;

  @Column()
  amount: string;

  @Column()
  type: string;

  @Column({ default: true })
  archived: boolean;
}
