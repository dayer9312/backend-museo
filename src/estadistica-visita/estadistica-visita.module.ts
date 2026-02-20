import { Module } from '@nestjs/common';
import { EstadisticaVisitaService } from './estadistica-visita.service';
import { EstadisticaVisitaController } from './estadistica-visita.controller';

@Module({
  controllers: [EstadisticaVisitaController],
  providers: [EstadisticaVisitaService],
})
export class EstadisticaVisitaModule {}
