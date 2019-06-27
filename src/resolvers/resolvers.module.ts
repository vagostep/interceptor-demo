import { Module } from '@nestjs/common';
import { UsersResolverModule } from './users/users.module';

@Module({
  imports: [UsersResolverModule],
  exports: [UsersResolverModule]
})
export class ResolversModule { }
