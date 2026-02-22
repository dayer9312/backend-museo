import { Injectable, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { CreateCodigoQrDto } from './dto/create-codigo-qr.dto';
import { UpdateCodigoQrDto } from './dto/update-codigo-qr.dto';
import { PrismaService } from '../prisma.service';
import { EstadoQR } from '@prisma/client';

@Injectable()
export class CodigoQrService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCodigoQrDto: CreateCodigoQrDto) {
    try {
      const prismaAny = this.prisma as any;

      // 1. Usamos el nombre REAL detectado: objetoMuseologico
      const objetoExiste = await prismaAny.objetoMuseologico.findUnique({
        where: { id_objeto: Number(createCodigoQrDto.id_objeto) }
      });

      if (!objetoExiste) {
        throw new BadRequestException('La pieza museológica seleccionada no existe.');
      }

      // 2. Creamos el registro en codigoQR
      return await prismaAny.codigoQR.create({
        data: {
          codigo: createCodigoQrDto.codigo,
          id_objeto: Number(createCodigoQrDto.id_objeto),
          estado: createCodigoQrDto.estado || 'ACTIVO',
          eliminado: false
        },
        include: { objeto: true } // Esto funcionará si la relación se llama 'objeto'
      });

    } catch (error: any) {
      console.error("LOG FINAL MONKEY STUDIO:", error.message);
      
      if (error.code === 'P2002') {
        throw new BadRequestException('Este código QR ya está registrado.');
      }
      
      throw new InternalServerErrorException('Error en el motor: ' + error.message);
    }
  }

  findAll() {
    return (this.prisma as any).codigoQR.findMany({
      where: { eliminado: false },
      include: { objeto: true }
    });
  }

  findByCodigo(codigoTexto: string) {
    return this.prisma.codigoQR.findFirst({
      where: { codigo: codigoTexto, eliminado: false },
      include: { objeto: true }
    });
  }

  findOne(id: number) {
    return this.prisma.codigoQR.findUnique({
      where: { id_qr: id },
      include: { objeto: true }
    });
  }

  update(id: number, updateCodigoQrDto: UpdateCodigoQrDto) {
    return this.prisma.codigoQR.update({
      where: { id_qr: id },
      data: updateCodigoQrDto as any,
    });
  }

  remove(id: number) {
    return this.prisma.codigoQR.update({
      where: { id_qr: id },
      data: { 
        eliminado: true, 
        fecha_eliminado: new Date() 
      },
    });
  }
}