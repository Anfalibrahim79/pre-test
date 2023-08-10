function anagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

function groupAnagrams(words) {
    const anagramGroups = [];

    while (words.length > 0) {
        const currentWord = words.shift();
        const group = [currentWord];

        for (let i = 0; i < words.length;) {
            if (anagrams(currentWord, words[i])) {
                group.push(words.splice(i, 1)[0]);
            } else {
                i++;
            }
        }

        anagramGroups.push(group);
    }

    return anagramGroups;
}

const inputArray = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = groupAnagrams(inputArray);

console.log(result);

//JAWABAN UNTUK SOAL QUERY
{/*
SELECT 
t1.id,
    t1.name,
    t2.name AS parent_name
FROM 
    nama_siswa t1
LEFT JOIN 
    nama_siswa t2 ON t1.parent_id = t2.id;
*/}