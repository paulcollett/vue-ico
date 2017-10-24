export const icoWrapper = function(svg, size, color) {
  return '<svg fill="' + (c || 'currentcolor') + '" width="' + (s || 24) + '" height="' + (s || 24) + '" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${svg}</svg>';
}

export default function() {
  console.log('yo!');
}
