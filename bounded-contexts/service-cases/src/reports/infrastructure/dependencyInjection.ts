import { pool } from "../../_config/db.config";

import { PostgresReportRepository } from "./persistence/PostgresReportRepository";

import { CreateReport } from "../application/CreateReport";
import { FindReportsByLocality } from "../application/FindReportsByLocality";
import { FindReportsByUserId } from "../application/FindReportsByUserId";
import { UpdateReportStatus } from "../application/UpdateReportStatus";
import { UpdateReportDescription } from "../application/UpdateReportDescription";

import { CreateReportController } from "../infrastructure/http/controllers/CreateReportController";
import { FindReportsByLocalityController } from "../infrastructure/http/controllers/FindReportsByLocalityController";
import { FindReportsByUserIdController } from "../infrastructure/http/controllers/FindReportsByUserIdController";
import { UpdateReportStatusController } from "../infrastructure/http/controllers/UpdateReportStatusController";

import { JwtMiddleware } from "../../_shared/infrastructure/middlewares/JwtMiddleware";
import { JwtTokenService } from "./services/JwtTokenService";

import { rabbitmqEventPublisher } from "../../_shared/infrastructure/eventPublishers/rabbitmqEventPublisher";

const jwtTokenService = new JwtTokenService();

const jwtMiddleware = new JwtMiddleware(jwtTokenService);

const reportRepository = new PostgresReportRepository(pool);

const createReport = new CreateReport(reportRepository, rabbitmqEventPublisher);
const findReportsByLocality = new FindReportsByLocality(reportRepository);
const findReportsByUserId = new FindReportsByUserId(reportRepository);
const updateReportStatus = new UpdateReportStatus(reportRepository);
const updateReportDescription = new UpdateReportDescription(reportRepository);

const createReportController = new CreateReportController(createReport);
const findReportsByLocalityController = new FindReportsByLocalityController(
  findReportsByLocality
);
const findReportsByUserIdController = new FindReportsByUserIdController(
  findReportsByUserId
);
const updateReportStatusController = new UpdateReportStatusController(
  updateReportStatus
);

export {
  updateReportDescription,
  createReportController,
  findReportsByLocalityController,
  findReportsByUserIdController,
  updateReportStatusController,
  jwtMiddleware,
};
