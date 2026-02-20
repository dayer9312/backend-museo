import { PartialType } from '@nestjs/mapped-types';
import { CreateCodigoQrDto } from './create-codigo-qr.dto';

export class UpdateCodigoQrDto extends PartialType(CreateCodigoQrDto) {}
