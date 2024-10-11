import { container } from "tsyringe";
import { DataSource } from "typeorm";
import { config } from "dotenv";
import { IUserRepository } from "../../domain/IUserRepository";
import { TypeORMUserRepository } from "../persistence/TypeOrmUserRepository";
import { IIdentifierGenerator } from "../../domain/IIdentifierGenerator";
import { UuidGenerator } from "../services/UuidGenerator";
import { IHashService } from "../../domain/IHashService";
import { Argon2HashService } from "../services/Argon2HashService";
import { SaveUserUseCase } from "../../application/SaveUserUseCase";
import { UserController } from "../http/UserController";
