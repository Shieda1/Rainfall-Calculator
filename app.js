// https://www.omnicalculator.com/other/rainfall-volume

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const watervolumeRadio = document.getElementById('watervolumeRadio');
const catchmentareaRadio = document.getElementById('catchmentareaRadio');
const rainfalldepthRadio = document.getElementById('rainfalldepthRadio');

let watervolume;
let catchmentarea = v1;
let rainfalldepth = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

watervolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Catchment area';
  variable2.textContent = 'Rainfall depth';
  catchmentarea = v1;
  rainfalldepth = v2;
  result.textContent = '';
});

catchmentareaRadio.addEventListener('click', function() {
  variable1.textContent = 'Water volume';
  variable2.textContent = 'Rainfall depth';
  watervolume = v1;
  rainfalldepth = v2;
  result.textContent = '';
});

rainfalldepthRadio.addEventListener('click', function() {
  variable1.textContent = 'Water volume';
  variable2.textContent = 'Catchment area';
  watervolume = v1;
  catchmentarea = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(watervolumeRadio.checked)
    result.textContent = `Water volume = ${computewatervolume().toFixed(2)}`;

  else if(catchmentareaRadio.checked)
    result.textContent = `Catchment area = ${computecatchmentarea().toFixed(2)}`;

  else if(rainfalldepthRadio.checked)
    result.textContent = `Rainfall depth = ${computerainfalldepth().toFixed(2)}`;
})

// calculation

function computewatervolume() {
  return Number(catchmentarea.value) * Number(rainfalldepth.value);
}

function computecatchmentarea() {
  return Number(watervolume.value) / Number(rainfalldepth.value);
}

function computerainfalldepth() {
  return Number(watervolume.value) / Number(catchmentarea.value);
}