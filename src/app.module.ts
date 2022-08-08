import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeOrmConfig), QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
