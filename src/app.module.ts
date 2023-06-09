import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '@app/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config.options), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
