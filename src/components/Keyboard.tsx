import React, { RefObject } from 'react';

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
  ctx.lineTo((x + width) - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, (y + height) - radius);
  ctx.quadraticCurveTo(x + width, y + height, (x + width) - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, (y + height) - radius);
  ctx.lineTo(x, y + radius);
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

export default class Keyboard extends React.Component {
  private keyboard: RefObject<HTMLCanvasElement> 
  constructor(props) {
    super(props);
    this.keyboard = React.createRef();
  }

  componentDidMount() {
	  const ctx = this.keyboard.current.getContext('2d');
	  roundRect(ctx, 10, 10, 50, 50, 10);
  }

  render() { return (<canvas ref={this.keyboard} />); }
}

