import { writable } from "svelte/store";

// Function to create the custom store
function createFridgeMessagesStore() {
    // Initialize the store using writable
    const { set, update, subscribe } = writable([{ message: "Svelte Family Fridge" }]);

    // Return the store object with custom methods
    return {
        subscribe, // Standard subscribe method
        set,       // Standard set method (though usually not used directly with custom stores)
        update,    // Standard update method
        // Custom method to reset the store to its initial state
        wipe: () => set([{ message: "Svelte Family Fridge" }])
    };
}

// Create and export the store instance
export const fridgeMessages = createFridgeMessagesStore();