import { IsString, IsNotEmpty, IsInt, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { TipoMedio } from '@prisma/client'; // <--- IMPORTAMOS EL TIPO EXACTO DE PRISMA

export class CreateMediaDto {
  
  @IsOptional() 
  @IsString()
  url?: string;

  // Le decimos que valide que sea parte del Enum, y lo tipamos como TipoMedio
  @IsEnum(TipoMedio)
  @IsNotEmpty()
  tipo: TipoMedio; 

  @IsString()
  @IsOptional()
  descripcion?: string;

  @Type(() => Number) 
  @IsInt()
  @IsNotEmpty()
  id_objeto: number;
}