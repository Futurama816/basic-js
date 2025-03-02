const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
      this.isDirect = isDirect; // True for direct, false for reverse
  }

  // Helper function to clean and repeat the key
  getKeyRepeated(message, key) {
      let keyRepeat = key.repeat(Math.ceil(message.length / key.length));
      return keyRepeat.slice(0, message.length);
  }

  // Encrypt function
  encrypt(message, key) {
      if (!message || !key) throw new Error('Invalid arguments!');
      message = message.toUpperCase();
      key = key.toUpperCase();

      let keyRepeated = this.getKeyRepeated(message, key);
      let encryptedMessage = '';

      for (let i = 0; i < message.length; i++) {
          let charCode = message.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
              // Encrypt alphabetic characters
              let shifted = (charCode - 65 + keyRepeated.charCodeAt(i) - 65) % 26 + 65;
              encryptedMessage += String.fromCharCode(shifted);
          } else {
              // Non-alphabetic characters stay the same
              encryptedMessage += message[i];
          }
      }

      return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  // Decrypt function
  decrypt(message, key) {
      if (!message || !key) throw new Error('Invalid arguments!');
      message = message.toUpperCase();
      key = key.toUpperCase();

      let keyRepeated = this.getKeyRepeated(message, key);
      let decryptedMessage = '';

      for (let i = 0; i < message.length; i++) {
          let charCode = message.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
              // Decrypt alphabetic characters
              let shifted = (charCode - 65 - (keyRepeated.charCodeAt(i) - 65) + 26) % 26 + 65;
              decryptedMessage += String.fromCharCode(shifted);
          } else {
              // Non-alphabetic characters stay the same
              decryptedMessage += message[i];
          }
        }

        return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
    }
}


module.exports = {
  VigenereCipheringMachine
};
