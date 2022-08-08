import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import entities from "src/database";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5001,
    username: 'postgres',
    password: 'noldaR6209',
    database: 'nest_tutorial',
    entities: entities,
    synchronize: true,
}