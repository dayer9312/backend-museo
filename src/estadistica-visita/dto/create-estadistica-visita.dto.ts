import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateEstadisticaVisitaDto {
  @IsInt()
  id_objeto: number;

  @IsOptional()
  @IsString()
  dispositivo?: string; // Ej: "Android", "iOS"

  @IsOptional()
  @IsString()
  version_app?: string; // Ej: "1.0.0"

  @IsOptional()
  @IsInt()
  tiempo_visualizacion?: number; // Segundos que el turista vio la obra
}