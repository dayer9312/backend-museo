import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadisticaVisitaDto } from './create-estadistica-visita.dto';

export class UpdateEstadisticaVisitaDto extends PartialType(CreateEstadisticaVisitaDto) {}
