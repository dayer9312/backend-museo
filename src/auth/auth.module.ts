import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    // Configuramos el generador de Tokens
    JwtModule.register({
      secret: 'CASA_DE_LA_LIBERTAD_SECRET_2026', // ¡Esta es tu llave maestra!
      signOptions: { expiresIn: '8h' }, // El token expira en 8 horas por seguridad
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
})
export class AuthModule {}