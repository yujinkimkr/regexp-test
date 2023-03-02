const str = `
    010-1234-5678
    thesample@gmail.com
    https://omdbapi.com/?apikey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog.
    abbcccdddd
`;

// const regexp = new RegExp('the', 'gi');
// const regexp = /^0/gi;

// console.log(str.match(/\bf\w{1,}\b/g));
// 두 글자 이상 세 글자 이하인 것들만 출력

// console.log(str.match(/\s/g));
// console.log(str.replace(/\s/g, '*'));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));

// console.log(regexp.test('s   tr'));
// console.log(str.replace('fox','tiger'));
// console.log(str.match(regexp));

