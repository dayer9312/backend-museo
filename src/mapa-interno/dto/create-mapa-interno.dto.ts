import { IsString, IsInt, IsOptional, IsObject } from 'class-validator';

export class CreateMapaInternoDto {
  @IsInt()
  id_sala: number;

  @IsString()
  imagen_mapa: string; // URL del plano de la sala

  @IsOptional()
  @IsObject() // Usamos IsObject porque Prisma maneja el JSON como un objeto en NestJS
  coordenadas_interactivas?: object;
}