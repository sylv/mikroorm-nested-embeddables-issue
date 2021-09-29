import { ArrayType, Embeddable, Enum, Property } from "@mikro-orm/core";

export enum RestrictionMode {
  Blacklist,
  Whitelist,
}

@Embeddable()
export class RestrictionItem {
  @Enum(() => RestrictionMode)
  mode: RestrictionMode;

  @Property({ type: ArrayType })
  value: string[] = [];
}
