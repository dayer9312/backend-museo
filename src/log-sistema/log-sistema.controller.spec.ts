import { Test, TestingModule } from '@nestjs/testing';
import { LogSistemaController } from './log-sistema.controller';
import { LogSistemaService } from './log-sistema.service';

describe('LogSistemaController', () => {
  let controller: LogSistemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogSistemaController],
      providers: [LogSistemaService],
    }).compile();

    controller = module.get<LogSistemaController>(LogSistemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
