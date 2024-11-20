function getColor(color: string): string {
  color = color.toLowerCase();
  color = 'text-' + color;
  return color;
}

function getToastColor(color: string): string {
  color = color.toLowerCase();
  color = 'bg-' + color + ' text-light';
  return color;
}

export { getColor, getToastColor };
