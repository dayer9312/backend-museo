import { IsString, IsInt, IsOptional, IsBoolean } from 'class-validator';

export class CreateObjetoDto {
  @IsInt()
  id_sala: number; // <--- ¡Importante! Para saber en qué sala está

  @IsString()
  titulo: string;

  @IsString()
  descripcion: string;

  @IsOptional()
  @IsString()
  anio?: string;

  @IsOptional()
  @IsString()
  autor?: string;

  @IsString()
  @IsOptional()
  estado_conservacion?: string;
}