import { IsString, IsNotEmpty, IsInt, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCodigoQrDto {
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @Type(() => Number) // <--- ESTO ES VITAL para que no explote el 500
  @IsInt()
  @IsNotEmpty()
  id_objeto: number;

  @IsString()
  @IsNotEmpty()
  estado: string; 
}
