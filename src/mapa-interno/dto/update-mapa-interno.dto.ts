import { PartialType } from '@nestjs/mapped-types';
import { CreateMapaInternoDto } from './create-mapa-interno.dto';

export class UpdateMapaInternoDto extends PartialType(CreateMapaInternoDto) {}
