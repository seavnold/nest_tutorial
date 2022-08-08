import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from "src/database";
import { Repository } from "typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";

@Injectable()
export class QuizService {
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) {}

    getAllQuiz() {
        return [1, 2, 3, 4, 'From the service'];
    }

    async createQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz);
    }

    async findById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            where: { id: id },
            relations: ['questions']
        })
    }
}