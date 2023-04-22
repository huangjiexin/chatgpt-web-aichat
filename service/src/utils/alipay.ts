import type { AlipaySdkConfig } from 'alipay-sdk'
import AlipaySdk from 'alipay-sdk'
import { getConfig } from 'src/storage/mongo'

// const url = process.env.MONGODB_URL
// const dataBase = process.env.MONGODB_DB
// const client = new MongoClient(url)
// const configCol = client.db(dataBase).collection('config')

export async function initAlipay() {
  const config = await getConfig()
  // 普通公钥模式
  return new AlipaySdk({
    ...config.alipayConfig as AlipaySdkConfig,
  })
}

export function generateOrderNumber() {
  const date = new Date()
  const year = date.getFullYear().toString().slice(2)
  const month = (`0${date.getMonth() + 1}`).slice(-2)
  const day = (`0${date.getDate()}`).slice(-2)
  const hours = (`0${date.getHours()}`).slice(-2)
  const minutes = (`0${date.getMinutes()}`).slice(-2)
  const seconds = (`0${date.getSeconds()}`).slice(-2)
  const randomDigits = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
  return `${year}${month}${day}${hours}${minutes}${seconds}${randomDigits}`
}

export function checkNotifySign() {
  return true
}
