import { Test, TestingModule } from '@nestjs/testing';
import { ObjetoController } from './objeto.controller';
import { ObjetoService } from './objeto.service';

describe('ObjetoController', () => {
  let controller: ObjetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjetoController],
      providers: [ObjetoService],
    }).compile();

    controller = module.get<ObjetoController>(ObjetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
