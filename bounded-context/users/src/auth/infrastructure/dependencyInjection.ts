import { contactRepository } from "../../contacts/infrastructure/dependencyInjection";
import { userRepository } from "../../users/infrastructure/dependencyInjection";

import { RegisterUser } from "../application/RegisterUser";

import { RegisterUserController } from "./http/controllers/RegisterUserController";

import { Argon2HashService } from "./services/Argon2HashService";
import { rabbitmqEventPublisher } from "./eventPublishers/rabbitmqEventPublisher";

const hashService = new Argon2HashService();

const registerUser = new RegisterUser(
  userRepository,
  contactRepository,
  hashService,
  rabbitmqEventPublisher
);

const registerUserController = new RegisterUserController(registerUser);

export { registerUserController };