'use strict';

let colors = ['FireBrick', 'DarkMagenta', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkGreen', 'MediumBlue',
'GhostWhite', 'HotPink', 'Black', 'Gold', 'DarkOrange', 'SaddleBrown', 'Lime', 'SlateGray', 'Tan',
'Navy', 'Teal', 'Aqua', 'LightSeaGreen', 'Red']

document.addEventListener('DOMContentLoaded', function(){
  const CANVAS = document.getElementById('canvas')
  const PALETTECONTAINER = document.getElementById('palette-primary');
  let colorIndicator = document.getElementById('colorIndicator');
  let paletteColor;

  for(let i = 0; i < 2006; i++){
    let canvasDiv = document.createElement('div');
    canvasDiv.classList.add('sub-canvas');
    CANVAS.append(canvasDiv);
  }

  for(var j = 0; j < colors.length; j++){
    let paletteDiv = document.createElement('div');
    paletteDiv.classList.add('sub-palette');
    paletteDiv.id = colors[j];
    PALETTECONTAINER.append(paletteDiv);
  }

  function onPaletteClick(e){
    for(let k = 0; k < colors.length; k++){
      if(e.target.id === colors[k]){
        paletteColor = colors[k];
        colorIndicator.style.backgroundColor = paletteColor;
      }
    }
    return paletteColor;
  }

  function onCanvasClick(e){
    if(paletteColor !== undefined){
      e.target.style.backgroundColor = paletteColor;
      e.target.style.borderColor = paletteColor;

    } else {
      e.target.style.backgroundColor = 'red';
      e.target.style.borderColor = 'red';
    }
  };

  PALETTECONTAINER.addEventListener('click', onPaletteClick);
  CANVAS.addEventListener('click', onCanvasClick);
});
