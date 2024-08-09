import { generateRandomNumber } from "@common"
import { getOrigin as getWebOrigin} from "@web"
import { getOrigin as getNodeOrigin} from "@node"
import { logRandomNumber } from "reader/index.js"


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