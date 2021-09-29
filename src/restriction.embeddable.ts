import { BigIntType, Embeddable, Embedded, Property } from "@mikro-orm/core";
import { RestrictionItem } from "./restriction-item.embeddable";

@Embeddable()
export class Restriction {
  @Property({ type: BigIntType })
  permissions: bigint;

  @Embedded(() => RestrictionItem)
  role: RestrictionItem;

  @Embedded(() => RestrictionItem)
  channel: RestrictionItem;
}
