import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { PrismaService } from '../prisma.service'; 

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {} 

  create(createSalaDto: CreateSalaDto) {
    return this.prisma.sala.create({
      data: createSalaDto,
    });
  }

  findAll() {
    // Retorna todas las salas no eliminadas
    return this.prisma.sala.findMany({
      where: { eliminado: false },
      orderBy: { orden: 'asc' }, 
    });
  }

  findOne(id: number) {
    return this.prisma.sala.findUnique({
      where: { id_sala: id },
    });
  }

  update(id: number, updateSalaDto: UpdateSalaDto) {
    return this.prisma.sala.update({
      where: { id_sala: id },
      data: updateSalaDto,
    });
  }

  remove(id: number) {
    // Soft Delete: No borramos, solo marcamos
    return this.prisma.sala.update({
      where: { id_sala: id },
      data: { 
        eliminado: true,
        fecha_eliminado: new Date()
      },
    });
  }
}