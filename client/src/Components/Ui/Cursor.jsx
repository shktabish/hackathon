import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function BlurryCursor({ isActive }) {
    const size = isActive ? 400 : 30
    const mouse = useRef({ x: 0, y: 0 })
    const delayedMouse = useRef({ x: 0, y: 0 })
    const rafId = useRef(null)

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e
        mouse.current = {
            x: clientX,
            y: clientY
        }
    }

    const animate = () => {
        const { x, y } = delayedMouse.current
        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.15), 
            y: lerp(y, mouse.current.y, 0.15)  
        }
        moveCircles(delayedMouse.current.x, delayedMouse.current.y)
        rafId.current = window.requestAnimationFrame(animate)
    }

    useEffect(() => {
        animate()
        window.addEventListener("mousemove", manageMouseMove)
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
            window.cancelAnimationFrame(rafId.current)
        }
    }, [isActive])

    const colors = [
        "#c32d27",
        "#f5c63f",
        "#457ec4",
        "#356fdb",
    ]

    const circles = useRef([])

    const moveCircles = (x, y) => {
        if (circles.current.length < 1) return
        circles.current.forEach((circle, i) => {
            gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 })
        })
    }

    return (
        <div className=''>
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    ref={ref => (circles.current[i] = ref)}
                    className='top-0 left-0 fixed z-50 rounded-full mix-blend-difference pointer-events-none'
                    style={{
                        backgroundColor: colors[i],
                        width: size,
                        height: size,
                        filter: `blur(${isActive ? 20 : 2}px)`,
                        transition: `transform ${(4 - i) * 0.015}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`
                    }}
                />
            ))}
        </div>
    )
}

function lerp(a, b, n) {
    return (1 - n) * a + n * b
}
