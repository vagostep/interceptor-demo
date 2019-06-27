import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'User' })
export class User {

  @Field({ description: 'Unique ID' })
  public id: string;

  @Field({ description: 'Name' })
  public name: string;
}