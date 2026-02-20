import { Injectable } from '@nestjs/common';
import { CreateTraduccionDto } from './dto/create-traduccion.dto';
import { UpdateTraduccionDto } from './dto/update-traduccion.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TraduccionService {
  constructor(private prisma: PrismaService) {}

  create(createTraduccionDto: CreateTraduccionDto) {
    return this.prisma.traduccion.create({ data: createTraduccionDto });
  }

  findAll() {
    return this.prisma.traduccion.findMany({
      where: { eliminado: false },
      include: { objeto: { select: { titulo: true } } },
    });
  }

  // Método especial para la App Móvil: Buscar la traducción de un objeto en un idioma específico
  findByObjetoEIdioma(idObjeto: number, idioma: string) {
    return this.prisma.traduccion.findFirst({
      where: { 
        id_objeto: idObjeto, 
        idioma: idioma,
        eliminado: false 
      },
    });
  }

  findOne(id: number) {
    return this.prisma.traduccion.findUnique({ where: { id_traduccion: id } });
  }

  update(id: number, updateTraduccionDto: UpdateTraduccionDto) {
    return this.prisma.traduccion.update({
      where: { id_traduccion: id },
      data: updateTraduccionDto,
    });
  }

  remove(id: number) {
    return this.prisma.traduccion.update({
      where: { id_traduccion: id },
      data: { eliminado: true, fecha_eliminado: new Date() },
    });
  }
}