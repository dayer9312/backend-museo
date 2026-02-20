import { Module } from '@nestjs/common';
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

@Module({
  imports: [
    PrismaModule, 
    SalaModule, ObjetoModule, MediaModule, CodigoQrModule, TraduccionModule, MapaInternoModule, UsuarioModule, EstadisticaVisitaModule, LogSistemaModule
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}