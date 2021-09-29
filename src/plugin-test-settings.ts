import { Entity } from "@mikro-orm/core";
import { PluginSettings } from "./plugin-settings";

@Entity()
export class PluginTestSettings extends PluginSettings {}
