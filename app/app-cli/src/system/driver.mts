import { generateRandomNumber } from "@test-ts-monorepo/common"
import { getInfo, getOrigin as getWebOrigin } from "@test-ts-monorepo/web"
import { getOrigin as getNodeOrigin} from "@test-ts-monorepo/node"
import { logRandomNumber } from "~/reader/index.mjs"
import { webLogger } from "@test-ts-monorepo/common/web"

export function start(): void {  
  console.log('start up')
  getInfo();
  const randomNumber = generateRandomNumber()

  logRandomNumber(randomNumber)

  const libs = getLibs()
  console.log(libs)

  console.log('finish')

}

export function getLibs(): string{
  const web = getWebOrigin()
  const node = getNodeOrigin()

  return `got answers from: ${web}; ${node}`
}

webLogger('web logger')