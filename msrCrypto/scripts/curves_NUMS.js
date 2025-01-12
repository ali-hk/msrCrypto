﻿
//*******************************************************************************
//
//    Copyright 2018 Microsoft
//    
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//    
//        http://www.apache.org/licenses/LICENSE-2.0
//    
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
//
//*******************************************************************************

/// #region JSCop/JsHint
/* global cryptoECC */
/// #endregion JSCop/JsHint

//
// "numsp256d1": Weierstrass curve a=-3, E: y^2 = x^3 - 3x + 152961, p = 2^256-189
//
var curve_numsp256d1 = {
    // Curve ID, 2 x targeted security level, order bitlength, prime bitlength
    info: ['numsp256d1', 256, 256, 256],
    // Curve Type 0 = Weierstrass, 1 Twisted Edwards
    type: 0,
    // Prime p = 2^256-189
    p: [0x43, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "a"
    a: [0x40, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "b"
    b: [0x81, 0x55, 0x02].reverse(),
    // Order of the group
    order: [0x25, 0xa8, 0x51, 0x47, 0x29, 0x20, 0xab, 0x20, 0x60, 0x5c, 0x26, 0xea, 0x75, 0x82, 0x3c, 0xe4, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff].reverse(),
    // x(generator)
    gx: [0xB1, 0xAC, 0x1A, 0xB2, 0x1E, 0xEE, 0x52, 0xBC, 0x3A, 0xC7, 0xD4, 0x03, 0x09, 0x9B, 0x57, 0x83, 0x09, 0xCB, 0x42, 0x4F, 0xA0, 0x95, 0x7A, 0x29, 0x61, 0xDB, 0xAA, 0x5A, 0xB6, 0xD6, 0x9E, 0xBC].reverse(),
    // y(generator)
    gy: [0x9F, 0xDE, 0x84, 0x21, 0xCB, 0xB9, 0xB5, 0x80, 0xBB, 0x0F, 0x31, 0x15, 0xD1, 0xC3, 0x55, 0xC9, 0x35, 0xE0, 0x04, 0x7E, 0xF7, 0x8B, 0x44, 0x73, 0xA6, 0xB6, 0x99, 0x33, 0xF1, 0xC0, 0x8F, 0xD0].reverse(),
    // co-factor
    cf: 1
};

//
// "numsp256t1": twisted Edwards curve a=1, E: x^2 + y^2 = 1 - 15342x^2y^2, p = 2^256-189
//
var curve_numsp256t1 = {
    // Curve ID, 2 x targeted security level, order bitlength, prime bitlength
    info: ['numsp256t1', 256, 255, 256],
    // Name
    name: "numsp256t1",
    // Curve Type 0 = Weierstrass, 1 Twisted Edwards
    type: 1,
    // Prime p = 2^256-189
    p: [0x43, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "a"
    a: [0x01],
    // Parameter "d"
    d: [0x55, 0xC3, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Order of the subgroup
    order: [0xF5, 0x4A, 0xDD, 0xEE, 0x90, 0xB1, 0x47, 0x1A, 0x9B, 0x43, 0x59, 0x2F, 0xA5, 0x5A, 0x95, 0x41, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40].reverse(),
    // x(generator)
    gx: [0xDA, 0x13, 0xED, 0x2E, 0x90, 0xC0, 0xDE, 0xA0, 0x86, 0x35, 0x08, 0xE3, 0x0E, 0x8A, 0x39, 0x0C, 0xD6, 0x9B, 0x20, 0x69, 0x5F, 0x3D, 0x1E, 0xCD, 0x7D, 0x23, 0xEA, 0x6A, 0xFB, 0x14, 0x75, 0x8A].reverse(),
    // y(generator)
    gy: [0xE6, 0x89, 0x8A, 0x79, 0xE7, 0x16, 0xA6, 0x2F, 0xD3, 0x6E, 0x85, 0x10, 0xD8, 0x61, 0x5F, 0x71, 0x10, 0x80, 0x4B, 0xA6, 0xD9, 0x65, 0x96, 0xCE, 0xC7, 0x25, 0xD9, 0xD9, 0x9F, 0x3E, 0xD5, 0x44].reverse(),
    // co-factor
    cf: 4
};

//
// "numsp384d1": Weierstrass curve a=-3, E: y^2 = x^3 - 3x - 34568, p = 2^384-317
//
var curve_numsp384d1 = {
    // Curve ID, 2 x targeted security level, order bitlength, prime bitlength
    info: ['numsp384d1', 384, 384, 384],
    // Name
    name: "numsp384d1",
    // Curve Type 0 = Weierstrass, 1 Twisted Edwards
    type: 0,
    // Prime p = 2^384-317
    p: [0xC3, 0xFE, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "a"
    a: [0xC0, 0xFE, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "b"
    b: [0xBB, 0x77, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Order of the group
    order: [0xb9, 0x61, 0x0e, 0x7b, 0xf6, 0x81, 0x4d, 0x60, 0x7a, 0xe2, 0x37, 0x4c, 0x3d, 0x9d, 0xda, 0xbe, 0x81, 0x68, 0x5d, 0xeb, 0x1e, 0xaf, 0x1e, 0xd6, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff].reverse(),
    // x(generator)
    gx: [0x2A, 0x15, 0x98, 0x20, 0x04, 0xBA, 0x9C, 0xEB, 0x7B, 0xC4, 0x61, 0x0F, 0x10, 0xED, 0x2E, 0x52, 0x42, 0xC7, 0x6C, 0x2A, 0x1B, 0x29, 0xBD, 0xF3, 0xF4, 0xF9, 0x81, 0xFB, 0xCD, 0xC1, 0x25, 0x02,
          0xA6, 0xF1, 0x05, 0x41, 0x22, 0xCA, 0x80, 0x48, 0x1C, 0x18, 0x6F, 0xB1, 0xF0, 0x56, 0x79, 0x75].reverse(),
    // y(generator)
    gy: [0x16, 0x07, 0x18, 0x66, 0xEC, 0xB8, 0x74, 0x5C, 0x26, 0xAD, 0xF4, 0xBF, 0xDB, 0xB4, 0xD6, 0xBC, 0x7E, 0x83, 0x1A, 0x12, 0x7D, 0x83, 0x20, 0xB9, 0x9C, 0x73, 0x7F, 0xF8, 0x77, 0x69, 0x04, 0xB0,
        0x7E, 0xCF, 0x84, 0x05, 0x30, 0x3D, 0xE3, 0xD7, 0x38, 0x8E, 0x9B, 0xE1, 0x68, 0xE3, 0xDE, 0xAC].reverse(),
    // co-factor
    cf: 1
};

//
// "numsp384t1": twisted Edwards curve a=1, E: x^2 + y^2 = 1 - 11556x^2y^2, p = 2^384-317
//
var curve_numsp384t1 = {
    // Curve ID, 2 x targeted security level, order bitlength, prime bitlength
    info: ['numsp384t1', 384, 382, 384],
    // Name
    name: "numsp384t1",
    // Curve Type 0 = Weierstrass, 1 Twisted Edwards
    type: 1,
    // Prime p = 2^2^384-317
    p: [ 0xC3, 0xFE, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
          0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF ].reverse(),
    // Parameter "a"
    a: [ 0x01 ],
    // Parameter "d"
    d: [ 0x9F, 0xD1, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 
          0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF ].reverse(),
    // Order of the subgroup
    order: [ 0x7D, 0x89, 0xA3, 0xE6, 0xC4, 0xDC, 0xB9, 0x20, 0x79, 0xC8, 0x35, 0xAB, 0x5A, 0x55, 0xE4, 0x61, 0xCF, 0xE1, 0x6B, 0xB4, 0x1C, 0x1A, 0x47, 0xE2, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x3F ].reverse(),
    // x(generator)
    gx: [ 0xDE, 0x6B, 0x20, 0x6C, 0xE4, 0x40, 0xD5, 0x50, 0x13, 0x94, 0x45, 0x65, 0xB1, 0x92, 0xF2, 0x6F, 0x40, 0x63, 0x31, 0xF3, 0xA8, 0xFF, 0x63, 0x57, 0x00, 0x4C, 0xBE, 0xE5, 0x46, 0xF4, 0x0B, 0xB3, 
          0xB5, 0x5D, 0xE5, 0x9A, 0x12, 0xA2, 0xB6, 0xC0, 0x6C, 0x26, 0xA9, 0x45, 0xFB, 0x11, 0xB1, 0x61 ].reverse(),
    // y(generator)
    gy: [ 0x92, 0x93, 0x72, 0xF0, 0xE1, 0x03, 0x8D, 0x9D, 0xDC, 0x48, 0xEC, 0x46, 0xF9, 0xB0, 0x72, 0x00, 0x4B, 0x96, 0x45, 0xF6, 0xF7, 0x98, 0x0F, 0x83, 0x56, 0x5F, 0x42, 0xF1, 0x74, 0x82, 0xAD, 0x16, 
        0xD7, 0x0D, 0xB1, 0x23, 0xA4, 0xB1, 0x38, 0x87, 0xB0, 0xEE, 0xA6, 0xB9, 0x67, 0x3E, 0x98, 0x82 ].reverse(),
    // co-factor
    cf: 4
};

//
// "numsp512d1": Weierstrass curve a=-3, E: y^2 = x^3 - 3x + 121243, p = 2^512-569
//
var curve_numsp512d1 = {
    // Curve ID, 2 x targeted security level, order bitlength, prime bitlength
    info: ['numsp512d1', 512, 512, 512],
    // Name
    name: "numsp512d1",
    // Curve Type 0 = Weierstrass, 1 Twisted Edwards
    type: 0,
    // Prime p = 2^512-569
    p: [0xC7, 0xFD, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "a"
    a: [0xC4, 0xFD, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "b"
    b: [0x9B, 0xD9, 0x01].reverse(),
    // Order of the group
    order: [0x5d, 0x55, 0x33, 0x04, 0x39, 0x3f, 0x15, 0xce, 0x43, 0xd2, 0x7c, 0x60, 0x36, 0x8b, 0x56, 0x3b, 0xc6, 0xbd, 0xd0, 0x97, 0xed, 0x58, 0xc2, 0x4f, 0x1b, 0x83, 0xe7, 0x94, 0xfb, 0xa4, 0x3c, 0x5b,
        0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff].reverse(),
    // x(generator)
    gx: [0x57, 0xAE, 0xAB, 0x8C, 0x95, 0x87, 0x82, 0xDC, 0xE2, 0x5D, 0x6F, 0x7D, 0x13, 0x60, 0x5D, 0x1D, 0x83, 0x15, 0x56, 0x25, 0x86, 0x42, 0x79, 0x93, 0x9E, 0x35, 0x6B, 0x07, 0x51, 0xA1, 0x21, 0x50,
        0xF9, 0xD9, 0x06, 0x53, 0xC2, 0xE0, 0x06, 0x45, 0x85, 0xF6, 0x01, 0xB5, 0x3B, 0xD8, 0xCA, 0x98, 0x52, 0x3B, 0x3D, 0xA0, 0x02, 0x70, 0x2B, 0xDA, 0x93, 0x0A, 0x1D, 0x14, 0x47, 0x34, 0xC0, 0x3A].reverse(),
    // y(generator)
    gy: [0xA6, 0x27, 0x35, 0x38, 0x60, 0x87, 0xA0, 0x23, 0xE9, 0x0F, 0xFD, 0x4C, 0x1E, 0x5C, 0x2B, 0xCF, 0x02, 0x56, 0x5A, 0xB2, 0x40, 0xA8, 0x21, 0xC1, 0xE9, 0xED, 0x0E, 0x8B, 0xDA, 0x15, 0x84, 0xA2,
        0x14, 0x4F, 0xD1, 0x7B, 0x0C, 0x26, 0x4B, 0x8F, 0x8C, 0xBB, 0xBC, 0xAB, 0xDE, 0xDB, 0x97, 0x4B, 0x00, 0xB1, 0xEB, 0x63, 0xDC, 0xEE, 0x0E, 0xCE, 0xB3, 0x56, 0xAD, 0x29, 0xCA, 0x54, 0x3A, 0x94].reverse(),
    // co-factor
    cf: 4
}

//
// "numsp512t1": twisted Edwards curve a=1, E: x^2 + y^2 = 1 - 78296x^2y^2, p = 2^512-569
//
var curve_numsp512t1 = {
    // Curve ID, , 2 x targeted security level, order bitlength, prime bitlength
    info: ['numsp512t1', 512, 510, 512],
    // Name
    name: "numsp512t1",
    // Curve Type 0 = Weierstrass, 1 Twisted Edwards
    type: 1,
    // Prime p = 2^512-569
    p: [0xC7, 0xFD, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Parameter "a"
    a: [0x01].reverse(),
    // Parameter "d"
    d: [0xEF, 0xCB, 0xFE, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF].reverse(),
    // Order of the subgroup
    order: [0x6D, 0xD4, 0xEE, 0x1B, 0xF5, 0x8C, 0x46, 0x67, 0xFF, 0xEC, 0xEF, 0x6D, 0x78, 0x05, 0x46, 0x2A, 0xF5, 0x86, 0xB6, 0x70, 0xC9, 0xD8, 0x3F, 0x9E, 0xBA, 0x91, 0xCF, 0x2F, 0x6D, 0x63, 0xF0, 0xB4,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x3F].reverse(),
    // x(generator)
    gx: [0xFE, 0x57, 0xEC, 0x99, 0x29, 0xAB, 0xB9, 0xC5, 0x15, 0xF0, 0xC4, 0x7C, 0x42, 0x25, 0xE5, 0x0F, 0xAD, 0x04, 0x89, 0x56, 0x92, 0xC9, 0xBD, 0x78, 0x0F, 0x73, 0x46, 0xEE, 0x4E, 0xC1, 0x21, 0x46,
        0x47, 0x81, 0x3B, 0x27, 0xBE, 0x7E, 0xA1, 0x27, 0x82, 0xA3, 0xC4, 0x4D, 0x9F, 0xE7, 0xD1, 0x2F, 0x33, 0xC5, 0xD3, 0x88, 0x78, 0xCB, 0x18, 0x7A, 0x9C, 0xB6, 0x8D, 0x12, 0x6D, 0x31, 0x8E, 0xDF].reverse(),
    // y(generator)
    gy: [0xE1, 0xF5, 0xE2, 0xC1, 0xC0, 0xDE, 0x6D, 0x32, 0x1F, 0xD0, 0xF1, 0x9B, 0x8A, 0xD3, 0x66, 0x02, 0xFD, 0xC1, 0xEC, 0x2A, 0x86, 0x06, 0x1A, 0x60, 0x62, 0x35, 0x96, 0xE9, 0xF2, 0x53, 0xCA, 0x20,
        0x41, 0x83, 0x9E, 0x90, 0x95, 0x6B, 0x2B, 0xA9, 0x22, 0x9D, 0x25, 0xD8, 0x26, 0xF7, 0x76, 0xE4, 0x6E, 0x25, 0x2A, 0xA8, 0x77, 0xF5, 0xB0, 0x98, 0x71, 0xCA, 0x49, 0x9D, 0xF3, 0xBF, 0x09, 0x6D].reverse(),
    // co-factor
    cf: 4
}

if (typeof cryptoECC !== 'undefined') {
    // Add curves to ECC object - use uppercase names
    cryptoECC.curves["NUMSP256D1"] = curve_numsp256d1;
    cryptoECC.curves["NUMSP384D1"] = curve_numsp384d1;
    cryptoECC.curves["NUMSP512D1"] = curve_numsp512t1;
    cryptoECC.curves["NUMSP256T1"] = curve_numsp256t1;
    cryptoECC.curves["NUMSP384T1"] = curve_numsp384t1;
    cryptoECC.curves["NUMSP512T1"] = curve_numsp512t1;
}