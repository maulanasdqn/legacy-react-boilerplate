export type ErrorWithMessage = {
  message: string;
};

export type ErrorComplete = {
  response: {
    data: {
      message: Array<string> | string;
    };
  };
};
