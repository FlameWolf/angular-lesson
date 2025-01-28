import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class RandomNumberService {
	serviceName: string;

	constructor() {
		this.serviceName = RandomNumberService.name;
	}

	public get randomNumber(): number {
		return Math.ceil(Math.random() * 1000000);
	}
}