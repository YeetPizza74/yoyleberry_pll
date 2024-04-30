var selCases = [];

var algsGroups = {
    "2S" : [1, 14, 18],
    "3C" : [4, 6, 7, 5, 12],
    "2S 2S" : [9, 20, 21, 23],
    "2S 3C" : [13, 19, 22],
    "4C" : [2, 3, 11, 17],
    "5C" : [8, 10, 15, 16],
};

var algsInfo = {
    1: {
        "name": "D-E-D",
        "a": "R U D' R U2 R U2 R U R U2 R D R U' R",
        "a2": "",
    },
    2: {
        "name": "F-B-C-D-F",
        "a": "R D R U' R U D' R U' R D R",
        "a2": "",
    },
    3: {
        "name": "F-E-C-B-F",
        "a": "R U' D' R U' R U D R D' R U D R",
        "a2": "",
    },
    4: {
        "name": "F-B-D-F",
        "a": "R D' R U3 R D R U D' R U2' R U2 R",
        "a2": "",
    },
    5: {
        "name": "A-E-B-A",
        "a": "(U2) R U' R U' R D2 R U R U D2 R U R D R",
        "a2": "",
    },
    6: {
        "name": "F-E-B-F",
        "a": "R U R U R U2 D R U R U2 R U' R D' R",
        "a2": "",
    },
    7: {
        "name": "E-C-D-E",
        "a": "R U D' R U' R D R D' R D R",
        "a2": "",
    },
    8: {
        "name": "F-C-D-B-E-F",
        "a": "(U) R U D' R U R U2 R U R U2 R U2 R D R",
        "a2": "",
    },
    9: {
        "name": "F-C-F B-D-B",
        "a": "R U R U2 R D R U R D2 R U R U' D2 R",
        "a2": "",
    },
    10: {
        "name": "F-E-B-D-C-F",
        "a": "(U3) R U' R U2' R D2' R U' R D2' R U' R U D' R",
        "a2": "",
    },
    11: {
        "name": "E-C-B-D-E",
        "a": "(U2) R D R U R D2 R U R D2 R",
        "a2": "",
    },
    12: {
        "name": "E-B-D-E",
        "a": "(U) R U2 D' R U' R D R D' R U' D R",
        "a2": "",
    },
    13: {
        "name": "F-C-F D-B-E-D",
        "a": "(U2') R U D' R D' R U R U' R U' D2 R",
        "a2": "",
    },
    14: {
        "name": "E-B-E",
        "a": "R U' D2 R U D2' R D' R U D2' R U' D2 R",
        "a2": "",
    },
    15: {
        "name": "F-E-B-C-D-F",
        "a": "(U2') R U2 R U R U2 R U R U R",
        "a2": "",
    },
    16: {
        "name": "F-D-B-E-C-F",
        "a": "(U2) R D' R D R D' R U R U' D R",
        "a2": "",
    },
    17: {
        "name": "B-E-C-D-B",
        "a": "(U3) R D R U R D' R U2 D R U2 R U2' R",
        "a2": "",
    },
    18: {
        "name": "C-E-C",
        "a": "R U2 R U R U2 D R U R U R U' R D' R",
        "a2": "",
    },
    19: {
        "name": "F-E-B-F C-D-C",
        "a": "R U R U' R U' R U' R U R U2 R U' R",
        "a2": "",
    },
    20: {
        "name": "E-C-E B-D-B",
        "a": "(U3) R U2 R D2 R U D' R D2 R U2 R",
        "a2": "",
    },
    21: {
        "name": "E-D-E A-C-A",
        "a": "(U) R D' R U2 R D R U' R D' R U' R D R",
        "a2": "",
    },
    22: {
        "name": "F-D-E-F A-C-A",
        "a": "(U2) R U D2 R D2 R U D R U2 R U2' D' R",
        "a2": "",
    },
    23: {
        "name": "A-E-A B-D-B",
        "a": "(U) R U' D' R U' D R U' D' R U2 R U D R",
        "a2": "",
    },
};
