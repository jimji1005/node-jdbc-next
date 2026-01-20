import * as Promise from "bluebird";
import * as j from "java";
import * as debug from "debug";
import { EventEmitter } from "events";
declare module "java" {
    interface NodeAPI {
        callStaticMethodAsync(className: string, methodName: string, ...args: any[]): Promise<any>;
        callStaticMethodSync(className: string, methodName: string, ...args: any[]): any;
        newInstanceSync(className: string, ...args: any[]): any;
        isJvmCreated(): boolean;
        getStaticFieldValue(className: string, fieldName: string): any;
        classpath: string[];
        options: string[];
    }
}
export declare class Java {
    java: j.NodeAPI;
    events: EventEmitter;
    mavenClasspath: string[];
    mavenDependencies: {};
    protected _debug: debug.IDebugger;
    constructor(useXrs?: boolean, useMaven?: boolean);
    static getInstance(): Java;
    isJvmCreated(): boolean;
    addOption(option: string): void;
    addClasspath(dependencies: string[]): void;
}
