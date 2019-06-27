import { Module, HttpModule } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    HttpModule,
  ],
  providers: [UsersResolver, UsersService]
})
export class UsersResolverModule { }
