export const Main = () => {
    var bar = null
    // Although typeof bar === "object" is a reliable way of checking if bar is an object,
    // 1|the surprising gotcha in JavaScript is that null is also considered an object!
    console.log(typeof bar === 'object') // logs true!
}
