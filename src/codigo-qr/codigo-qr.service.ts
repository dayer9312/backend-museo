import { Injectable, InternalServerErrorException, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCodigoQrDto } from './dto/create-codigo-qr.dto';
import { UpdateCodigoQrDto } from './dto/update-codigo-qr.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CodigoQrService {
  constructor(private readonly prisma: PrismaService) {}

  // 1. MÉTODO PARA LA APP MÓVIL (Búsqueda profunda para la ficha técnica)
  // Agrega esto dentro de tu clase CodigoQrService
  async buscarPorCodigoString(codigoStr: string) {
    const registroQr = await this.prisma.codigoQR.findUnique({
      where: { 
        codigo: codigoStr 
      },
      include: {
        objeto: {
          include: {
            multimedia: true, // Traemos las fotos y audios
            sala: true,       // Traemos el nombre de la sala
          }
        }
      }
    });

    // Si no existe el QR o está eliminado, lanzamos un error 404
    if (!registroQr || registroQr.eliminado) {
      throw new NotFoundException(`El código QR ${codigoStr} no fue encontrado`);
    }

    // 🚀 LA MAGIA: Devolvemos directamente el objeto museológico, 
    // así la App Móvil no tiene que cambiar ni una línea de código.
    return registroQr.objeto; 
  }

  // 2. MÉTODO QUE PEDÍA TU CONTROLADOR (findByCodigo)
  async findByCodigo(codigoTexto: string) {
    const prismaAny = this.prisma as any;
    return await prismaAny.codigoQR.findFirst({
      where: { codigo: codigoTexto, eliminado: false },
      include: { objeto: true }
    });
  }

  // ==========================================================
  // MÉTODOS ESTÁNDAR (CRUD)
  // ==========================================================
  async create(createCodigoQrDto: CreateCodigoQrDto) {
    try {
      const prismaAny = this.prisma as any;
      const objetoExiste = await prismaAny.objetoMuseologico.findUnique({
        where: { id_objeto: Number(createCodigoQrDto.id_objeto) }
      });

      if (!objetoExiste) {
        throw new BadRequestException('La pieza museológica seleccionada no existe.');
      }

      return await prismaAny.codigoQR.create({
        data: {
          codigo: createCodigoQrDto.codigo,
          id_objeto: Number(createCodigoQrDto.id_objeto),
          estado: createCodigoQrDto.estado || 'ACTIVO',
          eliminado: false
        },
        include: { objeto: true }
      });
    } catch (error: any) {
      if (error.code === 'P2002') throw new BadRequestException('Este código QR ya está registrado.');
      throw new InternalServerErrorException('Error en el motor: ' + error.message);
    }
  }

  findAll() {
    return (this.prisma as any).codigoQR.findMany({
      where: { eliminado: false },
      include: { objeto: true }
    });
  }

  findOne(id: number) {
    return (this.prisma as any).codigoQR.findUnique({
      where: { id_qr: id },
      include: { objeto: true }
    });
  }

  update(id: number, updateCodigoQrDto: UpdateCodigoQrDto) {
    return (this.prisma as any).codigoQR.update({
      where: { id_qr: id },
      data: updateCodigoQrDto as any,
    });
  }

  remove(id: number) {
    return (this.prisma as any).codigoQR.update({
      where: { id_qr: id },
      data: { eliminado: true, fecha_eliminado: new Date() },
    });
  }
}