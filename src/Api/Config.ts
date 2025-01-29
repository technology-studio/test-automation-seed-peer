/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2025-01-28T19:34:22+01:00
 * @Copyright: Technology Studio
**/

import { ConfigManager } from '@txo/config-manager'

export type SeedExecutor<ASSETS> = {
  execute: (baseKey: string) => PromiseLike<ASSETS>,
}

export type Config = {
  getRidge: () => string,
  seedEntities: <ASSETS>(seedExecutor: SeedExecutor<ASSETS>) => Promise<ASSETS>,
}

export const configManager: ConfigManager<Config> = new ConfigManager<Config>({
  getRidge: undefined,
  seedEntities: undefined,
})
