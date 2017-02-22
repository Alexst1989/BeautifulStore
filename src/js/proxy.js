var baseUrl = {
    host: "localhost",
    port: "8090",
    httpsPort: "8443",
    appPath: "store",
    postfix: ""
};

export function getBaseHttpUrl() {
    var result = "http://" + baseUrl.host + ":" + baseUrl.port + "/" + baseUrl.appPath + "/" + baseUrl.postfix;
    console.log("base url = ", result);
    return result;
}

export function getBaseHttpsUrl() {
    var result = "https://" + baseUrl.host + ":" + baseUrl.httpsPort + "/" + baseUrl.appPath + "/" + baseUrl.postfix;
    console.log("base url = ", result);
    return result;
}
