import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovimientoModule } from './movimiento/movimiento.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './movimiento/entities/movimiento.entity';

@Module({
  imports: [
    MovimientoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-04.cleardb.com',
      port: 3306,
      username: 'bbbef4ee29322b',
      password: '415b4b2e',
      database: 'heroku_cc6334dc3cf4295',
      entities: [Movimiento],
      synchronize: false,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'AArcila',
    //   password: '',
    //   database: 'nestjs',
    //   entities: [Movimiento],
    //   synchronize: true,
    //   socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
