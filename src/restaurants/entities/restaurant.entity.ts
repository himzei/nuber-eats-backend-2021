import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant extends CoreEntity {
  @Field((type) => String)
  @Column()
  @IsString()
  @Length(4)
  name: string;

  @Field((type) => String)
  @Column()
  @IsString()
  coverImg: string;

  @Field((type) => String, { nullable: true, defaultValue: 'Daegu in Korea' })
  @Column()
  @IsString()
  address: string;

  @ManyToOne((type) => Category, (category) => category.restaurant)
  @Field((type) => Category)
  category: Category;
}
