import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  const config = new DocumentBuilder()
    .setTitle('API 문서 제목')
    .setDescription('API 설명')
    .setVersion('1.0')
    .addTag('태그명') // 선택사항
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // /api-docs 경로에 Swagger UI 제공

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
