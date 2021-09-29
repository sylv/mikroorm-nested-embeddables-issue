import { MikroORM } from "@mikro-orm/core";
import OrmConfig from "./orm.config";
import { PluginTestSettings } from "./plugin-test-settings";

async function main() {
  const orm = await MikroORM.init(OrmConfig);
  const repo = orm.em.getRepository(PluginTestSettings);
  const item = repo.create({
    id: "771309736129200140",
    enabled: true,
  });

  console.log({ item });
}

main();
