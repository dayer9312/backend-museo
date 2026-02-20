import { Module } from '@nestjs/common';
import { MapaInternoService } from './mapa-interno.service';
import { MapaInternoController } from './mapa-interno.controller';

@Module({
  controllers: [MapaInternoController],
  providers: [MapaInternoService],
})
export class MapaInternoModule {}
