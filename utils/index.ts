function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
const getQueryString = (params: any, query: boolean = true) => {
  let keys = Object.keys(params);

  let queryString = '';

  keys.forEach((key, i) => {
    if (i > 0) {
      if (query) {
        return (queryString += `&${key}=${params[key]}`);
      }
      return (queryString += `/${params[key]}`);
    }

    if (query) {
      queryString += `?${key}=${params[key]}`;
    } else {
      queryString += `/${params[key]}`;
    }
  });

  // log('events', `THE QUERY STRING: ${queryString}`);
  return queryString;
};
const getRequestBody = (params: any) => {
  if (isJsonString(params)) {
    return params;
  }
  return JSON.stringify(params);
};
export {getQueryString, getRequestBody, isJsonString};
