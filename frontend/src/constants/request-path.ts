const getBaseRequestPath = (): string => {
  const mode = process.env.REACT_APP_MODE;
  switch (mode) {
    case "prod":
      return "http://www.hk-41.work:82/api/";
    case "dev":
    default:
      return "http://localhost:82/api/";
  }
};

export const BASE_REQUEST_PATH = getBaseRequestPath();
