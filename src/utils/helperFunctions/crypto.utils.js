import CryptoJS from "crypto-js";

// Encryption function
const dynamicValue = "12/12/2021"; // Could use a date or something dynamic

export function encryptId(pureText) {
  const privateKey = `${dynamicValue} secret key is - fred boakye made it`;
  const ciphertext = encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(pureText), privateKey).toString()
  );
  return ciphertext;
}

export function decryptId(encryptedText) {
  const privateKey = `${dynamicValue} secret key is - fred boakye made it`;
  const bytes = CryptoJS.AES.decrypt(
    decodeURIComponent(encryptedText),
    privateKey
  );
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
}
