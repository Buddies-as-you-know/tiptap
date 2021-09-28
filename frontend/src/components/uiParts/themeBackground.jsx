import React, { useState, FC, useEffect, useRef } from 'react'

const config = {
   size: 3,
   number: 12,
   fill: 0.1,
}

const colorScheme = [
   '#f2f2f2',
   '#fa709a',
   '#E7DE2F',
   '#fee140',
   '#FFAEAE',
   '#77A5D8',
   '#c2e9fb',
   '#96e6a1',
   '#453a94',
]

const ThemeBackground = () => {
   const canvasRef = useRef(null)

   useEffect(() => {
      const canvas = canvasRef.current
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const c = canvas.getContext('2d')

      function Firework() {
         this.radius = Math.random() * config.size + 1
         this.x = canvas.width / 2
         this.y = canvas.height + this.radius
         this.color =
            colorScheme[Math.floor(Math.random() * colorScheme.length)]
         this.velocity = {
            x: Math.random() * 6 - 3,
            y: Math.random() * 3 + 3,
         }
         this.maxY = (Math.random() * canvas.height) / 4 + canvas.height / 10
         this.life = false
      }

      Firework.prototype.draw = function (c) {
         c.beginPath()
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
         c.fillStyle = this.color
         c.fill()
         c.closePath()
      }

      Firework.prototype.maximumY = function () {
         if (this.y <= this.maxY || this.x <= 0 || this.x >= canvas.width) {
            this.life = true
            for (let i = 0; i < 10; i++) {
               sparkArray.push(
                  new Spark(this.x, this.y, this.radius, this.color)
               )
            }
         }
      }

      Firework.prototype.update = function (c) {
         this.y -= this.velocity.y
         this.x += this.velocity.x

         this.maximumY()

         this.draw(c)
      }
      /** End Firework**/
      /** Spark **/
      function Spark(x, y, radius, color) {
         this.x = x
         this.y = y
         this.radius = radius / 2
         this.color = color
         this.velocity = {
            x: Math.random() * 3 - 1,
            y: Math.random() * 3 - 1,
         }
         this.curve = 0.025
         this.life = 140
      }

      Spark.prototype.draw = function (c) {
         c.beginPath()
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
         c.fillStyle = this.color
         c.fill()
         c.closePath()
      }

      Spark.prototype.update = function (c) {
         this.velocity.y -= this.curve
         this.life -= 1
         this.x += this.velocity.x
         this.y -= this.velocity.y
         this.draw(c)
      }
      /** End Spark **/

      const fireworkArray = []
      const sparkArray = []

      function init() {
         if (fireworkArray.length < config.number) {
            fireworkArray.push(new Firework())
         }
      }

      function animate() {
         window.requestAnimationFrame(animate)

         c.fillStyle = `rgba(0,0,0,${config.fill})`
         c.fillRect(0, 0, canvas.width, canvas.height)

         fireworkArray.forEach((fw, index) => {
            fw.update(c)

            if (fw.life) {
               fireworkArray.splice(index, 1)
            }
         })

         sparkArray.forEach((s, index) => {
            if (s.life <= 0) {
               sparkArray.splice(index, 1)
            }

            s.update(c)
         })

         init()
      }

      animate()
   }, [])

   // cssなのでstringにしています
   return (
      <div style={{ position: 'fixed', zIndex: '-1000' }}>
         <canvas className="canvas" ref={canvasRef} />
      </div>
   )
}

export default ThemeBackground
