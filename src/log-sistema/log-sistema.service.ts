import { Injectable } from '@nestjs/common';
import { CreateLogSistemaDto } from './dto/create-log-sistema.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LogSistemaService {
  constructor(private prisma: PrismaService) {}

  create(createLogSistemaDto: CreateLogSistemaDto) {
    return this.prisma.logSistema.create({ data: createLogSistemaDto });
  }

  findAll() {
    return this.prisma.logSistema.findMany({
      include: { usuario: { select: { nombre: true, apellido: true } } },
      orderBy: { fecha_hora: 'desc' } // Los más recientes primero
    });
  }
}