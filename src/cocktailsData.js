export const apiData = async () => {
  try {
    const res = await fetch("https://coctailapi.onrender.com/");
    const data = await res.json();

    if (!res.ok) return;

    return data;
  } catch (err) {
    throw new Error("something bad happen", err);
  }
};
