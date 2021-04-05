import { join, dirname } from 'path';
import { cosmiconfigSync } from 'cosmiconfig';
import * as loadJsonFile from 'load-json-file';

export default class Project {
    public config: Record<string, unknown>;
    public rootConfigPath: string;
    public rootPath: string;

    private safeLoad<T>(fn: (...args: unknown[]) => T): T {
        let result = {};
        try {
            result = fn();
        } catch (err) {
            if (err.name === 'JSONError') {
                throw new Error(err.name);
            }
        }
        return result as T; 
    }

    constructor(cwd: string) {
        const explorer = cosmiconfigSync('soona', {
            searchPlaces: ['sonna.json', 'package.json'],
            transform(obj) {
                return obj;
            }
        });

        const { config, filepath } = this.safeLoad(() => explorer.search(cwd));

        this.config = config;
        this.rootConfigPath = filepath;
        this.rootPath = dirname(filepath);

    }

    get manifest(): Record<string, unknown> {
        const manifestLocation = join(this.rootPath, "package.json");
        return this.safeLoad(() => loadJsonFile.sync(manifestLocation));
    }

}