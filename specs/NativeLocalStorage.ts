import { TurboModule, TurboModuleRegistry } from "react-native";


// Those methods will be implemented inside the Native code for android or ios
export interface Spec extends TurboModule {
    setStringItem(value: string, key: string): void;
    setNumberItem(value: number, key: String): void;
    getStringItem(key: string): string;
    getNumberItem(key: string): number;
    removeItem(key: string): void;
    clear(): void
}

/*

It allows JavaScript code to interact with native code (Android or iOS)
for storing and retrieving data using a custom local storage module
(NativeLocalStorage).

*/
/*
TurboModuleRegistry => allow to access native module
*/

export default TurboModuleRegistry.getEnforcing<Spec>(
    "NativeLocalStorage"
)

/*
Fetches the native module named "NativeLocalStorage" what we will implement 
in Android/iOS
*/