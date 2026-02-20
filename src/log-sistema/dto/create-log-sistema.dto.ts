import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateLogSistemaDto {
  @IsInt()
  id_usuario: number;

  @IsString()
  accion: string; // Ej: "CREAR", "EDITAR", "ELIMINAR"

  @IsOptional()
  @IsString()
  tabla_afectada?: string; // Ej: "ObjetoMuseologico"

  @IsOptional()
  @IsInt()
  id_tabla?: number; // El ID del objeto que se tocó
}