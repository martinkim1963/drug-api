import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { DBService } from 'src/common/db/db.service';

export interface MediTokenResponse {
  approveMessage: string;      // JSON 문자열 (e.g. "{\"result\":\"SUCCESS\"}")
  seed: string;                // base64 인코딩 문자열
  validityDateTime: string;    // "YYYY-MM-DD HH:mm:ss" 포맷
  publicKey: string;           // RSA 공개키 PEM 포맷
  token: string;               // 인증 토큰
}
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService, private readonly dbService: DBService) { }
  async getHello() {
    const { data } = await firstValueFrom(this.httpService.get<MediTokenResponse>("http://222.122.202.236/medi/token?isDev=true&name=이세형&userNumber=6612181243117&userId=100001"))
    // await this.dbService.mediToken.create({
    //   data: data
    // })
    // return this.dbService.mediToken.findMany();
    return data
  }
}
