/// <reference types="dom" />
const body = document.querySelector('body')
const longDOM = document.querySelector('#long')
const shortDOM = document.querySelector('#short')

export class Long {
  constructor(element) {
    this.element = element
    this.angle = 0
    this.update = (now) => {
      this.angle = (now%HOUR)/HOUR*360
      this.element.style.transform = `rotate(${this.angle}deg)`
    }
  }
}

export class Short {
  constructor(element) {
    this.element = element
    this.angle = 0
    this.update = (now) => {
      this.angle = (now%HALFDAYHOUR)/HALFDAYHOUR*360
      this.element.style.transform = `rotate(${this.angle}deg)`
    }
  }
}

const long = new Long(longDOM)
const short = new Short(shortDOM)
const DAYHOUR = 86400000
const HALFDAYHOUR = DAYHOUR/2
const HOUR = 3600000
globalThis.setInterval(() => {
  const now = (Date.now()+9*HOUR)%DAYHOUR
  long.update(now)
  short.update(now)
}, 100);


body.onclick = () => {
  body.requestFullscreen();
}


function setBg(){
  const bg = document.querySelector("#flexible-container-1080p-land")
  const img = globalThis.location.href.split("#")[1];
  if(img){
    bg.style.backgroundImage = `url(./image/${img}.png)`
  }
}
setBg();