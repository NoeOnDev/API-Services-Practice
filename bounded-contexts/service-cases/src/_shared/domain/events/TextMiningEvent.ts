import { Identifier } from "../value-objects/Identifier";

export class TextMiningEvent {
  constructor(
    public readonly entityId: Identifier,
    public readonly entityType: "Report" | "News" | "Appointment",
    public readonly description: string
  ) {}
}