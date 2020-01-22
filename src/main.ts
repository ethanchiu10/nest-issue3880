import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

import * as express from 'express';
import * as http from 'http'

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  // await app.listen(3000);


  const server = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.init();

  http.createServer(server).listen(3000);
}
bootstrap();
