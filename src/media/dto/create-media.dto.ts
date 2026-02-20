import { IsString, IsInt, IsOptional, IsEnum } from 'class-validator';
import { TipoMedio } from '@prisma/client';

export class CreateMediaDto {
  @IsInt()
  id_objeto: number;

  @IsEnum(TipoMedio)
  tipo: TipoMedio;

  @IsString()
  url: string; // Aquí guardaremos el link de la imagen o audio

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  peso?: string;

  @IsOptional()
  @IsInt()
  duracion?: number;
}