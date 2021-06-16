export default class CustomEventNamesFactory {

    static createNames() {
        const names = {
            set: (key, value) => {
                Object.keys(names).forEach(existingKey => {
                    if (existingKey === key) {
                        throw `Duplicate key: ${key}`;
                    }
                });
                Object.values(names).forEach(existingValue => {
                    if (existingValue === value) {
                        throw `Duplicate value: ${value}`;
                    }
                });
                names[key] = value;
                return names;
            },
            get: (key) => {
                return names[key];               
            }
        };
        return names;
    }
}