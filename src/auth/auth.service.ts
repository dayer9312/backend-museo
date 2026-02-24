import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service'; // Asegúrate de que esta ruta apunte a tu prisma.service

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async login(correo: string, contrasena: string) {
    // 1. Buscamos al usuario en la base de datos por su correo
    const usuario = await this.prisma.usuario.findFirst({
      where: { correo: correo, eliminado: false },
    });

    // 2. Verificamos que el usuario exista y la contraseña sea correcta
    // (Nota de ingeniero: Para tu tesis, luego podemos encriptar esto con bcrypt, por ahora lo comparamos directo)
    if (!usuario || usuario.contrasena !== contrasena) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    // 3. Preparamos los datos que irán dentro del Token (gafete)
    const payload = { 
      sub: usuario.id_usuario, 
      correo: usuario.correo, 
      rol: usuario.rol 
    };

    // 4. Devolvemos el token firmado y los datos básicos del usuario
    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        rol: usuario.rol
      }
    };
  }
}