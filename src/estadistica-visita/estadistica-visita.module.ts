import { Module } from '@nestjs/common';
import { EstadisticaVisitaService } from './estadistica-visita.service';
import { EstadisticaVisitaController } from './estadistica-visita.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [EstadisticaVisitaController],
  providers: [EstadisticaVisitaService, PrismaService],
})
export class EstadisticaVisitaModule {}
