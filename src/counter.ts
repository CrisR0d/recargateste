export function setupCounter(element: { innerHTML: string; addEventListener: (arg0: string, arg1: () => void) => void }) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
