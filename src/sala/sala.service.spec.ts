import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { PrismaService } from '../prisma.service'; // Importamos tu puente a la BD

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {} // Inyectamos Prisma

  // Crear una nueva sala
  create(createSalaDto: CreateSalaDto) {
    return this.prisma.sala.create({
      data: createSalaDto,
    });
  }

  // Obtener todas las salas que NO han sido eliminadas (Soft Delete)
  findAll() {
    return this.prisma.sala.findMany({
      where: { eliminado: false },
      orderBy: { orden: 'asc' }, // Ordenarlas por el campo 'orden'
    });
  }

  // Buscar una sala por ID
  findOne(id: number) {
    return this.prisma.sala.findUnique({
      where: { id_sala: id },
      include: { objetos: true }, // ¡Truco! Esto trae también los objetos de esa sala
    });
  }

  // Actualizar una sala
  update(id: number, updateSalaDto: UpdateSalaDto) {
    return this.prisma.sala.update({
      where: { id_sala: id },
      data: updateSalaDto,
    });
  }

  // Eliminar (Soft Delete): No borramos, solo marcamos como eliminado
  remove(id: number) {
    return this.prisma.sala.update({
      where: { id_sala: id },
      data: { 
        eliminado: true,
        fecha_eliminado: new Date()
      },
    });
  }
}