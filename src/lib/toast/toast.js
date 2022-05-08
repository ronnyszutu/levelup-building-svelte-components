import { writable } from "svelte/store";

const newToast = () => {
	const { subscribe, update } = writable([]);

	function send(message) {
		update((store) => [...store, message]);
	}

	return { subscribe, send };
};

export const toast = newToast();
