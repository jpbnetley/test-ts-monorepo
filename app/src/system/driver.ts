import { generateRandomNumber } from "@lib/common"
import { getOrigin as getWebOrigin} from "@lib/web"
import { getOrigin as getNodeOrigin} from "@lib/node"
import { logRandomNumber } from "~/reader/index.js"

export function start(): void {  
  console.log('start up')
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