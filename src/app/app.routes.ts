import { Routes } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";
import { HelloComponent } from "./components/hello/hello.component";
import { SecondComponent } from "./components/second/second.component";
import { ThirdComponent } from "./components/third/third.component";

export const routes: Routes = [
	{
		path: "first",
		component: FirstComponent
	},
	{
		path: "hello",
		component: HelloComponent
	},
	{
		path: "second",
		component: SecondComponent
	},
	{
		path: "third",
		component: ThirdComponent
	}
];