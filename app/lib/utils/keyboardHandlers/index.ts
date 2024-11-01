import { KeyboardEventHandler } from "react";

export function enterHandler(callback: () => void) {
        const handler: KeyboardEventHandler<HTMLButtonElement> = (event) => {
                if (event.key === "Enter") {
                        callback();
                }
        };
        return handler;
}
