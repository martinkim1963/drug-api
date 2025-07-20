import { Module } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { GlobalHttpModule } from './common/http/http.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './common/db/db.module';

@Module({
    imports: [ConfigModule.forRoot(),
        GlobalHttpModule,
        DBModule,
        AppModule
    ],
    controllers: [],
    providers: [],
})
export class RootModule { }
