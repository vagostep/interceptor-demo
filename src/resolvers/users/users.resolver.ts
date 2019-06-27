import { Args, Resolver, Query } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {

  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => User)
  public async getUser(@Args('document') document: string): Promise<User> {

    return await this.usersService.getUser(document);
  }
}