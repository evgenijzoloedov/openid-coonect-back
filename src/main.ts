import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';


async function bootstrap() {
	const PORT = process.env.PORT || 5000;

	const app = await NestFactory.create(AppModule);

	app.enableCors();
	app.useWebSocketAdapter(new WsAdapter(app));


	const config = new DocumentBuilder()
		.setTitle('Rental solution')
		.setDescription('Rental solution API')
		.setVersion('1.0')
		.addTag('Flats')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	app.use(
		session({
			secret: 'secret',
			resave: false,
			saveUninitialized: true,
		}),
	);
	app.use(passport.initialize())
	app.use(passport.session());
	await app.listen(PORT, async () => {
		console.log(`Server has been started on ${await app.getUrl()}`);
	});
}

bootstrap();
