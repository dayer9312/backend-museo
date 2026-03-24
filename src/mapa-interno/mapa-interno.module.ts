import { Module } from '@nestjs/common';
import { MapaInternoService } from './mapa-interno.service';
import { MapaInternoController } from './mapa-interno.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [MapaInternoController],
  providers: [MapaInternoService, PrismaService],
})
export class MapaInternoModule {}
