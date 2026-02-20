import { Injectable } from '@nestjs/common';
import { CreateEstadisticaVisitaDto } from './dto/create-estadistica-visita.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EstadisticaVisitaService {
  constructor(private prisma: PrismaService) {}

  create(createEstadisticaVisitaDto: CreateEstadisticaVisitaDto) {
    return this.prisma.estadisticaVisita.create({ data: createEstadisticaVisitaDto });
  }

  findAll() {
    return this.prisma.estadisticaVisita.findMany({
      include: { objeto: { select: { titulo: true } } }, // Traemos el título para la gráfica
      orderBy: { fecha_hora: 'desc' }
    });
  }
}