import { MissingParamError } from '../error/missing-param-error'
import { HttpResponse, HttpResquest } from '../protocols/http'

export class SingUpController {
  handle (httpRequest: HttpResquest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        body: new MissingParamError('name'),
        statusCode: 400
      }
    }
    if (!httpRequest.body.email) {
      return {
        body: new MissingParamError('email'),
        statusCode: 400
      }
    }
  }
}
