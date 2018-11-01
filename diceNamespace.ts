namespace styles {
  export function text(h1: Element, val: string): void {
    (h1 as HTMLElement).textContent = val;
    (h1 as HTMLElement).style.textAlign = "center";
  }

  export function style(div: Element, color:string): void {
    (div as HTMLElement).style.border = "Red solid 1px";
    (div as HTMLElement).style.margin = "2px";
    (div as HTMLElement).style.cssFloat = "left";
    //(this.div as HTMLElement).style.verticalAlign = "top";
    (div as HTMLElement).style.color = color;
  }

  export function initialize(div: Element, sqsz: string): void {
    (div as HTMLElement).style.width = sqsz;
    (div as HTMLElement).style.height = sqsz;
    (div as HTMLElement).style.lineHeight = "50px";
  }
}