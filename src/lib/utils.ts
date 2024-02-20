
interface FlatObject {
    [qp: string]: string | number | boolean;
}

export const buildStringFromObject = (joinBy: string) => (obj: FlatObject): string => {
    const keys = Object.keys(obj);

    if (keys.length) {
        const params = keys.map((key) => {
            const value = obj[key];
            return `${key}=${value}`;
        });

        return params.join(joinBy);
    }

    return "";
};

export const createQueryParameterPassthrough = buildStringFromObject("&");

export const createHeaderPassthrough = buildStringFromObject(";");