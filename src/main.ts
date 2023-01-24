import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
  });
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Patients Agenda API')
    .setDescription('The API for the Patients Agenda app')
    .setVersion('1.0')
    .addTag('patients')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT, '0.0.0.0');
}
bootstrap();
