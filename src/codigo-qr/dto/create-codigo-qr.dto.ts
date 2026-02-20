import { IsString, IsInt, IsEnum, IsOptional } from 'class-validator';
import { EstadoQR } from '@prisma/client';

export class CreateCodigoQrDto {
  @IsInt()
  id_objeto: number;

  @IsString()
  codigo: string; // El texto único que leerá la cámara

  @IsOptional()
  @IsEnum(EstadoQR)
  estado?: EstadoQR;
}
