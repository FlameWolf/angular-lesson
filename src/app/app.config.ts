import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideExperimentalZonelessChangeDetection(),
		provideRouter(
			routes,
			withComponentInputBinding(),
			withRouterConfig({
				paramsInheritanceStrategy: "always"
			})
		)
	]
};