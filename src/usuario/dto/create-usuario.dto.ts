import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { Rol } from '@prisma/client';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsString()
  contrasena: string; // Más adelante aprenderemos a encriptarla

  @IsOptional()
  @IsEnum(Rol)
  rol?: Rol;
}