function ispandrame(str) {
    if (str.length === 0) {
        return true;
    } else {
        return pandHelper(str, 0, str.length - 1);
    }
}

function pandHelper(str, s, e) {
    if (s === e) {
        return true;
    }
    if (str[s] !== str[e]) {
        return false;
    } else {
        return pandHelper(str, ++s, --e);
    }
}




console.log("is abcdba pandrame ", ispandrame("abcdba"));
