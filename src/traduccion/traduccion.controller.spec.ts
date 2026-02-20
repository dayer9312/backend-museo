import { Test, TestingModule } from '@nestjs/testing';
import { TraduccionController } from './traduccion.controller';
import { TraduccionService } from './traduccion.service';

describe('TraduccionController', () => {
  let controller: TraduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraduccionController],
      providers: [TraduccionService],
    }).compile();

    controller = module.get<TraduccionController>(TraduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
