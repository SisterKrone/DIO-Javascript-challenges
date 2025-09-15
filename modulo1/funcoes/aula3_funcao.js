function sayMyName(name) {
    return `My name is ${name} and i'm`;
}

function isAdult(idade) {
    if (idade < 18 && idade > 0) {
        return sayMyName('Brandon')+` not adult yet`;
    }
    else if (idade >= 18) {
        return sayMyName('Jhon Snow')+` adult`;
    }
    else {
        return 'Invalid age.'
    }
}

(function main() {
    console.log(isAdult(14));
})();

