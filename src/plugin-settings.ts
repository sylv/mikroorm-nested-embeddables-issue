import {
  BigIntType,
  Embedded,
  Entity,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Restriction } from "./restriction.embeddable";

@Entity({ abstract: true })
export class PluginSettings {
  @PrimaryKey({ type: BigIntType })
  id: string;

  @Embedded(() => Restriction, { nullable: true })
  restriction?: Restriction;
}
