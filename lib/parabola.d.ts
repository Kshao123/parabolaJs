
interface Options {
    speed?: number | 166.67, // 每帧移动的像素大小，每帧（对于大部分显示屏）大约16~17毫秒
    curvature?: number | 0.001, // 曲率， 实际指焦点到准线的距离，你可以抽象成曲率，这里模拟扔物体的抛物线，因此是开口向下的
    endScale?: string | '1', // 缩放
    progress?: (x: number, y: number) => void,
    complete?: () => void,
}

interface PReturn {
    position: () => this,
    move: () => this, // 曲线运动
    init: () => this, // 初始化方法
}

declare function Parabola(element: Node, target: Node, options?: Options): PReturn;

export default Parabola
