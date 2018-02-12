const config = (window as any).spsAppConfig;

if (!config) {
    console.log('ERROR.... NO CONFIG PRESENT!!!');
}

class AppConfig {

    get isAvailable() {
        return config != null;
    }

    getRequired(name: string): any | undefined {
        const answer = config[name];
        if (answer === undefined) {
            throw new Error('Unable to find required config property "' + name + '"');
        }
        return answer;
    }

    getWithDefault(name: string, defaultValue: any): any {
        const answer = config[name];
        if (answer === undefined ) {
            return defaultValue;
        }
        return answer;
    }

}

const appConfig = new AppConfig();

export default appConfig;
