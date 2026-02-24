import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 1. Le decimos que busque el token en la cabecera "Authorization: Bearer <token>"
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // 2. Si el token expiró, lo rechaza automáticamente
      secretOrKey: 'CASA_DE_LA_LIBERTAD_SECRET_2026', // 3. ¡Debe ser LA MISMA llave secreta que pusimos en auth.module!
    });
  }

  // 4. Si el token es válido, desencripta los datos y los mete en la variable "Request"
  async validate(payload: any) {
    return { 
      id_usuario: payload.sub, 
      correo: payload.correo, 
      rol: payload.rol 
    };
  }
}