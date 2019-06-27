import { HttpService, Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {

  constructor(private readonly httpService: HttpService) {}

  public getUser(document: string): Promise<User> {

    return new Promise<User>( (resolve, reject) => {

      this.httpService.get<User>('http://jsonplaceholder.typicode.com/users/1')
      .subscribe((resp) => resolve(resp.data), (err) => reject(err));
    });
  }
}