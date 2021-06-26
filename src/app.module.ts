import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovimientoModule } from './movimiento/movimiento.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MovimientoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'AArcila',
      password: '',
      database: 'nestjs',
      entities: [],
      synchronize: true,
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
