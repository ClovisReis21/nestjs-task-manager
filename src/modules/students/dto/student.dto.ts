import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('Student')
export class StudentDTO {
  @Field()
  id: string

  @FilterableField()
  name: string

  @FilterableField()
  key: string
}
