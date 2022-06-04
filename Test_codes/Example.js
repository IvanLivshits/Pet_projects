function longestConsec(strarr, k) {

    if (strarr.length == 0 || k <= 0 || k > strarr.length) {
        return '""'
    }
    else if (k == 1) {

        let longest_string = '';

        for (let i = 0; i <strarr.length; i++) {
            if (strarr[i].length > longest_string.length) {
                longest_string = strarr[i];
            }
        }
        return longest_string;

    }
    else if (k > 1) {

        let longest_string = '';

        for (let i = 0; i < strarr.length - (k - 1); i++) {
            
            let j = 0;
            let result_string = '';
            let h = i;

            while (j < k) {
                result_string += strarr[h];
                // console.log(`return string = ${result_string}, j = ${j}, len = ${result_string.length}`);
                j += 1;
                h += 1;
            }

            if (longest_string.length < result_string.length) {
                longest_string = result_string;
            }
        }
        return longest_string;
    }
}

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))