/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { HttpRequest, HttpResponse } from '../protocols/http';
import MissingParamError from '../errors/missing-param-errors';
import badRequest from '../helpers/http-helper';

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }

    return {
      statusCode: 200,
      body: 'ok',
    };
  }
}

export default SignUpController;
