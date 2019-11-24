//Checks if Roman Number is valid
let testRoman = roman => {
    let _regexp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})((\(m\)){0,3})(\(c\)\(m\)|\(c\)\(d\)|(\(d\))?(\(c\)){0,3})(\(x\)\(c\)|\(x\)\(l\)|(\(l\))?(\(x\)){0,3})(m\(x\)|m\(v\)|(\(v\))?)(m{0,3})(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/;
		return _regexp.test(roman);
}
export default testRoman;

///Written by Karan Nandkumar