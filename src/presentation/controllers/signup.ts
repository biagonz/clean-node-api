import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
import { HttpResponse, HttpResquest } from '../protocols/http'

export class SingUpController {
  handle (httpRequest: HttpResquest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
