
import { RootComponent }  from '../../src/components/app-root/root.component.js';

describe("Component: RootComponent", function() {
  it("should have name", function() {
    let component = new RootComponent();
    expect(component.name).toEqual("Angular");
  });
});
