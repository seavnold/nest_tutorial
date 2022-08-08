import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/database';
import { Repository } from 'typeorm';
import { QuizService } from '../quiz/quiz.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private questionRepository: Repository<Question>, private readonly quizService: QuizService) {}

    async saveQuestion(questionData: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.findById(questionData.quizId);
        const question = this.questionRepository.create({...questionData, quiz});

        return question.save();
    }
}
