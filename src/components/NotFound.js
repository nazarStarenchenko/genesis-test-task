import { useState } from "react";
import { StyledNotFound } from "./styles/StyledNotFound";

export default function NotFound () {
	return (
	<StyledNotFound>
		<h1>ERROR 404</h1>
		<h2>Not found</h2>
	</StyledNotFound>
	)
}