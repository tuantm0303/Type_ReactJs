var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var showUser = function (user) {
    var tuantm = {
        id: 1,
        name: 'tuantm',
        birthday: '03032001'
    };
    return __assign(__assign({}, tuantm), { id: 2 });
};
console.log(showUser);
//Generic
var showVarible = function (varilble) {
    return varilble;
};
showVarible('tuantm');
var showStudent = function (student) {
    return student;
};
showStudent('tuantmph13096');
showStudent(2);
showStudent(true);
showStudent({
    id: 1,
    name: 'tuantm'
});
var showTeacher = function (name, age, address) {
    return {
        name: name,
        age: age,
        address: address
    };
};
showTeacher('tuan', 20, '');
