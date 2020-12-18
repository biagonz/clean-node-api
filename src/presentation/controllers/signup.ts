import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
import { HttpResponse, HttpResquest } from '../protocols/http'

export class SingUpController {
  handle (httpRequest: HttpResquest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
