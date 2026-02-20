import { Module } from '@nestjs/common';
import { LogSistemaService } from './log-sistema.service';
import { LogSistemaController } from './log-sistema.controller';

@Module({
  controllers: [LogSistemaController],
  providers: [LogSistemaService],
})
export class LogSistemaModule {}
