import { Module } from '@nestjs/common';
import { LogSistemaService } from './log-sistema.service';
import { LogSistemaController } from './log-sistema.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [LogSistemaController],
  providers: [LogSistemaService, PrismaService],
})
export class LogSistemaModule {}
