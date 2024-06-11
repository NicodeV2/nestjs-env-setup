import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {} // Inject ConfigService

  getHello(): string {
    // Get environment variables
    const host = this.configService.get<string>('DB_HOST');
    const port = this.configService.get<number>('DB_PORT');
    const user = this.configService.get<string>('DB_USER');
    const password = this.configService.get<string>('DB_PASS');
    const dbName = this.configService.get<string>('DB_NAME');

    // Return HTML response
    return `
    <html>
    <head>
      <title>Environment Variables</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
        }
        h1 {
          color: #333;
        }
        p {
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <h1>Environment Variables</h1>
      <p><strong>Database Host:</strong> ${host}</p>
      <p><strong>Database Port:</strong> ${port}</p>
      <p><strong>Database User:</strong> ${user}</p>
      <p><strong>Database Password:</strong> ${password}</p>
      <p><strong>Database Name:</strong> ${dbName}</p>
      <p><em>Note: We are not using dotenv, we are using @nestjs/config</em></p>
    </body>
    </html>
  `;
  }
}
