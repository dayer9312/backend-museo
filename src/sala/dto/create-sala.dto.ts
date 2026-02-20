import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateSalaDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  ubicacion?: string;

  @IsInt()
  orden: number;

  @IsOptional()
  @IsString()
  imagen_portada?: string;
}