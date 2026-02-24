import { Module } from '@nestjs/common';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalaModule } from './sala/sala.module';
import { PrismaModule } from './prisma.module';
import { ObjetoModule } from './objeto/objeto.module';
import { MediaModule } from './media/media.module';
import { CodigoQrModule } from './codigo-qr/codigo-qr.module';
import { TraduccionModule } from './traduccion/traduccion.module';
import { MapaInternoModule } from './mapa-interno/mapa-interno.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EstadisticaVisitaModule } from './estadistica-visita/estadistica-visita.module';
import { LogSistemaModule } from './log-sistema/log-sistema.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    PrismaModule, 
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'), // process.cwd() siempre apunta a la raíz del proyecto
      serveRoot: '/uploads', // Obliga a que la URL siempre tenga /uploads/...
    }),
    SalaModule, ObjetoModule, MediaModule, CodigoQrModule, TraduccionModule, MapaInternoModule, UsuarioModule, EstadisticaVisitaModule, LogSistemaModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}