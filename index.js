// Code your solution here

const heyJude = (verse) => {
  return verse.repeat(16)
}

const prohibitedLanguage = (str) => {
  let bannedWords = /brusselssprouts|candycorn/;
  return str.search(bannedWords)
  
}