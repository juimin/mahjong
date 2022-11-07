import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
    preset: "ts-jest",
    verbose: true,
    testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, "/dist/"],
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
};

export default config;
