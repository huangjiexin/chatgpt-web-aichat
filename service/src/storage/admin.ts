import { MongoClient, ObjectId } from 'mongodb'
import * as dotenv from 'dotenv'
import type { AdminInfo } from 'src/storage/model'
import { Code, Package, UserTimes } from 'src/storage/model'

dotenv.config()

const url = process.env.MONGODB_URL
const dataBase = process.env.MONGODB_DB
const client = new MongoClient(url)
const adminCol = client.db(dataBase).collection('admin')
const packageCol = client.db(dataBase).collection('package')
const codeCol = client.db(dataBase).collection('code')
const userTimesCol = client.db(dataBase).collection('user_times')

export async function getAdmin(email: string): Promise<AdminInfo> {
  email = email.toLowerCase()
  return await adminCol.findOne({ email }) as AdminInfo
}

export async function getAdminById(userId: string): Promise<AdminInfo> {
  return await adminCol.findOne({ _id: new ObjectId(userId) }) as AdminInfo
}

export async function updateAdminInfo(userId: string, admin: AdminInfo) {
  const result = adminCol.updateOne({ _id: new ObjectId(userId) }
    , { $set: { name: admin.name, description: admin.description, avatar: admin.avatar } })
  return result
}

// package
// 创建一个package记录
export async function createPackage(packageInfo: Package) {
  const _package = new Package(packageInfo.name, packageInfo.price, packageInfo.sort, packageInfo.times)
  const result = await packageCol.insertOne(_package)
  return result
}

// 删除一个package记录
export async function deletePackage(packageId: string) {
  const result = await packageCol.deleteOne({ _id: new ObjectId(packageId) })
  return result
}

// 更新一个package记录
export async function updatePackage(packageId: string, packageInfo: Package) {
  const result = await packageCol.updateOne({ _id: new ObjectId(packageId) }, { $set: packageInfo })
  return result
}

// 根据packageId查询package记录
export async function getPackageById(packageId: string) {
  const result = await packageCol.findOne({ _id: new ObjectId(packageId) })
  return result
}

// 查询所有的package记录
export async function getAllPackage() {
  const result = await packageCol.find({}).toArray()
  return result
}

// 创建一个code，需code, packageId
export async function createCode(codeInfo: Code) {
  const code = new Code(codeInfo.code, codeInfo.packageId)
  const result = await codeCol.insertOne(code)
  return result
}

// 获取所有的code信息，以及对应的package信息
export async function getAllCode() {
  const codeResult = await codeCol.find({}).toArray()
  const packageIds = codeResult.map(code => new ObjectId(code.packageId))
  const packageResult = await packageCol.find({ _id: { $in: packageIds } }).toArray()

  const result = codeResult.map((code) => {
    const packageInfo = packageResult.find(pkg => pkg._id.equals(code.packageId))
    return { ...code, package: packageInfo }
  })

  return result
}

// 删除一个code
export async function deleteCode(codeId: string) {
  const result = await codeCol.deleteOne({ _id: new ObjectId(codeId) })
  return result
}

// getCodeByCode
export async function getCodeByCode(code: string) {
  const result = await codeCol.findOne({ code })
  return result
}

// getCodeById
export async function getCodeById(codeId: ObjectId) {
  const result = await codeCol.findOne({ _id: codeId })
  return result
}

// 核销一个code，并查找该用户的userTimes记录，没有则创建一个
export async function useCode(id: ObjectId, userId: string) {
  // 事务开始
  const codeResult = await getCodeById(id) as Code
  const packageResult = await packageCol.findOne({ _id: new ObjectId(codeResult.packageId) }) as Package
  // 查找userId的userTimes记录
  const userTimesRecord = await userTimesCol.findOne({ userId: new ObjectId(userId) }) as UserTimes
  // 如果没有记录，则创建一个
  if (!userTimesRecord) {
    const userTimes = new UserTimes(new ObjectId(userId), packageResult.times, packageResult.times)
    await userTimesCol.insertOne(userTimes)
  }
  else {
    // 如果有记录
    userTimesRecord.cardTotalTimes += packageResult.times
    userTimesRecord.cardRemainingTimes += packageResult.times
    userTimesRecord.freeRemainingTimes = 0
    await userTimesCol.updateOne({ _id: userTimesRecord._id }, { $set: userTimesRecord })
  }
  // 更新code的used为true
  await codeCol.updateOne({ _id: codeResult._id }, { $set: { used: true, userId, usedTime: new Date().toLocaleString() } })
}

export function generateRandomString(length = 32) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
    if (i === 7 || i === 11 || i === 15)
      result += '-' // 8-4-4-4-12
  }
  return result
}
