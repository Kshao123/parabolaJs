const Parabola = require('../src/parabola');

afterEach(() => {
  window.requestAnimationFrame.mockRestore();
});

beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());

  document.body.innerHTML =
    '<div style="position:relative;">' +
    '  <span style="position: relative; top: 0; left: 0" id="node1" />' +
    '  <span style="position: absolute; top: 100px; left: 100px" id="node2" />' +
    '</div>';
  const targetElement = document.getElementById('node2');
  targetElement.getBoundingClientRect = jest.fn(() => {
    return { top: 200, left: 200, bottom: 0, right: 0, width: 50, height: 50 };
  });
});

test('move node', () => {
  const element = document.getElementById('node1');
  const targetElement = document.getElementById('node2');
  expect(new Parabola(element, targetElement).init())
  expect(element.style['webkit-transform']).toBe('translate(100px,100px)scale(1)')
})
