import { MikroORM } from "@mikro-orm/core";
import { PluginSettings } from "./plugin-settings";
import { PluginTestSettings } from "./plugin-test-settings";
import { RestrictionItem } from "./restriction-item.embeddable";
import { Restriction } from "./restriction.embeddable";

export default {
  type: "sqlite",
  clientUrl: "sqlite://./db.sqlite",
  entities: [PluginSettings, Restriction, RestrictionItem, PluginTestSettings],
} as Parameters<typeof MikroORM.init>[0];
