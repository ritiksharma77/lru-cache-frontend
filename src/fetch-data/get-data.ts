export const getData = async (key: any) => {
    try {
        const response = await fetch(`/get?key=${key}`);
        if (!response.ok) {
            throw new Error("Key not found");
        }
        const data = await response.json();
        alert(`Value: ${data.value}`);
    } catch (error: any) {
        alert(`Failed to get the ${key}`);
    }
  };