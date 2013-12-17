jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "currency-html-pre": function (a) {
        /* Remove html tags */
        var x = String(a).replace(/<[\s\S]*?>/g, "");

        /* Remove any commas (assumes that if present all strings will have a fixed number of d.p) */
        x = (a === "-" || a === "--" || a === '' || a.toLowerCase().replace('/', '') === 'na') ? -1 : a.replace(/,/g, "");

        /* Remove the currency sign */
        if (typeof x === "string" && isNaN(x.substr(0, 1), 10)) {
            x = x.substring(1);
        }

        /* Parse and return */
        return parseFloat(x);
    },

    "currency-html-asc": function (a, b) {
        return a - b;
    },

    "currency-html-desc": function (a, b) {
        return b - a;
    }
});
