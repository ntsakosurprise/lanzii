
import ResponseError from '../error-handler/response';
import {STATUS_CODES} from './constants';
import ERROR_MESSAGES from './errorMessages';

class ApiResponse {
  response: any = {};
  constructor() {}

  analyseTransformResponse(response: any) {
  
    if (response?.ok) {
      let text = response.text();

      return text.then((res: any) => {
        let parsed = this.jsonParse(res);
        // let parsed = this.jsonParse(res);
        console.log('THE JSON RAW', parsed);
        return {
          payload: {...parsed},
          success: true,
          statusCode: response.status,
        };
      });
    } else {
      if (this.runErrorClient(response)) {
        let specificCodeMessage = this.getClientErrorMessage(response.status);
        return {
          payload: {
            message: 'A client error has occured',
            erroCodeMessage: specificCodeMessage,
          },
          error: true,
          statusCode: response.status,
          errorType: 'operational',
          player: 'client',
        };
      }

      if (this.runErrorServer(response)) {
        let specificCodeMessage = this.getServerErrorMessage(response.status);
        return {
          payload: {
            message: 'A server error has occured',
            erroCodeMessage: specificCodeMessage,
          },
          error: true,
          statusCode: response.status,
          errorType: 'operational',
          player: 'server',
        };
      }
      if (this.runRedirect(response)) {
        return {
          payload: {
            message: 'A server error has occured',
          },
          redirect: true,
          statusCode: response.status,
        };
      }
      this.throwApiError({
        message: 'Out of context status code',
        statusCode: response.status,
        errorType: 'operational',
      });
    }
  }
  throwApiError(toThrow: any) {
    throw new ResponseError(toThrow);
  }
  runSuccess(response: any) {
    if (
      response.status >= STATUS_CODES.SUCCESS.LOWER_END &&
      response.status <= STATUS_CODES.SUCCESS.HIGHER_END
    ) {
      return true;
      // return response?.text ? response.text() : response.json();
    }
    return false;
  }
  runInfo(response: any) {
    if (
      response.status >= STATUS_CODES.INFO.LOWER_END &&
      response.status <= STATUS_CODES.INFO.HIGHER_END
    ) {
      return true;
    }
    return false;
  }
  runErrorClient(response: any) {
    if (
      response.status >= STATUS_CODES.ERROR_CLIENT.LOWER_END &&
      response.status <= STATUS_CODES.ERROR_CLIENT.HIGHER_END
    ) {
      return true;
    }
    return false;
  }

  runErrorServer(response: any) {
    if (
      response.status >= STATUS_CODES.ERROR_SERVER.LOWER_END &&
      response.status <= STATUS_CODES.ERROR_SERVER.HIGHER_END
    ) {
      return true;
    }
    return false;
  }

  runRedirect(response: any) {
    if (
      response.status >= STATUS_CODES.REDIRECT.LOWER_END &&
      response.status <= STATUS_CODES.REDIRECT.HIGHER_END
    ) {
      return true;
    }

    return false;
  }
  jsonParse(text: any) {
    try {
      console.log('JSON HAS BEEN PARSED');
      return JSON.parse(text);
    } catch (err) {
      console.log('JSON PARSE HAS FAILED', err);
      log(
        'events',
        'Please note: failed to parse json because Server has responded with a text, a payload object representing this will be created and resolved.',
      );
      return {
        text,
      };
    }
  }
  getClientErrorMessage(status: any) {
    const {ERROR_CLIENT} = STATUS_CODES;
    switch (status) {
      case ERROR_CLIENT.LOWER_END:
        return ERROR_MESSAGES.ERROR_400;
      case ERROR_CLIENT.ERROR_401:
        return ERROR_MESSAGES.ERROR_401;
      case ERROR_CLIENT.ERROR_402:
        return ERROR_MESSAGES.ERROR_402;
      case ERROR_CLIENT.ERROR_403:
        return ERROR_MESSAGES.ERROR_403;
      case ERROR_CLIENT.ERROR_404:
        return ERROR_MESSAGES.ERROR_404;
      default:
        return ERROR_MESSAGES.ERROR_CLIENT_UNKNOWN;
    }
  }
  getServerErrorMessage(status: any) {
    const {ERROR_SERVER} = STATUS_CODES;
    switch (status) {
      case ERROR_SERVER.LOWER_END:
        return ERROR_MESSAGES.ERROR_500;
      case ERROR_SERVER.ERROR_503:
        return ERROR_MESSAGES.ERROR_503;
      default:
        return ERROR_MESSAGES.ERROR_SERVER_UNKNOWN;
    }
  }
}

export default ApiResponse;
