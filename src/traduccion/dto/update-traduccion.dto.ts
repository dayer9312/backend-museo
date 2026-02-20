import { PartialType } from '@nestjs/mapped-types';
import { CreateTraduccionDto } from './create-traduccion.dto';

export class UpdateTraduccionDto extends PartialType(CreateTraduccionDto) {}
