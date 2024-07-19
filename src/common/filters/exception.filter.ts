import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    switch (exception.constructor) {
      case HttpException:
        status = (exception as HttpException).getStatus();
        break;
      case QueryFailedError:
        status = (exception as HttpException).getStatus();
        break;
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    return response.status(status).json({
      statusCode: status,
      message: exception['response'].message[0] || 'Internal server error',
      timestamp: new Date().toISOString(),
    });
  }
}
