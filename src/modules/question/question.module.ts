import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, Quiz } from 'src/database';
import { QuizService } from '../quiz/quiz.service';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
    imports: [TypeOrmModule.forFeature([Question, Quiz])],
    controllers: [QuestionController],
    providers: [QuestionService, QuizService]
})
export class QuestionModule {}
