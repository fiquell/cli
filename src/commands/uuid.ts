export const uuid = () => {
  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
      const random = (Math.random() * 16) | 0;
      const replacement = char === "x" ? random : (random & 0x3) | 0x8;
      return replacement.toString(16);
    });
  };

  console.log(generateUUID());
};
