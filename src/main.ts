import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  // Activar la validación globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina datos que no estén en el DTO (seguridad)
    forbidNonWhitelisted: true, // Tira error si envían datos extra
  }));

  // CONFIGURACIÓN DE SWAGGER (DOCUMENTACIÓN)

  const config = new DocumentBuilder()
    .setTitle('API - Casa de la Libertad') // Título de tu proyecto
    .setDescription('Documentación oficial del backend para la App Guía Virtual y Panel Web.')
    .setVersion('1.0')
    .addTag('Salas', 'Endpoints para gestionar las salas del museo') // Opcional: Para organizar
    .addTag('Objetos', 'Endpoints para las piezas museológicas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' es la ruta en el navegador

  await app.listen(3000);
}
bootstrap();
