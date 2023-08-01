export const apiData = async () => {
  try {
    const res = await fetch('https://coctailapi.onrender.com/');
    const data = await res.json();

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return data;
  } catch (err) {
    throw new Error('Something went wrong while fetching data');
  }
};
