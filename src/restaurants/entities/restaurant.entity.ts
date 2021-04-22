import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  @Length(4)
  name: string;

  @Field((type) => Boolean, { nullable: true, defaultValue: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan: boolean;

  @Field((type) => String, { nullable: true, defaultValue: 'Daegu in Korea' })
  @Column()
  @IsString()
  address: string;
}
