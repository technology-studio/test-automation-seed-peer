/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2025-01-29T19:36:19+01:00
 * @Copyright: Technology Studio
**/

export type SeedExecutor<ASSETS> = {
  execute: (baseKey: string) => PromiseLike<ASSETS>,
}
