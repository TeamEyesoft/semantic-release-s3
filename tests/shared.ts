import { Context, LoggerFunction } from "semantic-release";
import { AWS } from "../src/aws";
import { PluginConfig, S3ConfigProps, WithoutNullableKeysType } from "../src/types";

export class FakeLogger {
    private _callCpt: Map<string, number> = new Map<string, number>();

    public await: LoggerFunction = () => { this._incrementCallCount('await'); };
    public complete: LoggerFunction = () => { this._incrementCallCount('complete'); };
    public debug: LoggerFunction = () => { this._incrementCallCount('debug'); };
    public error: LoggerFunction = () => { this._incrementCallCount('error'); };
    public fatal: LoggerFunction = () => { this._incrementCallCount('fatal'); };
    public fav: LoggerFunction = () => { this._incrementCallCount('fav'); };
    public info: LoggerFunction = () => { this._incrementCallCount('info'); };
    public log: LoggerFunction = () => { this._incrementCallCount('log'); };
    public note: LoggerFunction = () => { this._incrementCallCount('note'); };
    public pause: LoggerFunction = () => { this._incrementCallCount('pause'); };
    public pending: LoggerFunction = () => { this._incrementCallCount('pending'); };
    public star: LoggerFunction = () => { this._incrementCallCount('star'); };
    public start: LoggerFunction = () => { this._incrementCallCount('start'); };
    public success: LoggerFunction = () => { this._incrementCallCount('success'); };
    public wait: LoggerFunction = () => { this._incrementCallCount('wait'); };
    public warn: LoggerFunction = () => { this._incrementCallCount('warn'); };
    public watch: LoggerFunction = () => { this._incrementCallCount('watch'); };

    public getCallCount(method: string): number {
        return this._callCpt.get(method) ?? 0;
    }

    private _incrementCallCount(method: string): void {
        const callCpt = this._callCpt.get(method) ?? 0;
        this._callCpt.set(method, callCpt + 1);
    }
}

export const GetExistingFiles = async (config: PluginConfig, context: Context, bucket: string, prefix: string): Promise<string[]> => {
    const awsConfig = AWS.loadConfig(config, context) as WithoutNullableKeysType<S3ConfigProps>
    const aws = new AWS(awsConfig)
    return aws.getExistingFiles(bucket, prefix)
}

export const EmptyBucket = async (config: PluginConfig, context: Context, bucket: string, prefix?: string): Promise<void> => {
    const awsConfig = AWS.loadConfig(config, context) as WithoutNullableKeysType<S3ConfigProps>
    const aws = new AWS(awsConfig)
    await aws.emptyBucket(bucket, prefix)
}
