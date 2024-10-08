import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`Application is running on: http://localhost:${PORT}`);
}

bootstrap();
