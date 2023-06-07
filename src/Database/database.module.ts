import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm/connection/Connection';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MINult$123',
      database: 'autoclinic_car_rental',
      entities: [],
      synchronize: true,
      extra: {
        insecureAuth: true,
      },
    }),
  ],

  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private connection: Connection) {
    if (connection.isConnected) {
      console.log('Database is connected');
    } else {
      console.log('Database is not connected');
    }
  }
}
