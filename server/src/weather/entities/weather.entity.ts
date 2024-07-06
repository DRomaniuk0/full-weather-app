import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Weather {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    city: string;

    @Column('float')
    temperature: number;

    @Column('varchar')
    main: string;

    @Column('varchar')
    description: string;

    @Column('varchar')
    icon: string;

    @CreateDateColumn()
    date: Date;
}
