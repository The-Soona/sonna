import { SoonaArgs } from './cli';
import Project from './project';

export default class Command {
    project: Project;
    
    constructor(argv: SoonaArgs) {
        this.project = new Project(argv.cwd);
    }

    then(resolve, reject) {
        let chain = Promise.resolve();

        return chain
            .then(() => this.runCommand())
            .then(
                result => {
                    resolve(result);
                }, 
                error => {
                    reject(error);
                },
        );
    }

    async runCommand() {
        return Promise.resolve()
            .then(() => this.initialize())
            .then(processed => {
                if (!processed) {
                    return this.execute();
                }
            })
    }

    initialize(): Boolean {
        throw new Error('initialize() needs to be implemented.');
    }

    execute() {
        throw new Error('execute() needs to be implemented.');
    }
}
