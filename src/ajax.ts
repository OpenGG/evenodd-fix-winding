export const post = async (url: string, body: string) => {
  const res = await fetch(url, {
    method: "post",
    body
  });

  return res.text();
};

export const get = async (url: string) => {
  const res = await fetch(url);

  return res.text();
};
