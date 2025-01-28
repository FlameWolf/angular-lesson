import { Component, inject, Input } from "@angular/core";
import { RandomNumberService } from "../../services/random-number.service";

@Component({
	selector: "app-hello",
	imports: [],
	templateUrl: "./hello.component.html",
	styleUrl: "./hello.component.css"
})
export class HelloComponent {
	@Input()
	protected name!: string;
	protected randomNumberService = inject(RandomNumberService);
}