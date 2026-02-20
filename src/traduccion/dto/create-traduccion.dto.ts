import { IsString, IsInt } from 'class-validator';

export class CreateTraduccionDto {
  @IsInt()
  id_objeto: number;

  @IsString()
  idioma: string; // Ej: "en" para inglés, "fr" para francés

  @IsString()
  titulo_traducido: string;

  @IsString()
  descripcion_traducida: string;
}
