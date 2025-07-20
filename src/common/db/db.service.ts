import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from 'generated/prisma';

/** @description prisma 사용할 제네릭 설정 */
@Injectable()
export class DBService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}