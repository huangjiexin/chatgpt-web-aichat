import type { ObjectId } from 'mongodb'
import type { TextAuditServiceOptions, TextAuditServiceProvider } from 'src/utils/textAudit'

export enum Status {
  Normal = 0,
  Deleted = 1,
  InversionDeleted = 2,
  ResponseDeleted = 3,
  PreVerify = 4,
  AdminVerify = 5,
}

export enum Level {
  Regular = 0,
  Premium = 1,
  VIP = 2,
}

export class UserInfo {
  _id: ObjectId
  name: string
  email: string
  password: string
  status: Status
  createTime: string
  verifyTime?: string
  avatar?: string
  description?: string
  level?: number
  updateTime?: string
  constructor(email: string, password: string) {
    this.name = email
    this.email = email
    this.password = password
    this.status = Status.PreVerify
    this.createTime = new Date().toLocaleString()
    this.verifyTime = null
    this.level = 0
  }
}

export class AdminInfo {
  _id: ObjectId
  name: string
  email: string
  password: string
  status: Status
  createTime: string
  verifyTime?: string
  avatar?: string
  description?: string
  constructor(email: string, password: string) {
    this.name = email
    this.email = email
    this.password = password
    this.status = Status.PreVerify
    this.createTime = new Date().toLocaleString()
    this.updateTime = new Date().toLocaleString()
  }
}

export class ChatRoom {
  _id: ObjectId
  roomId: number
  userId: string
  title: string
  prompt: string
  status: Status = Status.Normal
  constructor(userId: string, title: string, roomId: number) {
    this.userId = userId
    this.title = title
    this.prompt = undefined
    this.roomId = roomId
  }
}

export class ChatOptions {
  parentMessageId?: string
  messageId?: string
  conversationId?: string
  promptTokens?: number
  completionTokens?: number
  totalTokens?: number
  estimated?: boolean
  constructor(parentMessageId?: string, messageId?: string, conversationId?: string) {
    this.parentMessageId = parentMessageId
    this.messageId = messageId
    this.conversationId = conversationId
  }
}

export class previousResponse {
  response: string
  options: ChatOptions
}

export class ChatInfo {
  _id: ObjectId
  roomId: number
  uuid: number
  dateTime: number
  prompt: string
  response?: string
  status: Status = Status.Normal
  options: ChatOptions
  previousResponse?: previousResponse[]
  constructor(roomId: number, uuid: number, prompt: string, options: ChatOptions) {
    this.roomId = roomId
    this.uuid = uuid
    this.prompt = prompt
    this.options = options
    this.dateTime = new Date().getTime()
  }
}

export class UsageResponse {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
  estimated: boolean
}

export class ChatUsage {
  _id: ObjectId
  userId: string
  roomId: number
  chatId: ObjectId
  messageId: string
  promptTokens: number
  completionTokens: number
  totalTokens: number
  estimated: boolean
  dateTime: number
  constructor(userId: string, roomId: number, chatId: ObjectId, messageId: string, usage: UsageResponse) {
    this.userId = userId
    this.roomId = roomId
    this.chatId = chatId
    this.messageId = messageId
    if (usage) {
      this.promptTokens = usage.prompt_tokens
      this.completionTokens = usage.completion_tokens
      this.totalTokens = usage.total_tokens
      this.estimated = usage.estimated
    }
    this.dateTime = new Date().getTime()
  }
}

export class Config {
  constructor(
    public _id: ObjectId,
    public timeoutMs: number,
    public apiKey?: string,
    public apiDisableDebug?: boolean,
    public accessToken?: string,
    public apiBaseUrl?: string,
    public apiModel?: string,
    public reverseProxy?: string,
    public socksProxy?: string,
    public socksAuth?: string,
    public httpsProxy?: string,
    public siteConfig?: SiteConfig,
    public mailConfig?: MailConfig,
    public auditConfig?: AuditConfig,
  ) { }
}

export class SiteConfig {
  constructor(
    public siteTitle?: string,
    public loginEnabled?: boolean,
    public loginSalt?: string,
    public registerEnabled?: boolean,
    public registerReview?: boolean,
    public registerMails?: string,
    public siteDomain?: string,
  ) { }
}

export class MailConfig {
  constructor(
    public smtpHost: string,
    public smtpPort: number,
    public smtpTsl: boolean,
    public smtpUserName: string,
    public smtpPassword: string,
  ) { }
}

// 套餐类：包含套餐的基本信息
export class Package {
  _id: ObjectId
  name: string
  times: number
  price: number
  sort: number
  createTime?: string
  status?: number
  updateTime?: string
  description?: string
  constructor(
    name: string,
    times: number,
    price: number,
    sort: number,
    description?: string,
  ) {
    this.name = name
    this.times = times
    this.price = price
    this.sort = sort
    this.description = description
    this.createTime = new Date().toLocaleString()
    this.status = 1
  }
}

// Code 卡密类：包含卡密的基本信息，例如卡密码、所属套餐、是否已使用等
export class Code {
  _id: ObjectId
  code: string
  packageId: ObjectId
  used: boolean
  createTime?: string
  updateTime?: string
  userId?: ObjectId
  usedTime?: string
  constructor(
    code: string,
    packageId: ObjectId,
  ) {
    this.code = code
    this.packageId = packageId
    this.used = false
    this.createTime = new Date().toLocaleString()
  }
}

// UserTimes 用户套餐类：包含用户的套餐信息，例如用户的免费次数、卡密次数、剩余次数等
export class UserTimes {
  _id: ObjectId
  userId: ObjectId
  cardTotalTimes: number
  cardRemainingTimes: number
  freeTotalTimes: number
  freeRemainingTimes: number
  createTime: string
  updateTime: string
  constructor(
    userId: ObjectId,
    cardTotalTimes: number,
    cardRemainingTimes: number,
    freeTotalTimes?: number,
    freeRemainingTimes?: number,
  ) {
    this.userId = userId
    this.cardTotalTimes = cardTotalTimes
    this.cardRemainingTimes = cardRemainingTimes
    this.freeTotalTimes = freeTotalTimes || 5
    this.freeRemainingTimes = freeRemainingTimes || 5
    this.createTime = new Date().toLocaleString()
  }
}
export class AuditConfig {
  constructor(
    public enabled: boolean,
    public provider: TextAuditServiceProvider,
    public options: TextAuditServiceOptions,
    public textType: TextAudioType,
    public customizeEnabled: boolean,
    public sensitiveWords: string,
  ) { }
}

export enum TextAudioType {
  None = 0,
  Request = 1 << 0, // 二进制 01
  Response = 1 << 1, // 二进制 10
  All = Request | Response, // 二进制 11
}
