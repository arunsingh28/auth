const mode = {
    prod: {
        API_URL: "prodction domain url here",
    },
    dev: {
        API_URL: "http://localhost:5000",
    },
};

export const config =
    process.env.NODE_ENV === "development" ? mode.dev : mode.prod;