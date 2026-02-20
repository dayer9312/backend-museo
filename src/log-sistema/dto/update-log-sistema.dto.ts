import { PartialType } from '@nestjs/mapped-types';
import { CreateLogSistemaDto } from './create-log-sistema.dto';

export class UpdateLogSistemaDto extends PartialType(CreateLogSistemaDto) {}
