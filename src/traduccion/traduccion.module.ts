import { Module } from '@nestjs/common';
import { TraduccionService } from './traduccion.service';
import { TraduccionController } from './traduccion.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [TraduccionController],
  providers: [TraduccionService, PrismaService],
})
export class TraduccionModule {}
