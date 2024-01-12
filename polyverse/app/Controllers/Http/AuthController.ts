import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  
  async login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  async signup({ view }: HttpContextContract) {
    return view.render('auth/signup')
  }
}
