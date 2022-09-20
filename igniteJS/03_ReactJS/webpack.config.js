/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {

        // Lesson 19
        // "Lesson_19/CW/build/bundle_2": "./Lesson_19/CW/jsx/2.jsx",
        // "Lesson_19/CW/build/bundle_3": "./Lesson_19/CW/jsx/3.jsx",
        // "Lesson_19/HW/build/bundle_1": "./Lesson_19/HW/jsx/1.jsx",
        // "Lesson_19/HW/build/bundle_2": "./Lesson_19/HW/jsx/2.jsx",
        // "Lesson_19/HW/build/bundle_3": "./Lesson_19/HW/jsx/3.jsx",

        // Lesson 20
        // "Lesson_20/CW/build/bundle_1": "./Lesson_20/CW/jsx/1.jsx",
        // "Lesson_20/CW/build/bundle_2": "./Lesson_20/CW/jsx/2.jsx",
        // "Lesson_20/CW/build/bundle_3": "./Lesson_20/CW/jsx/3.jsx",
        // "Lesson_20/HW/build/bundle_1": "./Lesson_20/HW/jsx/1.jsx",
        // "Lesson_20/HW/build/bundle_2": "./Lesson_20/HW/jsx/2.jsx",
        // "Lesson_20/HW/build/bundle_3": "./Lesson_20/HW/jsx/3.jsx",

        // Lesson 21
        // "Lesson_21/CW/build/bundle_1": "./Lesson_21/CW/jsx/1.jsx",
        // "Lesson_21/CW/build/bundle_2": "./Lesson_21/CW/jsx/2.jsx",
        // "Lesson_21/CW/build/bundle_3": "./Lesson_21/CW/jsx/3.jsx",
        // "Lesson_21/HW/build/bundle_1": "./Lesson_21/HW/jsx/1.jsx",
        // "Lesson_21/HW/build/bundle_2": "./Lesson_21/HW/jsx/2.jsx",
        // "Lesson_21/HW/build/bundle_3": "./Lesson_21/HW/jsx/3.jsx",

        // Lesson 22
        "Lesson_22/CW/build/bundle_1": "./Lesson_22/CW/jsx/1.js",
        "Lesson_22/CW/build/bundle_2": "./Lesson_22/CW/jsx/2.js",
        "Lesson_22/CW/build/bundle_3": "./Lesson_22/CW/jsx/3.jsx",
        "Lesson_22/HW/build/bundle_1": "./Lesson_22/HW/jsx/1.js",
        "Lesson_22/HW/build/bundle_2": "./Lesson_22/HW/jsx/2.js",
        "Lesson_22/HW/build/bundle_3": "./Lesson_22/HW/jsx/3.jsx"
    } ,
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                       presets: ['react', "es2015"]
                }
            }
        ]
    }
};