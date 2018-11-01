var styles;
(function (styles) {
    function text(h1, val) {
        h1.textContent = val;
        h1.style.textAlign = "center";
    }
    styles.text = text;
    function style(div, color) {
        div.style.border = "Red solid 1px";
        div.style.margin = "2px";
        div.style.cssFloat = "left";
        //(this.div as HTMLElement).style.verticalAlign = "top";
        div.style.color = color;
    }
    styles.style = style;
    function initialize(div, sqsz) {
        div.style.width = sqsz;
        div.style.height = sqsz;
        div.style.lineHeight = "50px";
    }
    styles.initialize = initialize;
})(styles || (styles = {}));
