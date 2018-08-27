import * as React from 'react';
import keys from '../constants/keys.json';

interface coordinates {
  x: number,
  y: number
}

interface size {
  width: number,
  height: number
}

interface keyStyle {
  radius?: number,
  font?: string,
  size?: number
}

interface key {
  text: string,
  width: number,
  height: number,
  radius: number,
  font: string,
  size: number
}

interface layout {
  rowLength: number,
  padding: number
}

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius.
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(
  ctx: CanvasRenderingContext2D, 
  x: number, y: number, 
  width: number, height: number, 
  radius: number = 0, fill: boolean = false, stroke: boolean = true
) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  // console.log([x + radius, y])
  ctx.lineTo((x + width) - radius, y);
  // console.log([(x + width) - radius, y])
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, (y + height) - radius);
  // console.log([x + width, (y + height) - radius])
  ctx.quadraticCurveTo(x + width, y + height, (x + width) - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  // console.log([x + radius, y + height])
  ctx.quadraticCurveTo(x, y + height, x, (y + height) - radius);
  ctx.lineTo(x, y + radius);
  // console.log([x, y + radius])
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

  ctx.restore();
}

function drawLetter(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, font: string = "serif", size: number = 48) {
  ctx.save()
  ctx.font = `${size}px ${font}`
  ctx.textAlign="center";
  ctx.textBaseline="middle"; 
  ctx.fillText(text, x, y)
  ctx.restore()
}

function drawKey(ctx: CanvasRenderingContext2D, text: string, position: coordinates, size: size, style: keyStyle) {
  const borderWidth = 1
  const width = size.width+2*borderWidth
  const height = size.height+2*borderWidth
  roundRect(ctx, position.x, position.y, width, height, style.radius);
  drawLetter(ctx, text, width/2+position.x, height/2+position.y+3, style.font, style.size)
}

function drawKeyboard(ctx: CanvasRenderingContext2D, keys: key[], startingPosition: coordinates, layout: layout) {
  let totalLength = layout.padding
  let rowNumber = 0
  let idx = -1
  keys.forEach((key) => {
    totalLength += key.width + layout.padding
    if (totalLength > layout.rowLength) {
      rowNumber += 1
      idx = 0
      totalLength = key.width + layout.padding
    } else {
      idx += 1
    }

    // console.log(rowNumber, totalLength)
    const origin = {
      x: startingPosition.x + idx * (layout.padding + key.width), 
      y: startingPosition.y + rowNumber * (key.height + layout.padding)
    }
    
    drawKey(ctx, key.text, origin, {width: key.width, height: key.height}, {radius: key.radius, size: key.size, font: key.font})
  })
}

export default class Keyboard extends React.Component {
  private keyboard: React.RefObject<HTMLCanvasElement> 
  constructor(props) {
    super(props);
    this.keyboard = React.createRef();
  }

  componentDidMount() {
    const ctx = this.keyboard.current.getContext('2d');
    this.keyboard.current.height = window.innerHeight/2
    this.keyboard.current.width = window.innerWidth 
    drawKeyboard(ctx, keys, {x:10,y:10}, {rowLength:(40+5)*10+5,padding:5})
  }

  render() { return (<canvas ref={this.keyboard} />); }
}

