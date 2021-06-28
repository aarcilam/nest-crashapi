import { Injectable } from '@nestjs/common';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from './entities/movimiento.entity';

@Injectable()
export class MovimientoService {
  constructor(
    @InjectRepository(Movimiento)
    private movimientosRepository: Repository<Movimiento>,
  ) {}
  create(createMovimientoDto: CreateMovimientoDto) {
    return this.movimientosRepository.save(createMovimientoDto);
  }

  findAll() {
    return this.movimientosRepository.find();
  }

  findOne(id: number) {
    return this.movimientosRepository.findOneOrFail(id);
  }

  async update(id: number, updateMovimientoDto: UpdateMovimientoDto) {
    const mov = await this.movimientosRepository.update(
      id,
      updateMovimientoDto,
    );
    return mov;
  }

  remove(id: number) {
    return this.movimientosRepository.delete(id);
  }
}
