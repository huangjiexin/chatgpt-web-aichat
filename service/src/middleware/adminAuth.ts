import jwt from 'jsonwebtoken'
import { getCacheConfig } from '../storage/config'
import { getAdminById } from '../storage/admin'
import { Status } from '../storage/model'

const adminAuth = async (req, res, next) => {
  const config = await getCacheConfig()
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const info = jwt.verify(token, config.siteConfig.loginSalt.trim())
    req.headers.userId = info.userId
    const admin = await getAdminById(info.userId)
    if (admin == null || admin.status !== Status.Normal)
      throw new Error('管理员不存在 | Admin does not exist.')
    else
      next()
  }
  catch (error) {
    res.send({ status: 'Unauthorized', message: error.message ?? 'Please authenticate.', data: null })
  }
}

export { adminAuth }
