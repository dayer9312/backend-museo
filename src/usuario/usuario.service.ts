import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({ data: createUsuarioDto });
  }

  findAll() {
    return this.prisma.usuario.findMany({ where: { eliminado: false } });
  }

  findOne(id: number) {
    return this.prisma.usuario.findUnique({ where: { id_usuario: id } });
  }

  // Método estrella para el futuro Login
  findByEmail(correo: string) {
    return this.prisma.usuario.findUnique({ 
      where: { correo: correo, eliminado: false } 
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id_usuario: id },
      data: updateUsuarioDto,
    });
  }

  remove(id: number) {
    return this.prisma.usuario.update({
      where: { id_usuario: id },
      data: { eliminado: true, fecha_eliminado: new Date() },
    });
  }
}