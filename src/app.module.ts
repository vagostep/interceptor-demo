import { Module, HttpService, HttpModule, OnModuleInit } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResolversModule } from './resolvers/resolvers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    HttpModule.register({
      timeout: 3000,
    }),
    ResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {

  constructor(private readonly httpService: HttpService) {}

  public onModuleInit() {

    this.httpService.axiosRef.interceptors.request.use((req) => {
      console.log('request', req);

      return req;
    });

    this.httpService.axiosRef.interceptors.response.use((resp) => {
      console.log('response', resp);

      return resp;
    });
  }
}
